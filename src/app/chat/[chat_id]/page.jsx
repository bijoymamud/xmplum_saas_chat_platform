"use client";

import { useState, useEffect, use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatHistoryPage({ params }) {
  const { chat_id } = use(params);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Simulate loading chat history
  useEffect(() => {
    // In a real app, fetch chat history based on chat_id
    setMessages([
      { role: "user", content: `Load history for chat: ${chat_id}` },
      { role: "assistant", content: "This is loaded from history. I am ready to continue our conversation!" }
    ]);
  }, [chat_id]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I am a simulated response continuing this conversation." }
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full w-full min-h-0">
      <ScrollArea className="flex-1 p-4 min-h-0">
        <div className="space-y-6 pb-4 max-w-4xl mx-auto w-full">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] rounded-[24px] px-5 py-3.5 text-[15px] font-sans shadow-sm ${
                  msg.role === "user" 
                    ? "bg-[#1F1F1F] dark:bg-white text-white dark:text-black" 
                    : "bg-[#F0F4F9] dark:bg-muted text-[#1F1F1F] dark:text-gray-200"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-transparent shrink-0 w-full max-w-4xl mx-auto">
        <form onSubmit={handleSend} className="relative flex items-end w-full group shadow-sm bg-[#F0F4F9] dark:bg-[#1E1F22] rounded-[32px] transition-all border border-transparent hover:border-black/10 dark:hover:border-white/10 overflow-hidden">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..." 
            className="min-h-[64px] pr-16 py-4 pl-6 w-full rounded-[32px] bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-[15px] resize-none shadow-none font-sans"
          />
          <div className="absolute right-3 bottom-3">
             <Button 
              type="submit" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-black hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white shadow-sm transition-transform active:scale-95 disabled:opacity-50 disabled:active:scale-100"
              disabled={!input.trim()}
             >
                <Send className="h-[18px] w-[18px] ml-[-2px]" />
             </Button>
          </div>
        </form>
        <p className="text-center text-[12px] text-[#444746] dark:text-gray-400 mt-3 font-sans mb-1">
          <span className="font-medium text-[#1F1F1F] dark:text-gray-200">Xmplum AI</span> can make mistakes. Consider verifying important information.
        </p>
      </div>
    </div>
  );
}