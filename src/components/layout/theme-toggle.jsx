"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-10 h-10 rounded-full opacity-0">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = (e) => {
    const newTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
       setTheme(newTheme);
       return;
    }

    // Disable the smooth transition class during the wipe so colors "snap" instantly
    // under the mask, allowing the visual mask wipe to be the sole transition effect.
    document.documentElement.classList.remove('theme-smooth');

    // Start the transition
    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      // Calculate max radius needed to cover the screen from bottom-left
      const endRadius = Math.hypot(window.innerWidth, window.innerHeight);

      // Animate the new view expanding from bottom-left to top-right
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at 0% 100%)`,
             `circle(${endRadius}px at 0% 100%)`
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });

    transition.finished.finally(() => {
      // Restore smooth hover transition logic after the wipe is done
      document.documentElement.classList.add('theme-smooth');
    });
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative w-10 h-10 rounded-full overflow-hidden hover:cursor-pointer  border-border/50 hover:bg-muted/50 transition-colors"
      onClick={toggleTheme}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="absolute inset-0 flex items-center shadow-inner justify-center pointer-events-none">
        <Sun 
          className={`absolute h-5 w-5 text-primary transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isDark ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"
          }`} 
        />
        <Moon 
          className={`absolute h-5 w-5 text-white  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isDark ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`} 
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
