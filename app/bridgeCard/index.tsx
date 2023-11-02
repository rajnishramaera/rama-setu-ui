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

  setTimeout(function () {
    if (!mounted) {
      console.log("first")
    }
  }, 5000)

  return (
    <div className="flex h-full items-center">
      {mounted ? (
        <div
          className=" mx-auto space-y-6  
        rounded-medium border-2 border-gray-300 bg-gradient-to-tr from-violet-500 to-orange-300 p-6 dark:border-gray-600 dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] dark:from-sky-400 dark:to-indigo-900 lg:w-[30%]">
          <SlideOne />
        </div>
      ) : (
        <BridgeCardSkeleton />
      )}
    </div>
  )
}
export default BridgeCard
