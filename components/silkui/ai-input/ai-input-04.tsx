"use client"

import { Radio, Zap } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_04_Neon() {
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
          id="ai-input-04"
          placeholder="Enter command..."
          className={cn(
            "max-w-xl bg-slate-950 rounded-none pl-6 pr-16",
            "placeholder:text-cyan-500/50",
            "border-2 border-cyan-500/50 dark:border-magenta-500/50 ring-0",
            "text-cyan-400 text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-0 focus-visible:border-cyan-400 focus-visible:shadow-[0_0_15px_rgba(34,211,238,0.5)]",
            "transition-all duration-200 ease-out",
            "leading-[1.2] py-4 font-mono text-sm",
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
            "absolute top-1/2 -translate-y-1/2 border border-cyan-500/50 bg-slate-950 rounded-sm py-1 px-1 transition-all duration-200 shadow-[inset_0_0_8px_rgba(34,211,238,0.3)]",
            inputValue ? "right-10" : "right-2",
          )}
        >
          <Radio className="w-4 h-4 text-cyan-400" />
        </div>

        <button
          onClick={handleReset}
          type="button"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 border border-magenta-500 bg-magenta-500/10 rounded-sm py-1 px-1 transition-all duration-700 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]",
            inputValue ? "block right-2 animate-slide-in cursor-pointer" : "hidden",
          )}
        >
          <Zap className="w-4 h-4 text-magenta-400" />
        </button>
      </div>
    </div>
  )
}
