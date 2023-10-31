import type { Metadata } from "next"
import { Inter, Roboto_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

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
      className={` dark ${inter.variable} ${roboto_mono.variable} ${jetbrains_mono.variable} px-2`}
    >
      <body className=" font-jet">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
