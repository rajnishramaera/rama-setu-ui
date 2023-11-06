import { Address } from "viem"

export type Tokens = {
  id?: string
  name?: string
  address: {
    [chainId: string]: Address
  }
  icon?: string
  moreDetils?: string
}
