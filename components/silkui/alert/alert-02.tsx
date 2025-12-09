import { XCircle } from "lucide-react"

export default function AlertError() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950 border border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-red-100/20 to-transparent dark:from-red-900/30 opacity-40" />

        <div className="relative flex gap-3">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 shadow-lg">
              <XCircle className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-red-900 dark:text-red-100">Error</h3>
            <p className="text-xs text-red-700 dark:text-red-200 mt-1">
              Something went wrong. Please try again or contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
