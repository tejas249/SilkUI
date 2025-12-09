import { Info } from "lucide-react"

export default function AlertInfo() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 shadow-md overflow-hidden">
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-linear-to-bl from-blue-200 to-transparent dark:from-blue-800 rounded-full opacity-40" />
        <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-linear-to-tr from-cyan-200 to-transparent dark:from-cyan-800 rounded-full opacity-30" />

        <div className="relative flex gap-3 items-start">
          <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100">Pro tip</h3>
            <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
              You can customize your dashboard settings in the preferences panel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
