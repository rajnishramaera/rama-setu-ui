"use client"

import "@rainbow-me/rainbowkit/styles.css"
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
  lightTheme,
} from "@rainbow-me/rainbowkit"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { arbitrum, base, mainnet, optimism, polygon, zora } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { useTheme } from "next-themes"

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
export function Web3Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  console.log(theme)

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        coolMode
        theme={
          theme === "dark"
            ? darkTheme({ accentColor: "#3366AF" })
            : lightTheme({ accentColor: "#AF79CD" })
        }
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
