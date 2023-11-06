"use client"
import { useFromNetworkStore, useToNetworkStore } from "@/app/_store/zustand"
import { Avatar, Select, SelectItem } from "@nextui-org/react"
import { useNetwork } from "wagmi"

const SelectToChain = () => {
  const { chain, chains } = useNetwork()
  const { toNetwork, setToNetwork } = useToNetworkStore()
  const { fromNetwork } = useFromNetworkStore()

  return (
    <Select
      items={chains.filter((chain) => {
        return chain?.id !== fromNetwork?.id
      })}
      isDisabled={!chain?.id}
      label="To Chain"
      variant="bordered"
      isMultiline={false}
      onChange={(e) => {
        setToNetwork(
          chains.find((chain) => chain.id === parseInt(e.target.value))
        )
      }}
      selectionMode="single"
      placeholder="Select a Network"
      labelPlacement="outside"
      classNames={{
        base: "w-full",
        trigger: "min-h-unit-12 py-2 rounded-large",
      }}
      renderValue={() => {
        return (
          <div className="flex flex-wrap gap-2">
            <div
              key={toNetwork?.id}
              className=" h-fit p-1 flex gap-4 items-center">
              <Avatar
                alt={toNetwork?.name}
                size="sm"
                src={toNetwork?.iconUrl}
              />
              {toNetwork?.name}
              <span className="text-tiny">{toNetwork?.network}</span>
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
export default SelectToChain
