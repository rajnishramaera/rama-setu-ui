"use client"
import { networks } from "@/app/_config/networks"
import { useFromNetworkStore, useToNetworkStore } from "@/app/_store/zustand"
import { Avatar, Select, SelectItem } from "@nextui-org/react"
import { useEffect } from "react"
import { useNetwork, useSwitchNetwork } from "wagmi"

const SelectFromChain = () => {
  const { chain, chains } = useNetwork()
  const { isLoading, switchNetwork } = useSwitchNetwork()
  const { fromNetwork, setFromNetwork } = useFromNetworkStore()
  const { toNetwork } = useToNetworkStore()

  useEffect(() => {
    setFromNetwork(chain)
  }, [chain])

  return (
    <Select
      items={chains.filter((chain) => {
        return chain?.id !== toNetwork?.id
      })}
      isLoading={isLoading}
      label="From Chain"
      variant="bordered"
      isMultiline={false}
      onChange={(e) => {
        switchNetwork?.(parseInt(e.target.value))
      }}
      selectionMode="single"
      isDisabled={!chain}
      placeholder="Select a Network"
      labelPlacement="outside"
      classNames={{
        base: "w-full",
        trigger: "min-h-unit-12 rounded-large py-2",
      }}
      renderValue={() => {
        if (!chain) {
          return
        }
        return (
          <div className="flex flex-wrap gap-2">
            <div
              key={fromNetwork?.id}
              className=" flex h-fit items-center gap-4 p-1">
              <Avatar
                alt={fromNetwork?.name}
                size="sm"
                src={fromNetwork?.iconUrl}
              />
              {fromNetwork?.name}
              <span className="text-tiny">{fromNetwork?.network}</span>
            </div>
          </div>
        )
      }}>
      {(network: any) => (
        <SelectItem key={network.id} textValue={network.name}>
          <div className="flex gap-2 items-center">
            <Avatar
              alt={network.name}
              className="flex-shrink-0"
              size="sm"
              src={network.iconUrl}
            />
            <div className="flex flex-col">
              <span className="text-small">{network.name}</span>
              <span className="text-tiny text-default-400">
                {network.network}
              </span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  )
}
export default SelectFromChain
