import { CHAIN_INFO } from "@/config/chains-config";
import { zeroAddress } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { SWAP_ROUTER_ABI } from "@/abis/abiRouter";
import { SwapAmount, TokenIn, TokenOut } from "@/config/state/atoms";
import { useRecoilValue } from "recoil";
import { toWei } from "./../function/miscfunction";
export default function Swap() {
  const tokenInside = useRecoilValue(TokenIn);
  const tokenOutside = useRecoilValue(TokenOut);
  const swapValue = useRecoilValue(SwapAmount);
  const { address } = useAccount();
  let actualTime = Math.floor(Date.now() / 1000);
  type singleParam = {
    tokenIn: `0x${string}`;
    tokenOut: `0x${string}`;
    recipient: `0x${string}`;
    amountIn: number;
    amountOutMinimum: number;
    limitSqrtPrice: number;
  };
  const inputSingleParam: singleParam = {
    tokenIn: tokenInside,
    tokenOut: tokenOutside,
    recipient: address ? address : zeroAddress,
    amountIn: toWei(swapValue),
    amountOutMinimum: 0,
    limitSqrtPrice: 0,
  };
  const { chainId } = useAccount();
  const { data: hash, writeContractAsync } = useWriteContract();
  async function SwapToken() {
    console.log(tokenInside);
    try {
      await writeContractAsync({
        address: CHAIN_INFO[chainId ? chainId : zeroAddress].router,
        abi: SWAP_ROUTER_ABI,
        functionName: "exactInputSingle",
        args: [{ ...inputSingleParam, deadline: actualTime + 30 }],
      });
    } catch {}
  }
  return [SwapToken];
}
