import { ThemeSwitcher } from "./components/ThemeSwitcher"

const header = () => {
  return (
    <div className="fixed flex w-full p-4 justify-between left-0 items-center h-16">
      <h2 className="font-black">RamaSETU</h2>
      <ThemeSwitcher />
    </div>
  )
}
export default header
