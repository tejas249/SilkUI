"use client"

import { Wand2, ArrowRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_05_Glassmorphism() {
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
          id="ai-input-05"
          placeholder="What's on your mind?"
          className={cn(
            "max-w-xl bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl pl-6 pr-16",
            "placeholder:text-white/50 dark:placeholder:text-white/40",
            "border border-white/30 dark:border-white/10 ring-0",
            "text-white dark:text-white/90 text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:border-white/50 focus-visible:ring-offset-0",
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
            "absolute top-1/2 -translate-y-1/2 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-xl py-2 px-2 transition-all duration-200",
            inputValue ? "right-11" : "right-3",
          )}
        >
          <Wand2 className="w-4 h-4 text-white/80" />
        </div>

        <button
          onClick={handleReset}
          type="button"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 bg-white/30 dark:bg-white/20 backdrop-blur-md border border-white/40 dark:border-white/30 rounded-xl py-2 px-2 transition-all duration-700 hover:bg-white/40 dark:hover:bg-white/30",
            inputValue ? "block right-3 animate-slide-in cursor-pointer" : "hidden",
          )}
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  )
}
