"use client"

import { Sparkles, ChevronRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_06_Bold() {
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
          id="ai-input-06"
          placeholder="Create something amazing..."
          className={cn(
            "max-w-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-3xl pl-6 pr-16",
            "placeholder:text-emerald-700/60 dark:placeholder:text-emerald-200/60",
            "border-4 border-emerald-500 dark:border-emerald-600 ring-0",
            "text-emerald-900 dark:text-emerald-50 font-semibold text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-4 focus-visible:ring-orange-400 dark:focus-visible:ring-orange-500 focus-visible:border-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950",
            "transition-all duration-300 ease-out",
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
            "absolute top-1/2 -translate-y-1/2 rounded-2xl bg-emerald-500 py-2 px-2 transition-all duration-200 shadow-lg shadow-emerald-500/40",
            inputValue ? "right-12" : "right-3",
          )}
        >
          <Sparkles className="w-5 h-5 text-white" />
        </div>

        <button
          onClick={handleReset}
          type="button"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-2xl bg-orange-500 py-2 px-2 transition-all duration-700 hover:shadow-xl hover:shadow-orange-500/50 active:scale-95",
            inputValue ? "block right-3 animate-slide-in cursor-pointer" : "hidden",
          )}
        >
          <ChevronRight className="w-5 h-5 text-white font-bold" />
        </button>
      </div>
    </div>
  )
}
