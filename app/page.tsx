import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Bridge from "./bridge";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between p-4">
        <h2>Rama - Bridge</h2>
        <ThemeSwitcher />
      </div>

      <Bridge />
    </main>
  );
}
