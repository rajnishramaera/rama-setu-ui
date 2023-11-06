import { create } from "zustand"
import { Tokens } from "../_types/tokens"

type TokenStore = {
  token: Tokens | undefined
  setToken: (id: any) => void
}
type AmountStore = {
  amount: string
  setAmount: (id: string) => void
}
type FromNetworkStore = {
  fromNetwork: any
  setFromNetwork: (id: any) => void
}
type ToNetworkStore = {
  toNetwork: any
  setToNetwork: (id: any) => void
}

export const useTokenStore = create<TokenStore>()((set) => ({
  token: undefined,
  setToken: (id) => set({ token: id }),
}))

export const useAmountStore = create<AmountStore>()((set) => ({
  amount: "",
  setAmount: (id) => set({ amount: id }),
}))

export const useFromNetworkStore = create<FromNetworkStore>()((set) => ({
  fromNetwork: {},
  setFromNetwork: (id) => set({ fromNetwork: id }),
}))

export const useToNetworkStore = create<ToNetworkStore>()((set) => ({
  toNetwork: {},
  setToNetwork: (id) => set({ toNetwork: id }),
}))
