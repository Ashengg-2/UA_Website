import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface AnimatedTab {
  label: string
  value: string
}

export interface AnimatedTabsProps {
  tabs: AnimatedTab[]
  activeTab: string
  onTabChange: (value: string) => void
  className?: string
}

export function AnimatedTabs({
  tabs,
  activeTab,
  onTabChange,
  className,
}: AnimatedTabsProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      aria-label="Main navigation"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onTabChange(tab.value)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
              isActive
                ? "text-primary-foreground"
                : "text-white hover:bg-gray-800 hover:text-white",
            )}
          >
            {isActive && (
              <motion.span
                layoutId={shouldReduceMotion ? undefined : "header-nav-indicator"}
                className="absolute inset-0 rounded-md bg-primary"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 500, damping: 35 }
                }
                aria-hidden="true"
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
