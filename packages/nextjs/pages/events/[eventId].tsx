import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { NextPage } from "next";
import { formatEther } from "viem";
import { useAccount, useContractRead, useContractWrite, useNetwork } from "wagmi";
import { Spinner } from "~~/components/assets/Spinner";
import { Address, InputBase } from "~~/components/scaffold-eth";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { mainChainReadConfig, wagmiWriteConfig } from "~~/utils/multichain";
import { changeUnixTimeStamptoDate, notification } from "~~/utils/scaffold-eth";

const SERVER_URL = "http://localhost:9003/api/web3";

const EventDetails: NextPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId as string;
  const { chain: connectedChain } = useNetwork();
  const { data: events, isLoading } = useContractRead({
    ...mainChainReadConfig,
    functionName: "getSportEventData",
    args: [BigInt(eventId)],
  });

  const { address: connectedAddress } = useAccount();

  const writeTxn = useTransactor();

  const [formState, setFormState] = useState<{
    name: string;
    description: string;
    image: File | null;
  }>({
    name: "",
    description: "",
    image: null,
  });

  const { writeAsync: writeCloseSportEvent, isLoading: isWriteCloseSportEventLoading } = useContractWrite({
    ...wagmiWriteConfig(connectedChain),
    functionName: "closeSportEvent",
    args: [BigInt(eventId), []],
  });

  if (!events) {
    return <div className="text-2xl p-8 flex items-center justify-center">No event found</div>;
  }
  if (isLoading) {
    return (
      <div className="text-2xl p-8 flex items-center justify-center">
        <Spinner height="65" width="65" />;
      </div>
    );
  }

  const event = events[0];

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap p-8">
      <div key={eventId} className="card w-[26rem] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl font-bold text-center">Event {eventId}</h2>
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
          <div className="card-actions justify-center mt-2">
            <button
              className="btn btn-primary"
              onClick={async () => {
                try {
                  await writeTxn(writeCloseSportEvent);
                } catch (e) {
                  if (e instanceof Error) {
                    notification.error(e.message);
                    return;
                  }
                  notification.error("Something went wrong");
                }
              }}
            >
              {isWriteCloseSportEventLoading ? <span className="loading loading-spinner"></span> : "close event"}
            </button>

            <label htmlFor="memory-modal" className="btn btn-primary">
              Create Memory
            </label>
          </div>
        </div>
      </div>
      {/*Modal with form to upload image */}
      <div>
        <input type="checkbox" id="memory-modal" className="modal-toggle" />
        <label htmlFor="memory-modal" className="modal cursor-pointer">
          <label className="modal-box relative">
            {/* dummy input to capture event onclick on modal box */}
            <input className="h-0 w-0 absolute top-0 left-0" />
            <label htmlFor="memory-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
              ✕
            </label>
            <div className="w-96 bg-base-100">
              <div className="space-y-4">
                <h2 className="text-xl">Create Memory!</h2>
                <div className="space-y-2">
                  <p className="m-0 text-lg ml-2">Name:</p>
                  <InputBase
                    placeholder="name"
                    value={formState.name}
                    onChange={value => setFormState({ ...formState, name: value })}
                  />
                </div>
                <div className="space-y-2">
                  <p className="m-0 text-lg ml-2">Description :</p>
                  <InputBase
                    placeholder="description"
                    value={formState.name}
                    onChange={value => setFormState({ ...formState, name: value })}
                  />
                </div>
                <div className="space-y-2">
                  <p className="m-0 text-lg ml-2">Description :</p>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                    onChange={e => {
                      if (e.target.files) {
                        setFormState({ ...formState, image: e.target.files[0] });
                        console.log("The uploaded files is:", e.target.files[0]);
                      }
                    }}
                  />
                </div>
                <div className="justify-end">
                  <button
                    className="btn btn-primary"
                    disabled={isWriteCloseSportEventLoading}
                    onClick={async () => {
                      try {
                        const res = await axios.post(`${SERVER_URL}/upload-encrypted-file`, {
                          image: formState.image,
                          creatorAddr: connectedAddress,
                        });
                        console.log("Etfsdfsd", res);
                        console.log("The server response is:", res.data);
                      } catch (e) {
                        if (e instanceof Error) {
                          notification.error(e.message);
                          return;
                        }
                        notification.error("Something went wrong");
                      }
                    }}
                  >
                    {isWriteCloseSportEventLoading ? <span className="loading loading-spinner"></span> : "create"}
                  </button>
                </div>
              </div>
            </div>
          </label>
        </label>
      </div>
    </div>
  );
};

export default EventDetails;
