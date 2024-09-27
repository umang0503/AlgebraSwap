import { atom } from "recoil";
import { CHAIN_INFO } from "./../chains-config";
import { zeroAddress } from "viem";

export const SwapAmount = atom({
  key: "swapValue",
  default: "",
});

export const TokenIn = atom({
  key: "tokenIn",
  default: CHAIN_INFO[41].moon ? CHAIN_INFO[41].moon : zeroAddress,
});
export const TokenOut = atom({
  key: "tokenOut",
  default: CHAIN_INFO[41].lambo ? CHAIN_INFO[41].lambo : zeroAddress,
});
export const advanceTokenIn = atom({
  key: "advtokenIn",
  default: CHAIN_INFO[41].moon ? CHAIN_INFO[41].moon : zeroAddress,
});
export const advanceTokenOut = atom({
  key: "advtokenOut",
  default: CHAIN_INFO[41].lambo ? CHAIN_INFO[41].lambo : zeroAddress,
});
export const IsApproved = atom({
  key: "approve",
  default: "",
});
