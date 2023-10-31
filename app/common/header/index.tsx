import { ThemeSwitcher } from "./components/ThemeSwitcher"

const header = () => {
  return (
    <div className="flex justify-between py-4 items-center h-16">
      <h2 className="font-black">RamaSETU</h2>
      <ThemeSwitcher />
    </div>
  )
}
export default header
