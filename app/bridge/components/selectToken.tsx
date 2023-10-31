"use client"
import { Select, SelectItem, Avatar, Input } from "@nextui-org/react"
import { useAmountStore, useTokenStore } from "@/app/_store/zustand"
import { tokens } from "@/app/_config/tokens"
import { isNumeric } from "@/app/_utils/isNumeric"

const SelectToken = () => {
  const { setToken } = useTokenStore()
  const { amount, setAmount } = useAmountStore()

  return (
    <div className="flex gap-2 px-1">
      <Select
        items={tokens}
        label="Token"
        variant="bordered"
        isMultiline={false}
        onChange={(e) => {
          setToken(e.target.value)
        }}
        selectionMode="single"
        placeholder="Select a Token"
        labelPlacement="outside"
        classNames={{
          base: "max-w-1/2 ",
          trigger: "min-h-unit-12 py-2",
        }}
        renderValue={(items) => {
          return (
            <div className="flex flex-wrap gap-2">
              {items.map((item: any) => (
                <div
                  key={item.key}
                  className=" h-fit p-1 flex gap-4 items-center "
                >
                  <Avatar alt={item.data.name} size="sm" src={item.data.icon} />
                  {item.data.name}
                </div>
              ))}
            </div>
          )
        }}
      >
        {(user) => (
          <SelectItem key={user.id} textValue={user.name}>
            <div className="flex gap-2 items-center">
              <Avatar
                alt={user.name}
                className="flex-shrink-0"
                size="sm"
                src={user.icon}
              />
              <div className="flex flex-col">
                <span className="text-small">{user.name}</span>
                <span className="text-tiny text-default-400">
                  {user.moreDetils}
                </span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
      <Input
        className="max-w-1/2 text-end rounded-medium"
        isClearable
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
