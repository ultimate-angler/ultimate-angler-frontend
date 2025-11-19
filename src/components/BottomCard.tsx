type BottomCardProps = {
  className?: string
  children?: React.ReactNode
}

export default function BottomCard({ className, children }: BottomCardProps) {
  return (
    <div className="sm:fixed sm:inset-x-0 sm:bottom-0 h-1/2 p-4 sm:p-6 md:p-8 pointer-events-none">
      <div
        className={
          `h-full w-full rounded-2xl bg-[#F3F4F8] shadow-md pointer-events-auto ${className ?? ''}`
        }
      >
        {children}
      </div>
    </div>
  )
}


