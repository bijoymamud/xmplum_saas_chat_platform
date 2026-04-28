import { AppSidebar } from "@/components/layout/sidebar"
import { ThemeToggle } from "@/components/layout/theme-toggle"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6 lg:h-[60px]">
          <div className="flex-1" />
          <ThemeToggle />
        </header>
        <div className="flex-1 space-y-4 p-8 pt-6">
          {children}
        </div>
      </main>
    </div>
  )
}
