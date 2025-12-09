"use client"

import { Zap, Send } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_02_Gradient() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  })
  const [inputValue, setInputValue] = useState("")

  const handleReset = () => {
    setInputValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto">
        <Textarea
          id="ai-input-02"
          placeholder="Ask me anything..."
          className={cn(
            "max-w-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl pl-6 pr-16",
            "placeholder:text-blue-600/50 dark:placeholder:text-purple-300/50",
            "border-2 border-blue-200 dark:border-purple-700 ring-0",
            "text-blue-900 dark:text-purple-100 text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-2 focus-visible:ring-blue-400 dark:focus-visible:ring-purple-400 focus-visible:border-transparent focus-visible:ring-offset-0",
            "transition-all duration-200 ease-out",
            "leading-[1.2] py-4",
            "min-h-[52px]",
            "max-h-[200px]",
          )}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            adjustHeight()
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleReset()
            }
          }}
        />

        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 py-1.5 px-1.5 transition-all duration-200",
            inputValue ? "right-12" : "right-3",
          )}
        >
          <Zap className="w-5 h-5 text-blue-600 dark:text-blue-300" />
        </div>

        <button
          onClick={handleReset}
          type="button"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 py-1.5 px-1.5 transition-all duration-700 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50",
            inputValue ? "block right-3 animate-slide-in cursor-pointer opacity-100" : "hidden opacity-0",
          )}
        >
          <Send className="w-5 h-5 text-white transition-opacity duration-700" />
        </button>
      </div>
    </div>
  )
}
