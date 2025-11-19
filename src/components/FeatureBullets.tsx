type FeatureBulletsProps = {
  className?: string
}

export default function FeatureBullets({ className }: FeatureBulletsProps) {
  return (
    <ul className={`space-y-3 ${className ?? ''}`}>
      <li className="flex items-start gap-3">
        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0F4377] to-[#2883B3] flex-none" />
        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#0F4377] to-[#2883B3] bg-clip-text text-transparent">
          Catch Fish & Win Points
        </span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0F4377] to-[#2883B3] flex-none" />
        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#0F4377] to-[#2883B3] bg-clip-text text-transparent">
          Rise to the Top
        </span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0F4377] to-[#2883B3] flex-none" />
        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#0F4377] to-[#2883B3] bg-clip-text text-transparent">
          Unlock Hidden Spots
        </span>
      </li>
    </ul>
  )
}




