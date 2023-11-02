import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ThemeSwitcher } from "./components/ThemeSwitcher"

const header = () => {
  return (
    <div className="fixed flex w-full p-4 justify-between left-0 items-center h-16">
      <h2 className="font-black">RamaSETU</h2>
      <div className="flex gap-2 lg:gap-4">
        <ConnectButton />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
export default header
