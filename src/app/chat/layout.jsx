"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  Plus, Bot, Scale, GraduationCap, Menu, ChevronDown,
  Trash2, Search, SquarePen, Star, ChevronRight,
  MoreVertical, Share2, Pin, PencilLine, Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const HISTORY_MOCK = [
  { id: "1", title: "Optimize Form Typography for R..." },
  { id: "2", title: "Infinix EMI Options and Requiremen..." },
  { id: "3", title: "Tecno Spark vs. Infinix Hot Compari..." },
  { id: "4", title: "Convert TypeScript to JSX" },
  { id: "5", title: "I need a logo for my software compa..." },
  { id: "6", title: "React Tailwind About Us Page" },
  { id: "7", title: "Next.js Slugs: Dynamic Routing Explai..." },
];

const BOT_OPTIONS = [
  { id: "normal",  name: "Gemini",            icon: Bot,           description: "General purpose AI for everyday tasks" },
  { id: "student", name: "Student Assistant", icon: GraduationCap, description: "Specialized in learning & tutoring" },
  { id: "law",     name: "Law Assistant",     icon: Scale,         description: "Expert in legal research & drafting" },
];

/* ─── Sidebar inner content (no toggle button here) ─── */
function SidebarContent({ chats, onDelete, isOpen }) {
  return (
    <div
      className="flex h-full flex-col bg-[#F0F4F9] dark:bg-[#1E1F22] transition-opacity duration-150 ease-in-out"
      style={{ width: "300px", opacity: isOpen ? 1 : 0 }}
    >

      {/* Top padding so content starts below the header height */}
      <div className="h-[64px] shrink-0" />

      <ScrollArea className="flex-1 px-2">
        {/* Main actions */}
        <div className="space-y-1 mb-6 px-1">
          <Link href="/chat">
            <Button variant="ghost" className="w-full justify-start gap-4 rounded-full hover:bg-black/5 dark:hover:bg-white/10 h-[44px] px-4 font-medium text-[14px] text-[#1F1F1F] dark:text-foreground">
              <SquarePen className="h-[20px] w-[20px] text-[#444746] dark:text-muted-foreground shrink-0" strokeWidth={1.75} />
              New chat
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start gap-4 rounded-full hover:bg-black/5 dark:hover:bg-white/10 h-[44px] px-4 font-medium text-[14px] text-[#1F1F1F] dark:text-foreground">
            <Star className="h-[20px] w-[20px] text-[#444746] dark:text-muted-foreground shrink-0" strokeWidth={1.75} />
            My stuff
          </Button>
        </div>

        {/* Notebooks */}
        <div className="mb-6 space-y-1 px-1">
          <Button variant="ghost" className="w-full justify-between items-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 h-[44px] px-4 font-medium text-[14px] text-[#1F1F1F] dark:text-foreground group">
            <span>Notebooks</span>
            <ChevronRight className="h-[18px] w-[18px] text-[#444746] dark:text-muted-foreground group-hover:text-[#1F1F1F] transition-colors" strokeWidth={1.75} />
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-4 rounded-full hover:bg-black/5 dark:hover:bg-white/10 h-[44px] px-4 font-medium text-[14px] text-[#444746] dark:text-muted-foreground">
            <Plus className="h-[20px] w-[20px]" strokeWidth={1.75} />
            New notebook
          </Button>
        </div>

        {/* Gems */}
        <div className="mb-6 px-1">
          <Button variant="ghost" className="w-full justify-between items-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 h-[44px] px-4 font-medium text-[14px] text-[#1F1F1F] dark:text-foreground group">
            <span>Gems</span>
            <ChevronRight className="h-[18px] w-[18px] text-[#444746] dark:text-muted-foreground group-hover:text-[#1F1F1F] transition-colors" strokeWidth={1.75} />
          </Button>
        </div>

        {/* Chat history */}
        <div className="mb-2 px-1">
          <div className="px-3 py-1 text-[13px] font-medium text-[#1F1F1F] dark:text-gray-300 mb-1">Chats</div>
          <div className="space-y-[2px]">
            {chats.map((chat) => (
              <div key={chat.id} className="group relative flex items-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer">
                <Link href={`/chat/${chat.id}`} className="flex flex-1 items-center h-[40px] pl-4 pr-10 overflow-hidden">
                  <span className="truncate text-[14px] text-[#444746] dark:text-gray-400 group-hover:text-[#1F1F1F] dark:group-hover:text-gray-200 transition-colors font-normal tracking-wide">
                    {chat.title}
                  </span>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 h-8 w-8 rounded-full hover:bg-[#E1E5EA] dark:hover:bg-white/20 transition-all data-[state=open]:opacity-100 data-[state=open]:bg-[#E1E5EA] dark:data-[state=open]:bg-white/20 text-[#444746] focus:outline-none">
                      <MoreVertical className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[220px] rounded-[12px] shadow-lg shadow-black/10 border-border/10 p-2 bg-[#F0F4F9] dark:bg-[#282A2D] text-[14px] z-50">
                    <DropdownMenuItem className="gap-3 rounded-md cursor-pointer px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/10 text-[#1F1F1F] dark:text-gray-200">
                      <Share2 className="h-[18px] w-[18px] text-[#444746] dark:text-gray-400 shrink-0" strokeWidth={1.75} />Share conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-3 rounded-md cursor-pointer px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/10 text-[#1F1F1F] dark:text-gray-200">
                      <Pin className="h-[18px] w-[18px] text-[#444746] dark:text-gray-400 shrink-0" strokeWidth={1.75} />Pin
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-3 rounded-md cursor-pointer px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/10 text-[#1F1F1F] dark:text-gray-200">
                      <PencilLine className="h-[18px] w-[18px] text-[#444746] dark:text-gray-400 shrink-0" strokeWidth={1.75} />Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => onDelete(e, chat.id)}
                      className="gap-3 rounded-md cursor-pointer px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/10 text-[#1F1F1F] dark:text-gray-200 focus:bg-destructive/10 focus:text-destructive">
                      <Trash2 className="h-[18px] w-[18px] text-[#444746] dark:text-gray-400 shrink-0" strokeWidth={1.75} />Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Bottom */}
      <div className="p-3 mb-2 px-4 space-y-3">
        <Button variant="ghost" className="w-full justify-start gap-4 rounded-full hover:bg-black/5 dark:hover:bg-white/10 h-[44px] px-4 font-medium text-[14px] relative text-[#444746] dark:text-gray-400 hover:text-[#1F1F1F] dark:hover:text-gray-200">
          <Settings className="h-[20px] w-[20px]" strokeWidth={1.75} />
          Settings and help
          <div className="absolute right-4 h-[6px] w-[6px] rounded-full bg-[#0B57D0]" />
        </Button>
        <div className="flex items-center justify-between px-3 pt-2">
          <ThemeToggle />
          <Link href="/">
            <Image src="https://i.ibb.co.com/ccPqtfC9/xmplum-official.png" alt="Xmplum AI Logo" width={32} height={28}
              className="opacity-70 hover:opacity-100 transition-opacity" unoptimized />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Root layout ─── */
export default function ChatLayout({ children }) {
  const [selectedBot, setSelectedBot] = useState(BOT_OPTIONS[0]);
  const [chats, setChats]             = useState(HISTORY_MOCK);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const deleteChat = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setChats(chats.filter(c => c.id !== id));
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans relative selection:bg-primary/20">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-30 z-0" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,116,144,0.2),transparent_70%)] blur-3xl z-0" />
      <div className="pointer-events-none absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)] blur-3xl z-0" />

      {/* ── Desktop sidebar: slides in/out by width ── */}
      <aside
        className="hidden md:flex flex-col z-20 border-0 m-0 p-0 overflow-hidden min-w-0 shadow-[2px_0_8px_rgba(0,0,0,0.02)]"
        style={{
          width: sidebarOpen ? "300px" : "0px",
          transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "width",
        }}
      >
        <SidebarContent chats={chats} onDelete={deleteChat} isOpen={sidebarOpen} />
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col min-w-0 relative z-10 bg-transparent">

        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-background/95 to-transparent pointer-events-none z-10" />

        {/* Header */}
        <header className="flex h-[64px] items-center justify-between z-20 sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_1px_2px_rgba(0,0,0,0.05)] border-b border-border/40 px-3 md:px-4">

          <div className="flex items-center gap-1 md:gap-2">

            {/* ── Hamburger — desktop toggle ── */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(v => !v)}
              className="hidden md:flex shrink-0 rounded-full h-11 w-11 hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground"
              aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              <Menu className="h-5 w-5" strokeWidth={2} />
            </Button>

            {/* ── Hamburger — mobile sheet ── */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden shrink-0 rounded-full h-11 w-11 hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground">
                  <Menu className="h-5 w-5" strokeWidth={2} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 border-r-0 bg-transparent">
                <SidebarContent chats={chats} onDelete={deleteChat} />
              </SheetContent>
            </Sheet>

            {/* Assistant selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="group flex items-center gap-1.5 rounded-xl px-3 h-11 cursor-pointer dark:hover:bg-white/10 transition-colors">
                  <span className="text-[17px] text-[#1F1F1F] dark:text-gray-100 font-medium tracking-tight group-hover:text-primary transition-colors">
                    {selectedBot.name}
                  </span>
                  <ChevronDown className="h-[18px] w-[18px] text-[#444746] dark:text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity mt-0.5" strokeWidth={2} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[320px] p-2 rounded-[18px] shadow-lg shadow-black/10 border-border/10 bg-[#F0F4F9] dark:bg-[#282A2D]">
                <div className="px-3 py-2 mb-1">
                  <p className="text-[12px] font-semibold text-[#444746] dark:text-gray-400 uppercase tracking-wider">Select Assistant</p>
                </div>
                <div className="space-y-1">
                  {BOT_OPTIONS.map((bot) => {
                    const Icon = bot.icon;
                    const isSelected = selectedBot.id === bot.id;
                    return (
                      <DropdownMenuItem key={bot.id} onClick={() => setSelectedBot(bot)}
                        className={`gap-3 cursor-pointer rounded-xl p-3 transition-colors ${isSelected ? "bg-black/10 dark:bg-white/10" : "hover:bg-black/5 dark:hover:bg-white/5"}`}>
                        <div className={`h-10 w-10 flex items-center justify-center rounded-full shrink-0 ${isSelected ? "bg-white dark:bg-black text-[#0B57D0] dark:text-blue-400 shadow-sm" : "bg-transparent text-[#444746] dark:text-gray-400"}`}>
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col flex-1">
                          <span className={`text-[15px] font-medium ${isSelected ? "text-[#0B57D0] dark:text-blue-400" : "text-[#1F1F1F] dark:text-gray-200"}`}>{bot.name}</span>
                          <span className="text-[12px] text-[#444746] dark:text-gray-400 leading-snug">{bot.description}</span>
                        </div>
                        {isSelected && <div className="h-2 w-2 rounded-full bg-[#0B57D0] dark:bg-blue-400 ml-auto" />}
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground mr-1 md:mr-3">
              <Search className="h-[20px] w-[20px]" strokeWidth={1.5} />
            </Button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-primary/50 flex items-center justify-center shrink-0 text-primary-foreground shadow-md cursor-pointer hover:shadow-lg transition-transform hover:scale-105">
              <span className="text-xs font-bold">U</span>
            </div>
          </div>
        </header>

        {/* Chat content */}
        <div className="flex-1 flex flex-col min-h-0 relative">
          <div className="mx-auto w-full max-w-5xl flex-1 flex flex-col min-h-0">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
