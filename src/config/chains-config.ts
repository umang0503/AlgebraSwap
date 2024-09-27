import { telosTestnet } from "wagmi/chains";
import RPC from "@/lib/rpc-list";
export const defaultChainId = telosTestnet;
export const INPUT_CHAIN_URL = RPC[telosTestnet.id][0];

type ChainInfo = {
  active: boolean;
  mainnet: boolean;
  explorer: string;
  label: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
  rpcUrl: string;
  img: string;
  altText: string;
  router: `0x${string}`;
  lambo: `0x${string}`;
  moon: `0x${string}`;
  wrap: `0x${string}`;
  quoter: `0x${string}`;
};

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [telosTestnet.id]: {
    active: true,
    mainnet: true,
    explorer: "https://teloscan.io",
    label: "Telos Tesnet",
    nativeCurrency: { name: "Telos", symbol: "TLOS", decimals: 18 },
    rpcUrl: RPC[telosTestnet.id][0],
    img: "https://raw.githubusercontent.com/swapsicledex/robinos-images/master/brand/partner/telos.png",
    altText: "Telos logo",
    router: "0x2650e9EFe6D841622aA627cb9e493a8B8b2f9D7A",
    lambo: "0x0d55bC35eD96BFBf8C25530C97C9805B0914deB2",
    moon: "0xCb50b82De7572597eed70F9c095979C2bDDF72D2",
    wrap: "0x6E2542aFC68a1697FeB2810437DF9409D3b93493",
    quoter: "0x7064C7Bb85979f008212877c4CE41285ddf5374C",
  },
};

// URLs
export const METAMASK_URL = "https://metamask.io/download/";
