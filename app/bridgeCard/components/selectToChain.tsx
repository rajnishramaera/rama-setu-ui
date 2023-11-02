"use client"
import { networks } from "@/app/_config/networks"
import { useFromNetworkStore, useToNetworkStore } from "@/app/_store/zustand"
import { Select, Avatar, SelectItem } from "@nextui-org/react"

const SelectToChain = () => {
  const { toNetwork, setToNetwork } = useToNetworkStore()
  const { fromNetwork } = useFromNetworkStore()
  return (
    <Select
      items={networks.filter((network) => {
        return network.id !== fromNetwork
      })}
      label="To Chain"
      variant="bordered"
      isMultiline={false}
      onChange={(e) => {
        setToNetwork(e.target.value)
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
              key={networks.find((ntwk) => toNetwork === ntwk.id)?.id}
              className=" h-fit p-1 flex gap-4 items-center">
              <Avatar
                alt={networks.find((ntwk) => toNetwork === ntwk.id)?.name}
                size="sm"
                src={networks.find((ntwk) => toNetwork === ntwk.id)?.icon}
              />
              {networks.find((ntwk) => toNetwork === ntwk.id)?.name}
              <span className="text-tiny">
                {networks.find((ntwk) => toNetwork === ntwk.id)?.moreDetils}
              </span>
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
              src={network.icon}
            />
            <div className="flex flex-col">
              <span className="text-small">{network.name}</span>
              <span className="text-tiny text-default-400">
                {network.moreDetils}
              </span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  )
}
export default SelectToChain
