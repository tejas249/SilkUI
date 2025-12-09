import { Zap, Sparkles } from "lucide-react"

export default function AlertPremium() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 rounded-xl p-4 shadow-xl overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -right-12 -top-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

        <div className="relative flex gap-3">
          <div className="shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/20 backdrop-blur-sm shadow-lg border border-white/30">
              <Zap className="h-5 w-5 text-white fill-white" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold text-white">Premium Feature</h3>
              <Sparkles className="h-4 w-4 text-amber-300" />
            </div>
            <p className="text-xs text-white/90 mt-1">Upgrade to unlock advanced analytics and unlimited exports.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
