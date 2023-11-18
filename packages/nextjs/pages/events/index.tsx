import { useState } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { formatEther } from "viem";
import { useContractRead, useContractWrite, useNetwork } from "wagmi";
import { Spinner } from "~~/components/assets/Spinner";
import { Address } from "~~/components/scaffold-eth";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { mainChainReadConfig, wagmiWriteConfig } from "~~/utils/multichain";
import { changeUnixTimeStamptoDate, notification } from "~~/utils/scaffold-eth";

type SportsEvent =
  | {
      creator: string;
      startTime: bigint;
      endTime: bigint;
      registrationWindow: bigint;
      stake: bigint;
      cost: bigint;
      maxAttendance: bigint;
      participants: readonly string[];
      waitingList: readonly string[];
      takenWaitingList: bigint;
      tokenIds: readonly bigint[];
      eventId: number;
    }[];

const AllEvents: NextPage = () => {
  const { chain: connectedChain } = useNetwork();
  const [eventsAlreadyEnded, setEventsAlreadyEnded] = useState<SportsEvent>([]);
  const [eventsNotEnded, setEventsNotEnded] = useState<SportsEvent>([]);
  const [filterOptions, setFilterOptions] = useState<"ended" | "not-ended">("not-ended");
  const writeTxn = useTransactor();
  const { isLoading, isFetching, isRefetching } = useContractRead({
    ...mainChainReadConfig,
    functionName: "getAllSportEventsData",
    onSuccess: data => {
      const now = new Date().getTime() / 1000;
      const dataWithEventId = data.map((event, index) => ({ ...event, eventId: index + 1 }));
      const endedEvents = dataWithEventId.filter(event => event.endTime < now);
      setEventsAlreadyEnded(endedEvents);
      const notEndedEvents = dataWithEventId.filter(event => event.endTime > now);
      setEventsNotEnded(notEndedEvents);
    },
  });

  const { writeAsync: writeJoinSportsEvent } = useContractWrite({
    ...wagmiWriteConfig(connectedChain),
    functionName: "joinSportEventSingle",
    args: [0n],
    value: 0n,
  });

  return (
    <div className="p-8 flex-col space-y-6">
      <select
        className="select select-bordered w-full max-w-xs"
        value={filterOptions}
        onChange={e => setFilterOptions(e.target.value as "ended" | "not-ended")}
      >
        <option value={"not-ended"}>Not ended</option>
        <option value={"ended"}>Ended</option>
      </select>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {isLoading || isRefetching || isFetching ? (
          <Spinner width="50" height="50" />
        ) : (
          <>
            {filterOptions === "ended" &&
              eventsAlreadyEnded?.map(event => (
                <div key={event.eventId} className="card w-[26rem] bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="text-xl font-bold">Event {event.eventId}</h2>
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
                      <Link href={`/events/${event.eventId}`} className="btn btn-primary">
                        details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            {filterOptions === "not-ended" &&
              eventsNotEnded?.map(event => (
                <div key={event.eventId} className="card w-[26rem] bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="text-xl font-bold">Event {event.eventId}</h2>
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
                              writeJoinSportsEvent({ args: [BigInt(event.eventId)], value: event.stake + event.cost }),
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
          </>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
