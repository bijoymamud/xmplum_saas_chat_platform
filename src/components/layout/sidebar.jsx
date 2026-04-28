export function AppSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block w-64">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <span className="font-semibold text-lg">My App</span>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary bg-muted transition-all hover:text-primary">
            Dashboard
          </a>
          <a href="/login" className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            Login
          </a>
        </nav>
      </div>
    </div>
  )
}
