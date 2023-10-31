"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="scale-75 cursor-pointer"
      /*  style={{
        "--theme": theme,
      }} */
    >
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={theme === "light" ? "/light.svg" : "/dark.svg"}
        className="bg-white rounded-full border border-white"
        alt=""
        height={40}
        width={40}
      />
    </div>
  )
}
