import { NextPage } from "next";
import { formatEther } from "viem";
import { useContractRead, useContractWrite, useNetwork } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { mainChainReadConfig, wagmiWriteConfig } from "~~/utils/multichain";
import { changeUnixTimeStamptoDate, notification } from "~~/utils/scaffold-eth";

const AllEvents: NextPage = () => {
  const { chain: connectedChain } = useNetwork();
  const writeTxn = useTransactor();
  const { data: allSportEvent } = useContractRead({
    ...mainChainReadConfig,
    functionName: "getAllSportEventsData",
  });

  const { writeAsync: writeJoinSportsEvent } = useContractWrite({
    ...wagmiWriteConfig(connectedChain),
    functionName: "joinSportEventSingle",
    args: [0n],
    value: 0n,
  });

  return (
    <div className="flex items-center justify-center p-8 gap-4 flex-wrap">
      {allSportEvent?.map((event, index) => (
        <div key={index} className="card w-[26rem] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-xl font-bold">Event {index + 1}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="spacey-y-2">
                <p className="m-0 font-medium text-lg">Start time</p>
                <p className="m-0">{changeUnixTimeStamptoDate(event.startTime.toString())}</p>
              </div>
              <div className="spacey-y-2">
                <p className="m-0 font-medium text-lg">End time</p>
                <p className="m-0">{changeUnixTimeStamptoDate(event.endTime.toString())}</p>
              </div>
              <div className="spacey-y-2">
                <p className="m-0 font-medium text-lg">Registration deadline</p>
                <p className="m-0">{changeUnixTimeStamptoDate(event.registrationWindow.toString())}</p>
              </div>
              <div className="spacey-y-2">
                <p className="m-0 font-medium text-lg">Max Attendees</p>
                <p className="m-0">{event.maxAttendance.toString()}</p>
              </div>
              <div className="spacey-y-2">
                <p className="m-0 font-medium text-lg">Stake amount</p>
                <p className="m-0">{formatEther(event.stake)}</p>
              </div>
              <div className="spacey-y-2">
                <p className="m-0 font-medium text-lg">Cost</p>
                <p className="m-0">{formatEther(event.cost)}</p>
              </div>
              <div className="spacey-y-2">
                <p className="m-0 font-medium text-lg">Total amount</p>
                <p className="m-0">{formatEther(event.stake + event.cost)}</p>
              </div>
              <div className="spacey-y-2">
                <p className="m-0 font-medium text-lg">Creator</p>
                <Address address={event.creator} />
              </div>
            </div>
            <div className="card-actions justify-end mt-2">
              <button
                className="btn btn-primary"
                onClick={async () => {
                  try {
                    await writeTxn(() =>
                      writeJoinSportsEvent({ args: [BigInt(index)], value: event.stake + event.cost }),
                    );
                  } catch (e) {
                    if (e instanceof Error) {
                      notification.error(e.message);
                      return;
                    }
                    notification.error("Something went wrong");
                  }
                }}
              >
                Join now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllEvents;
