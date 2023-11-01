"use client"

import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
  lightTheme,
} from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { useTheme } from "next-themes"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { arbitrum, base, mainnet, optimism, polygon, zora } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
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
