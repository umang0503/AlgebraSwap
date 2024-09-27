"use client";

import { ReactNode } from "react";
import { type State, WagmiProvider } from "wagmi";
import { config } from "@/config/wagmi-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { arbitrumSepolia } from "wagmi/chains";

createWeb3Modal({
  wagmiConfig: config,
  projectId: "edf829805773e8b24f3d99b2b9253441",
  enableAnalytics: true,
  enableOnramp: true,
  allowUnsupportedChain: false,
  defaultChain: arbitrumSepolia,
});

type Props = {
  children: ReactNode;
  initialState: State | undefined;
};

const queryClient = new QueryClient();

export default function WagmiProviderWrapper({
  children,
  initialState,
}: Props) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
