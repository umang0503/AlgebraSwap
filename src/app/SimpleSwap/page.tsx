"use client";

import { Button } from "@/components/ui/button";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  IsApproved,
  SwapAmount,
  TokenIn,
  TokenOut,
} from "@/config/state/atoms";
import Approve from "../../hooks/Approve";
import Swap from "@/hooks/Swap";
import { HeightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { CHAIN_INFO } from "@/config/chains-config";

export default function Home() {
  const [ApproveSwap] = Approve();
  const [SwapToken] = Swap();
  const [swapValues, setSwapValue] = useRecoilState(SwapAmount);
  const isApprove = useRecoilValue(IsApproved);
  const [tokenFrom, setTokenFrom] = useState("Moon");
  const [tokenTo, setTokenTo] = useState("Lambo");
  const [tokenFromId, setTokenFromId] = useRecoilState(TokenIn);
  const [tokenToId, setTokenToId] = useRecoilState(TokenOut);

  function onTokenSwitch() {
    if (tokenFrom === "Moon") {
      setTokenFrom(tokenTo);
      setTokenTo("Moon");
      setTokenFromId(CHAIN_INFO[41].lambo);
      setTokenToId(CHAIN_INFO[41].moon);
    } else if (tokenFrom === "Lambo") {
      setTokenFrom(tokenTo);
      setTokenTo("Lambo");
      setTokenFromId(CHAIN_INFO[41].moon);
      setTokenToId(CHAIN_INFO[41].lambo);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-900 flex flex-col items-center">
      <div className="w-full max-w-3xl px-6 pt-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Robinos</div>
          <div className="flex space-x-8">
            <a
              href="/SimpleSwap"
              aria-label="SimpleSwap"
              className="text-white text-lg hover:underline"
            >
              Simple Swap
            </a>
            <a
              href="/MultiSwap"
              aria-label="MultiSwap"
              className="text-white text-lg hover:underline"
            >
              Multiple Swap
            </a>
          </div>
          <div>
            <w3m-button />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-12 w-full">
        <div className="md:w-[40%] sm:w-[80%] bg-white rounded-2xl bg-opacity-10 shadow-lg backdrop-blur-md border-gradient p-6">
          <div className="grid gap-6">
            <h1 className="text-xl text-white font-semibold text-center">
              Swap Token
            </h1>

            {/* Container for Moon Token */}
            <div className="w-full h-[75px] bg-darkblue rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center"></div>
                <div className="text-white font-medium">{tokenFrom}</div>
              </div>
              <input
                value={swapValues}
                onChange={(e) => {
                  setSwapValue(e.target.value);
                }}
                type="text"
                className="w-[150px] bg-transparent text-white text-right outline-none"
                placeholder="Enter amount"
              />
            </div>

            {/* Token Switch Icon */}
            <div className="flex justify-center items-center">
              <div
                onClick={onTokenSwitch}
                className="flex justify-center items-center rounded-full bg-darkblue h-12 w-12 cursor-pointer transition-transform transform hover:scale-110"
              >
                <HeightIcon className="text-white w-6 h-6" />
              </div>
            </div>

            {/* Container for Lambo Token */}
            <div className="w-full h-[75px] bg-darkblue rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center"></div>
                <div className="text-white font-medium">{tokenTo}</div>
              </div>
              <input
                type="Text"
                className="w-[150px] bg-transparent text-white text-right outline-none"
                placeholder="Enter amount"
              />
            </div>

            {/* Conversion Rate */}
            <div className="w-full h-[75px] bg-darkblue rounded-lg p-4 flex justify-between items-center">
              <div className="text-white font-medium">Conversion Rate</div>
              <div className="text-white font-bold">1 MOON = 5 LAMBO</div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center">
              {isApprove ? (
                <Button
                  onClick={SwapToken}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all"
                >
                  Swap
                </Button>
              ) : (
                <Button
                  onClick={ApproveSwap}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all"
                >
                  Approve
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
