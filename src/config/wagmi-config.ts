import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { defineChain } from "viem";
import {
  http,
  createConfig,
  cookieStorage,
  createStorage,
  fallback,
} from "wagmi";
import { telos } from "wagmi/chains";
import { walletConnect, metaMask, injected } from "wagmi/connectors";

export const telosTesnet = defineChain({
  id: 41,
  name: "Telos Testnet ",
  nativeCurrency: {
    name: "Telos",
    symbol: "TLOS",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://testnet.telos.net/evm"] },
  },
  blockExplorers: {
    default: {
      name: "Tesnet explorer",
      url: "https://teloscan.io",
    },
  },
});
// export const config = createConfig({
//   chains,
//   connectors: [
//     // injected(),
//     walletConnect({
//       projectId: 'edf829805773e8b24f3d99b2b9253441',
//       metadata: metadata,
//     }),
//     metaMask({ dappMetadata: metadata, extensionOnly: true }),
//   ],
//   transports: {
//     [telos.id]: fallback([
//       http('https://rpc3.us.telos.net/evm'),
//       http('https://api.kainosbp.com/evm'),
//       http('https://mainnet.telos.net/evm'),
//       http('https://mainnet15.telos.net/evm'),
//       http('https://evm.telos.detroitledger'),
//       http('https://mainnet-us.telos.net/evm'),
//       http('https://mainnet-eu.telos.net/evm'),
//       http('https://mainnet-asia.telos.net/evm'),
//       http('https://1rpc.io/telos/evm'),
//       http('https://telos.drpc.org'),
//       http('wss://telos.drpc.org'),
//       http('https://evm.telos.detroitledger.tech/evm'),
//       http('https://evm.telos.detroitledge'),
//       http('https://40.rpc.thirdweb.com'),
//     ]),
//     [arbitrumSepolia.id]: fallback([
//       http('https://public.stackup.sh/api/v1/node/arbitrum-sepolia'),
//       http('https://endpoints.omniatech.io/v1/arbitrum/sepolia/public'),
//       http('https://arbitrum-sepolia.blockpi.network/v1/rpc/public'),
//       http('https://sepolia-rollup.arbitrum.io/rpc'),
//     ]),
//     [botanix.id]: http(),
//   },
//   ssr: true,
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
// });

// import { cookieStorage, createStorage } from "wagmi";
// import { arbitrumSepolia, telos } from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
// export const projectId = "e81d5af011a785611cd61763de061c2b";

// if (!projectId) throw new Error("Project ID is not defined");

// const metadata = {
//   name: "Robinos",
//   description: "Sports Performance Trading Platform",
//   url: "https://robinos.finance/",
//   icons: ["/images/Swapsicle-Icon.png"],
// };

// Create wagmiConfig
//
const metadata = {
  name: "Robinos",
  description: "Sports Performance Trading Platform",
  url: "https://robinos.finance/",
  icons: ["/images/Swapsicle-Icon.png"],
};
const chains = [telosTesnet] as const;
export const config = defaultWagmiConfig({
  chains: [telosTesnet] as const,
  projectId: "",
  metadata: metadata,
  transports: {
    [telosTesnet.id]: fallback([http("https://testnet.telos.net/evm")]),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  // ...wagmiOptions, // Optional - Override createConfig parameters
});
