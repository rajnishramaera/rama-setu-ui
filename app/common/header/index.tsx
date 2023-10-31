import { ThemeSwitcher } from "./components/ThemeSwitcher"

const header = () => {
  return (
    <div className="flex justify-between py-4 items-center">
      <h2>RamaBridge</h2>
      <ThemeSwitcher />
    </div>
  )
}
export default header
