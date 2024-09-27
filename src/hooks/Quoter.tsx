import { config } from "@/config/wagmi-config";
import { readContract } from "@wagmi/core";
import { QUOTER_ABI } from "@/abis/abiQuoter";
import { useAccount } from "wagmi";
import { CHAIN_INFO } from "@/config/chains-config";
import { zeroAddress } from "viem";
export default function Quoter() {
  const { chainId } = useAccount();
  async function ReadQuotes(tokenFrom: any, tokenTo: any, swapValue: any) {
    const quote: any = await readContract(config, {
      abi: QUOTER_ABI,
      address: CHAIN_INFO[chainId ? chainId : zeroAddress].quoter,
      functionName: "quoteExactInputSingle",
      args: [tokenFrom, tokenTo, swapValue, 0],
    });
    return quote;
  }
  return [ReadQuotes];
}
