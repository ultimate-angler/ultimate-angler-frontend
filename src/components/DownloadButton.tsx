type DownloadButtonProps = {
  variant?: 'fixed' | 'inline'
  className?: string
}

export default function DownloadButton({ variant = 'fixed', className }: DownloadButtonProps) {
  const appStoreUrl = 'https://apps.apple.com/us/app/reel-world-pro/id6749204828'
  const instagramUrl = 'https://www.instagram.com/reelworldpro?igsh=MXRhejNmZWY1cDdqNg%3D%3D'

  if (variant === 'inline') {
    return (
      <div className={`w-full flex flex-col items-stretch gap-2 ${className ?? ''}`}>
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download App"
          className="w-full px-4 py-3 text-white bg-gradient-to-r from-[#0F4377] to-[#2883B3] rounded-xl pointer-events-auto text-center"
        >
          Download App
        </a>
        <div className="flex justify-center gap-3">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg pointer-events-auto">
            <InstagramIcon idSuffix="inline" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`hidden sm:flex fixed top-4 right-4 z-50 items-center gap-2 pointer-events-none ${className ?? ''}`}
    >
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg pointer-events-auto">
        <InstagramIcon idSuffix="fixed" size={26} />
      </a>
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download App"
        className="px-4 py-2 text-white bg-gradient-to-r from-[#0F4377] to-[#2883B3] rounded-xl pointer-events-auto"
      >
        Download App
      </a>
    </div>
  )
}

type IconProps = { size?: number; className?: string; idSuffix?: string }

function InstagramIcon({ size = 24, className, idSuffix = 'default' }: IconProps) {
  const gradId = `igGradient-${idSuffix}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F4377" />
          <stop offset="100%" stopColor="#2883B3" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke={`url(#${gradId})`} strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke={`url(#${gradId})`} strokeWidth="2" />
      <circle cx="17" cy="7" r="1.5" fill={`url(#${gradId})`} />
    </svg>
  )
}



