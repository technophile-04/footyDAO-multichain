import React, { useCallback, useState } from "react";
import { Chat } from "@pushprotocol/uiweb";
import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import { hardhat, mainnet } from "viem/chains";
import { useAccount, useSwitchNetwork } from "wagmi";
import { ArrowsRightLeftIcon, ChevronDownIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { useEthersSigner } from "~~/hooks/Ethers";
import { useGlobalState } from "~~/services/store/store";
import { enabledChains } from "~~/services/web3/wagmiConnectors";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrencyPrice);
  const isLocalNetwork = getTargetNetwork().id === hardhat.id;
  const { switchNetwork } = useSwitchNetwork();
  const { isConnected } = useAccount();
  const signer = useEthersSigner();

  const [hideWorldCoin, setHideWorldCoin] = useState(false);
  const handleProof = useCallback((result: ISuccessResult) => {
    return new Promise<void>(resolve => {
      console.log("The result after verification is : ", result);
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }, []);

  const onSuccess = (result: ISuccessResult) => {
    setHideWorldCoin(true);
    console.log(result);
  };

  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div>
                <div className="btn btn-primary btn-sm font-normal normal-case gap-1 cursor-auto">
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <span>{nativeCurrencyPrice}</span>
                </div>
              </div>
            )}
            {isConnected && (
              <div className="dropdown dropdown-top">
                <label tabIndex={0} className="btn btn-primary btn-sm font-normal normal-case gap-1 cursor-auto">
                  <span>Switch network</span>
                  <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 mt-1 shadow-center shadow-accent bg-base-200 rounded-box gap-1"
                >
                  {enabledChains
                    .filter(chain => chain.id !== mainnet.id)
                    .map(chain => (
                      <li key={chain.id}>
                        <button className="menu-item" type="button" onClick={() => switchNetwork?.(chain.id)}>
                          <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" />
                          <span className="whitespace-nowrap">Switch to {chain.name}</span>
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {!hideWorldCoin && (
              <div className="flex self-center">
                <IDKitWidget
                  action="my_action"
                  signal="my_signal"
                  onSuccess={onSuccess}
                  handleVerify={handleProof}
                  app_id="app_staging_4f76c073620098cb451497609cc8cf9c"
                >
                  {({ open }) => (
                    <button className="btn btn-primary btn-sm font-normal normal-case cursor-auto" onClick={open}>
                      Connect with world coin
                    </button>
                  )}
                </IDKitWidget>
              </div>
            )}
          </div>
          <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
        </div>
      </div>
      {signer && (
        <Chat
          account={"0x55b9CB0bCf56057010b9c471e7D42d60e1111EEa"} //user address
          supportAddress="0x1A2d838c4bbd1e73d162d0777d142c1d783Cb831" //support address
          signer={signer}
        />
      )}
    </div>
  );
};
