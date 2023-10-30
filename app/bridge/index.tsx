"use client";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { tokens } from "./data";

const Bridge = () => {
  return (
    <div className="mx-auto lg:w-1/4 ">
      <Select
        items={tokens}
        label="From Token"
        variant="bordered"
        isMultiline={false}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        selectionMode="single"
        placeholder="Select a Token"
        labelPlacement="outside"
        classNames={{
          base: "max-w-xs",
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
          );
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
    </div>
  );
};
export default Bridge;
