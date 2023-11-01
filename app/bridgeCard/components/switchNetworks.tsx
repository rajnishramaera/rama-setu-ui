"use client"
import { useFromNetworkStore, useToNetworkStore } from "@/app/_store/zustand"
import { Button } from "@nextui-org/react"

const SwitchNetworks = () => {
  const { fromNetwork, setFromNetwork } = useFromNetworkStore()
  const { toNetwork, setToNetwork } = useToNetworkStore()

  const interchangeNetworks = () => {
    let temp = fromNetwork
    setFromNetwork(toNetwork)
    setToNetwork(temp)
  }

  return (
    <div className="flex w-full justify-center">
      <Button
        isDisabled={!fromNetwork || !toNetwork || toNetwork === fromNetwork}
        className="bg-white dark:invert dark:bg-slate-200"
        onClick={() => interchangeNetworks()}
      >
        <img width={20} src="/switch.svg" />
      </Button>
    </div>
  )
}
export default SwitchNetworks
