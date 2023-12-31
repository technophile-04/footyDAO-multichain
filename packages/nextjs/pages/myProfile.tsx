import { useEffect, useState } from "react";
import { NextPage } from "next";
import { isAddress } from "viem";
import { useAccount, useBalance, useEnsAvatar, useEnsName } from "wagmi";
import { Balance, BlockieAvatar } from "~~/components/scaffold-eth";

const BarcelonaTokenAddress = "0xdfA36e9522A8a79a87F15E742DBB13186BEB0F1B";
const JuventusTokenAddress = "0x8D13054a6b2518720C3329bd5b9A1cC8068C1902";

const mockData = [
  {
    name: "Event: ETH Istanbul!",
    description: "Carlos scoring a goal",
    image:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Event: ETH CC!",
    description: "People cheering",
    image:
      "https://images.unsplash.com/photo-1504016798967-59a258e9386d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Event: ETH Tokyo",
    description: "Goalkeeper saving a goal",
    image:
      "https://images.unsplash.com/photo-1542852869-ecc293ff89c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const MyProfile: NextPage = () => {
  const [ens, setEns] = useState<string | null>();
  const { address } = useAccount();
  const [ensAvatar, setEnsAvatar] = useState<string | null>();

  const { data: fetchedEns } = useEnsName({ address, enabled: isAddress(address ?? ""), chainId: 1 });
  const { data: fetchedEnsAvatar } = useEnsAvatar({
    name: fetchedEns,
    enabled: Boolean(fetchedEns),
    chainId: 1,
    cacheTime: 30_000,
  });

  const { data: barcelonTokenBalance } = useBalance({
    token: BarcelonaTokenAddress,
    address: address,
    watch: true,
    chainId: 88888,
  });

  const { data: juventusTokenBalance } = useBalance({
    token: JuventusTokenAddress,
    address: address,
    watch: true,
    chainId: 88888,
  });

  // We need to apply this pattern to avoid Hydration errors.
  useEffect(() => {
    setEns(fetchedEns);
  }, [fetchedEns]);

  useEffect(() => {
    setEnsAvatar(fetchedEnsAvatar);
  }, [fetchedEnsAvatar]);

  let displayAddress = address?.slice(0, 5) + "..." + address?.slice(-4);

  if (ens) {
    displayAddress = ens;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-8 flex-wrap">
      <div className="card w-[26rem] bg-base-100 shadow-xl">
        <div className="card-body">
          {address ? (
            <>
              <h2 className="text-3xl font-bold text-center">My Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col col-span-2 space-y-2 items-center justify-center">
                  <BlockieAvatar address={address} ensImage={ensAvatar} size={100} />
                  <p className={`m-0 text-xl font-normal`}>{displayAddress}</p>
                </div>
                <h2 className="text-2xl font-semibold text-center col-span-2 mb-0">Fan Tokens(Chiliz)</h2>
                <div className="space-y-1">
                  <p className="m-0 text-xl">Barcelona Token</p>
                  <p className="m-0 text-center">
                    {barcelonTokenBalance ? barcelonTokenBalance.formatted : 0} {barcelonTokenBalance?.symbol}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="m-0 text-xl">Juventus Token</p>
                  <p className="m-0 text-center">
                    {juventusTokenBalance ? juventusTokenBalance.formatted : 0} {juventusTokenBalance?.symbol}
                  </p>
                </div>
                <div className="flex flex-col items-center col-span-2">
                  <p className="m-0 text-xl">Balance</p>
                  <Balance address={address} className="p-0 m-0 text-lg font-semibold" divClassName="!justify-start" />
                </div>
              </div>
            </>
          ) : (
            <h2 className="text-xl font-bold">Please connect you wallet</h2>
          )}
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center">My Memories</h2>
      <div className="flex gap-6 flex-wrap items-center justify-center">
        {mockData.map((data, index) => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl" key={index}>
            <figure className="max-h-60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.image} alt="football player" height={100} />
            </figure>
            <div className="card-body">
              <h2 className="card-title !mb-0">{data.name}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
