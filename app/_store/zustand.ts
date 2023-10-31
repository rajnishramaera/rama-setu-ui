import { create } from "zustand"

type TokenStore = {
  token: string
  setToken: (id: string) => void
}
type AmountStore = {
  amount: string
  setAmount: (id: string) => void
}
type FromNetworkStore = {
  fromNetwork: string
  setFromNetwork: (id: string) => void
}
type ToNetworkStore = {
  toNetwork: string
  setToNetwork: (id: string) => void
}

export const useTokenStore = create<TokenStore>()((set) => ({
  token: "",
  setToken: (id) => set({ token: id }),
}))

export const useAmountStore = create<AmountStore>()((set) => ({
  amount: "",
  setAmount: (id) => set({ amount: id }),
}))

export const useFromNetworkStore = create<FromNetworkStore>()((set) => ({
  fromNetwork: "",
  setFromNetwork: (id) => set({ fromNetwork: id }),
}))

export const useToNetworkStore = create<ToNetworkStore>()((set) => ({
  toNetwork: "",
  setToNetwork: (id) => set({ toNetwork: id }),
}))
