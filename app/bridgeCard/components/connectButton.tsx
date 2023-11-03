"use client"
import { Button } from "@nextui-org/react"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useState } from "react"
import { useAccount } from "wagmi"

const ConnectButton = () => {
  const [inputAddress, setInputAddress] = useState<`0x${string}` | undefined>()
  const { openConnectModal } = useConnectModal()
  const { address } = useAccount({
    onDisconnect: () => {
      setInputAddress(undefined)
    },
    onConnect: (data) => {
      setInputAddress(data?.address)
    },
  })

  return (
    <div className="mt-4">
      {!address ? (
        <Button variant="solid" fullWidth onClick={openConnectModal}>
          Connect Wallet
        </Button>
      ) : (
        <>
          <Button variant="solid" fullWidth>
            Swap
          </Button>
        </>
      )}
    </div>
  )
}
export default ConnectButton
