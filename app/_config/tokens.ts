import { Tokens } from "@/app/_types/tokens"
import { Address, zeroAddress } from "viem"

type BrigeAddress = {
  [chainId: string]: Address
}
export const bridgeAddress: BrigeAddress = {
  "1370": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  "56": "0xB9dbAb55fdCAceCfb7b67Ed675A0aE7BC388826f",
}

export const tokens: Tokens[] = [
  {
    id: "TTA",
    name: "TTA",
    address: {
      "1370": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "56": "0xe6AFcC58b60dA41C5B2789E0f3F7B53a6ea98F74",
    },
    icon: "/network/rama.svg",
    moreDetils: "TTA Chain",
  },
  {
    id: "RAMA",
    name: "RAMA",
    address: {
      "1370": zeroAddress,
      "56": "0x0",
    },
    icon: "/network/rama.svg",
    moreDetils: "Ramaestta Chain",
  },
  {
    id: "BNB",
    name: "BNB",
    address: {
      "1370": "0x0",
      "56": zeroAddress,
    },
    icon: "/network/bnb.svg",
    moreDetils: "BNB Smart Chain",
  },
  {
    id: "ETH",
    name: "ETH",
    address: {
      "1370": "0x0",
      "56": "0x0",
    },
    icon: "/network/eth.svg",
    moreDetils: "Ethereum Chain",
  },
  {
    id: "MATIC",
    name: "MATIC",
    address: {
      "1370": "0x0",
      "56": "0x0",
    },
    icon: "/network/polygon.svg",
    moreDetils: "Polygon Chain",
  },
]
