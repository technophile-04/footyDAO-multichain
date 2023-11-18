import { getTargetNetwork } from "../scaffold-eth";
import { Chain } from "@rainbow-me/rainbowkit";
import deployedContracts from "~~/contracts/deployedContracts";
import scaffoldConfig from "~~/scaffold.config";

const { targetNetwork } = scaffoldConfig;

export const wagmiWriteConfig = (
  chain?: Chain & { unsupported?: boolean },
): {
  address: string;
  abi: (typeof deployedContracts)[typeof targetNetwork.id]["FootyDAO"]["abi"];
  chainId: number;
} => {
  if (chain && chain.id in deployedContracts && chain.id !== getTargetNetwork().id) {
    return {
      // @ts-expect-error
      address: deployedContracts[chain.id].FootyDAOAdapter.address,
      // @ts-expect-error
      abi: deployedContracts[chain.id].FootyDAOAdapter.abi,
      chainId: chain.id,
    };
  }

  return mainChainReadConfig;
};

export const mainChainReadConfig = {
  address: deployedContracts[targetNetwork.id].FootyDAO.address,
  abi: deployedContracts[targetNetwork.id].FootyDAO.abi,
  chainId: targetNetwork.id,
};
