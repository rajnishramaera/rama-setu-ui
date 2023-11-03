"use client"

import {
  Chain,
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
  lightTheme,
} from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { useTheme } from "next-themes"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { mainnet, polygon } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

const RAMESTTA: Chain = {
  id: 1370,
  name: "RAMESTTA",
  network: "RAMESTTA",
  iconUrl:
    "https://raw.githubusercontent.com/Ramestta-Blockchain/ramascan/main/public/static/ramestta_32x32_mm_icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "RAMESTTA",
    symbol: "RAMA",
  },
  rpcUrls: {
    public: { http: ["https://blockchain.ramestta.com"] },
    default: { http: ["https://blockchain.ramestta.com"] },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://ramascan.com/" },
    etherscan: { name: "SnowTrace", url: "https://ramascan.com/" },
  },
  /* contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11_907_934,
    },
  }, */
  testnet: false,
}

const { chains, publicClient } = configureChains(
  [RAMESTTA, mainnet, polygon],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "RamaSETU",
  projectId: "91d13f90fa3c55cac0cba326a4fb1020",
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
export function Web3Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        coolMode
        theme={
          theme === "dark"
            ? darkTheme({ accentColor: "#3366AF" })
            : lightTheme({ accentColor: "#AF79CD" })
        }>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
