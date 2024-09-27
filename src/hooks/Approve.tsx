import { CHAIN_INFO } from "@/config/chains-config";
import { zeroAddress } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { TOKEN_ABI } from "@/abis/abiToken";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsApproved, SwapAmount, TokenIn } from "@/config/state/atoms";
import { toWei } from "@/function/miscfunction";
export default function Approve() {
  const { chainId } = useAccount();
  const swapValue = useRecoilValue(SwapAmount);
  const [approved, setIsApproved] = useRecoilState(IsApproved);
  const { data: hash, writeContractAsync } = useWriteContract();
  const tokenFrom = useRecoilValue(TokenIn);
  async function ApproveSwap() {
    try {
      const stakeHash = await writeContractAsync({
        address: tokenFrom,
        abi: TOKEN_ABI,
        functionName: "approve",
        args: [
          CHAIN_INFO[chainId ? chainId : zeroAddress].router,
          toWei(swapValue),
        ],
      });
      setIsApproved(swapValue);
    } catch (e) {
      console.log(e);
    }
  }
  return [ApproveSwap];
}
