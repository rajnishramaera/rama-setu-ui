"use client"
import { bridgeAddress } from "@/app/_config/tokens"
import {
  useAmountStore,
  useFromNetworkStore,
  useToNetworkStore,
  useTokenStore,
} from "@/app/_store/zustand"
import { Button } from "@nextui-org/react"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useState } from "react"
import {
  Address,
  useAccount,
  useNetwork,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi"
import ramaBridgeAbi from "../../_config/abi/ramaBridgeAbi.json"
import tokenAbi from "../../_config/abi/tokenAbi.json"
import { parseEther, zeroAddress } from "viem"

const ConnectButton = () => {
  const { token } = useTokenStore()
  const { amount } = useAmountStore()
  const { toNetwork } = useToNetworkStore()

  const [inputAddress, setInputAddress] = useState<Address>()
  const { openConnectModal } = useConnectModal()
  const { address } = useAccount({
    onDisconnect: () => {
      setInputAddress(undefined)
    },
    onConnect: (data) => {
      setInputAddress(data?.address)
    },
  })

  const network = useNetwork()
  const ramaBridgeAddress = network.chain
    ? bridgeAddress[network.chain.id]
    : zeroAddress

  const tokenAddress = network.chain
    ? token?.address[network.chain.id]
    : zeroAddress

  console.log(ramaBridgeAddress, tokenAddress)

  const {
    data: allowanceReadContract,
    isLoading: isLoadingForallowance,
    isSuccess: isSuccessForallowance,
  } = useContractRead({
    abi: tokenAbi,
    address: tokenAddress,
    functionName: "allowance",
    args: [address as any, ramaBridgeAddress],
    enabled: !address ? false : true,
    // select: (data) => {
    //   console.log({ data })

    //   return parseEther(data.toString())
    // },
    // onSuccess: (data) => {
    //   console.log({ data })
    // },
  })

  const { config: configForApprove } = usePrepareContractWrite({
    abi: tokenAbi,
    address: tokenAddress,
    functionName: "approve",
    args: [ramaBridgeAddress as Address, parseEther("10")],
    enabled: !ramaBridgeAddress ? false : true,
  })

  const { data: dataForApprove, writeAsync: writeAsyncForApprove } =
    useContractWrite(configForApprove)

  const { isLoading: isLoadingForApprove, isSuccess: isSuccessForApprove } =
    useWaitForTransaction({
      hash: dataForApprove?.hash,
    })

  const { config: configForSwap } = usePrepareContractWrite({
    abi: ramaBridgeAbi,
    address: ramaBridgeAddress,
    functionName: "bridgeTokenTo",
    args: [tokenAddress, parseEther("5"), address, toNetwork.id],
    enabled: amount !== undefined,
  })
  console.log(amount)

  const { data: dataForSwap, writeAsync: writeAsyncForSwap } =
    useContractWrite(configForSwap)

  const { isLoading: isLoadingForSwap, isSuccess: isSuccessForSwap } =
    useWaitForTransaction({
      hash: dataForSwap?.hash,
    })

  console.log(allowanceReadContract, "lol")

  return (
    <div className="mt-4">
      {!address ? (
        <Button
          variant="solid"
          fullWidth
          onClick={openConnectModal}
          className="bg-gradient-to-r from-amber-500 to-pink-500  dark:from-slate-900 dark:to-slate-700">
          Connect Wallet
        </Button>
      ) : (
        <>
          {allowanceReadContract === undefined ? (
            <Button
              variant="solid"
              fullWidth
              className="bg-gradient-to-r from-amber-500 to-pink-500  dark:from-slate-700 dark:to-slate-900"
              onClick={async () => {
                try {
                  await writeAsyncForSwap?.()
                } catch (error) {}
              }}>
              Swap
            </Button>
          ) : (
            <Button
              variant="solid"
              fullWidth
              className="bg-gradient-to-r from-amber-500 to-pink-500  dark:from-slate-700 dark:to-slate-900"
              onClick={async () => {
                try {
                  await writeAsyncForApprove?.()
                } catch (error) {}
              }}>
              Approve
            </Button>
          )}
        </>
      )}
    </div>
  )
}
export default ConnectButton
