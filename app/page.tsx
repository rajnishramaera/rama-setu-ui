import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import Bridge from "./bridge"

export default function Home() {
  return (
    <main>
      <h2>Rama - Bridge</h2>
      <ThemeSwitcher />
      <Bridge />
    </main>
  )
}
