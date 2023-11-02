import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Roboto_Mono } from "next/font/google"
import Header from "./common/header"
import "./globals.css"
import { ThemeProviders } from "./_providers/themeProviders"
import { Web3Providers } from "./_providers/web3Providers"

const Circles = (
  <ul className="circles">
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
    <li>
      <img className="invert dark:invert-0" src="/network/rama.svg" />
    </li>
  </ul>
)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rama Setu",
  description: "Rama Bridge",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={` dark ${inter.variable} ${roboto_mono.variable} ${jetbrains_mono.variable} px-2`}>
      <body className=" font-jet area px-4">
        {Circles}
        <ThemeProviders>
          <Web3Providers>
            <Header />
            {children}
          </Web3Providers>
        </ThemeProviders>
      </body>
    </html>
  )
}
