"use client"
import { Select, SelectItem, Avatar, Input } from "@nextui-org/react"
import { useAmountStore, useTokenStore } from "@/app/_store/zustand"
import { tokens } from "@/app/_config/tokens"
import { isNumeric } from "@/app/_utils/isNumeric"

const SelectToken = () => {
  const { token, setToken } = useTokenStore()
  const { amount, setAmount } = useAmountStore()

  return (
    <div className="flex gap-2">
      <Select
        items={tokens}
        label="Token"
        variant="bordered"
        isMultiline={false}
        onChange={(e) => {
          setToken(e.target.value)
          // console.log(tokens.find((token) => e.target.value === token.id))
        }}
        selectionMode="single"
        placeholder="Select a Token"
        labelPlacement="outside"
        classNames={{
          base: "w-3/5",
          trigger: "min-h-unit-12 py-2 rounded-large",
        }}
        renderValue={(items) => {
          return (
            <div className="flex flex-wrap gap-2">
              {items.map((item: any) => (
                <div
                  key={item.key}
                  className=" h-fit p-1 flex gap-4 items-center"
                >
                  <Avatar alt={item.data.name} size="sm" src={item.data.icon} />
                  {item.data.name}
                </div>
              ))}
            </div>
          )
        }}
      >
        {(token) => (
          <SelectItem key={token.id} textValue={token.name}>
            <div className="flex gap-2 items-center">
              <Avatar
                alt={token.name}
                className="flex-shrink-0"
                size="sm"
                src={token.icon}
              />
              <div className="flex flex-col">
                <span className="text-small">{token.name}</span>
                <span className="text-tiny text-default-400">
                  {token.moreDetils}
                </span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
      <Input
        classNames={{
          base: "w-2/5 text-end rounded-medium",
          label: "text-end",
        }}
        isClearable
        isDisabled={!token}
        isInvalid={!isNumeric(amount)}
        labelPlacement="outside"
        errorMessage={!isNumeric(amount) && "Invalid number"}
        placeholder="Amount"
        size="lg"
        variant="bordered"
        label="Amount"
        value={amount}
        onValueChange={(e) => setAmount(e)}
      />
    </div>
  )
}
export default SelectToken
