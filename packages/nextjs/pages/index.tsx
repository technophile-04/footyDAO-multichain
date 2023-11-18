import { useState } from "react";
import type { NextPage } from "next";
import { parseEther } from "viem";
import { useContractWrite, useNetwork } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { InputBase } from "~~/components/scaffold-eth";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { wagmiWriteConfig } from "~~/utils/multichain";
import { notification } from "~~/utils/scaffold-eth";

export const NUMBER_REGEX = /^\.?\d+\.?\d*$/;

export const isConvertibltToBigint = (value: string) => {
  try {
    BigInt(value);
    return true;
  } catch (e) {
    return false;
  }
};

export const isConvertibltToEther = (value: string) => {
  try {
    parseEther(value);
    return true;
  } catch (e) {
    return false;
  }
};

const Home: NextPage = () => {
  const [formState, setFormState] = useState({
    startTime: "",
    endTime: "",
    registrationTime: "",
    stake: "",
    cost: "",
    maxAttendees: "",
  });

  const { chain: connectedChain } = useNetwork();
  const writeTxn = useTransactor();

  const { writeAsync: writeSportsEvent, isLoading: isWriteSportEventLoading } = useContractWrite({
    ...wagmiWriteConfig(connectedChain),
    functionName: "createSportEvent",
    args: [0n, 0n, 0n, 0n, 0n, 0n],
  });

  const handleCreateEvent = async () => {
    try {
      const parsedStartTime = (new Date(formState.startTime).getTime() / 1000).toString();
      const parsedEndTime = (new Date(formState.endTime).getTime() / 1000).toString();
      const parsedRegistrationTime = (new Date(formState.registrationTime).getTime() / 1000).toString();

      if (
        !isConvertibltToBigint(parsedStartTime) ||
        !isConvertibltToBigint(parsedEndTime) ||
        !isConvertibltToBigint(parsedRegistrationTime) ||
        !isConvertibltToEther(formState.stake) ||
        !isConvertibltToEther(formState.cost) ||
        !isConvertibltToBigint(formState.maxAttendees)
      ) {
        notification.error("Invalid input");
        return;
      }

      await writeTxn(() =>
        writeSportsEvent({
          args: [
            BigInt(parsedStartTime),
            BigInt(parsedEndTime),
            BigInt(parsedRegistrationTime),
            parseEther(formState.stake),
            parseEther(formState.cost),
            BigInt(formState.maxAttendees),
          ],
        }),
      );
    } catch (e) {
      if (e instanceof Error) {
        notification.error(e.message);
        return;
      }
      notification.error("Something went wrong");
    }
  };

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Create Event!</h2>
            <div className="space-y-2">
              <p className="m-0 text-lg ml-2">Start time</p>
              <div className={`flex border-2 border-base-300 bg-base-200 rounded-full text-accent`}>
                <input
                  value={formState.startTime}
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/50 text-gray-400"
                  type="datetime-local"
                  onChange={e => setFormState({ ...formState, startTime: e.target.value })}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="m-0 text-lg ml-2">End time</p>
              <div className={`flex border-2 border-base-300 bg-base-200 rounded-full text-accent`}>
                <input
                  value={formState.endTime}
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/50 text-gray-400"
                  type="datetime-local"
                  onChange={e => setFormState({ ...formState, endTime: e.target.value })}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="m-0 text-lg ml-2">Registration time</p>
              <div className={`flex border-2 border-base-300 bg-base-200 rounded-full text-accent`}>
                <input
                  value={formState.registrationTime}
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/50 text-gray-400"
                  type="datetime-local"
                  onChange={e => setFormState({ ...formState, registrationTime: e.target.value })}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="m-0 text-lg ml-2">Stake amount</p>
              <InputBase
                placeholder="Amount to stake"
                value={formState.stake}
                onChange={value => setFormState({ ...formState, stake: value })}
                error={Boolean(formState.stake) && !NUMBER_REGEX.test(formState.stake)}
              />
            </div>
            <div className="space-y-2">
              <p className="m-0 text-lg ml-2">Cost amount</p>
              <InputBase
                placeholder="cost amount"
                value={formState.cost}
                onChange={value => setFormState({ ...formState, cost: value })}
                error={Boolean(formState.cost) && !NUMBER_REGEX.test(formState.cost)}
              />
            </div>
            <div className="space-y-2">
              <p className="m-0 text-lg ml-2">Max attendees</p>
              <div className={`flex border-2 border-base-300 bg-base-200 rounded-full text-accent`}>
                <input
                  value={formState.maxAttendees}
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/50 text-gray-400"
                  type="number"
                  placeholder="max number of attendees"
                  onChange={e => setFormState({ ...formState, maxAttendees: e.target.value })}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" disabled={isWriteSportEventLoading} onClick={handleCreateEvent}>
                {isWriteSportEventLoading ? <span className="loading loading-spinner"></span> : "create"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
