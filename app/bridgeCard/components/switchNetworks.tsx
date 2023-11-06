"use client"
import { useFromNetworkStore, useToNetworkStore } from "@/app/_store/zustand"
import { Button } from "@nextui-org/react"
import { useSwitchNetwork } from "wagmi"

const SwitchNetworks = () => {
  const { fromNetwork, setFromNetwork } = useFromNetworkStore()
  const { toNetwork, setToNetwork } = useToNetworkStore()
  const { switchNetwork } = useSwitchNetwork()

  const interchangeNetworks = () => {
    let temp = toNetwork
    switchNetwork?.(parseInt(toNetwork.id))
    setToNetwork(fromNetwork)
    setFromNetwork(temp)
  }

  return (
    <div className="flex w-full justify-center">
      <Button
        isDisabled={
          !fromNetwork?.id ||
          !toNetwork?.id ||
          toNetwork?.id === fromNetwork?.id
        }
        className="bg-white dark:invert dark:bg-slate-200"
        onClick={() => interchangeNetworks()}>
        <img width={20} src="/switch.svg" />
      </Button>
    </div>
  )
}
export default SwitchNetworks
