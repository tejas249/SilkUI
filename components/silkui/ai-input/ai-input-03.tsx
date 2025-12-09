"use client"

import { Volume2, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_03_Minimalist() {
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
          id="ai-input-03"
          placeholder="Type your thought..."
          className={cn(
            "max-w-xl bg-transparent rounded-xl pl-6 pr-16",
            "placeholder:text-gray-400 dark:placeholder:text-gray-600",
            "border-b-2 border-gray-300 dark:border-gray-700 ring-0",
            "text-gray-900 dark:text-gray-100 text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-gray-900 dark:focus-visible:border-gray-100",
            "transition-colors duration-200 ease-out",
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
            "absolute top-1/2 -translate-y-1/2 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-2 transition-all duration-200",
            inputValue ? "right-11" : "right-3",
          )}
        >
          <Volume2 className="w-4 h-4 text-gray-500 dark:text-gray-500" />
        </div>

        <button
          onClick={handleReset}
          type="button"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-2 transition-all duration-700 hover:bg-gray-100 dark:hover:bg-gray-900",
            inputValue ? "block right-3 animate-slide-in cursor-pointer" : "hidden",
          )}
        >
          <ArrowUpRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  )
}
