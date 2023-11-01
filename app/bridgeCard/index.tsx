"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useEffect, useState } from "react"
import BridgeCardSkeleton from "./components/bridgeCardSkeleton"
import SelectFromChain from "./components/selectFromChain"
import SelectToChain from "./components/selectToChain"
import SelectToken from "./components/selectToken"
import SwitchNetworks from "./components/switchNetworks"

const SlideOne = () => (
  <>
    <SelectToken />
    <SelectFromChain />
    <SwitchNetworks />
    <SelectToChain />
    <ConnectButton />
  </>
)

const BridgeCard = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center h-full">
      {mounted ? (
        <div className="space-y-6 mx-auto border-2 dark:border-gray-600 border-gray-300 lg:w-[30%] bg-gradient-to-tr from-violet-500 to-orange-300 dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] dark:from-sky-400 dark:to-indigo-900 p-6 rounded-medium">
          <SlideOne />
        </div>
      ) : (
        <BridgeCardSkeleton />
      )}
    </div>
  )
}
export default BridgeCard
