import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-8 h-8 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-colors duration-300 overflow-hidden"
      aria-label="Toggle theme"
    >
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          transform: theme === "dark" ? "rotate(0deg)" : "rotate(-180deg)",
          opacity: theme === "dark" ? 1 : 0,
        }}
      >
        <Sun size={16} className="text-[#F5F5F5]" />
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)",
          opacity: theme === "light" ? 1 : 0,
        }}
      >
        <Moon size={16} className="text-[#0A0A0A]" />
      </div>
    </button>
  );
}
