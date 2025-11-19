type DownloadButtonProps = {
  variant?: 'fixed' | 'inline'
  className?: string
}

export default function DownloadButton({ variant = 'fixed', className }: DownloadButtonProps) {
  if (variant === 'inline') {
    return (
      <div className={`w-full flex flex-col items-stretch gap-2 ${className ?? ''}`}>
        <button
          aria-label="Download App"
          className="w-full px-4 py-3 text-white bg-gradient-to-r from-[#0F4377] to-[#2883B3] rounded-xl pointer-events-auto"
        >
          Download App
        </button>
        <div className="flex justify-center gap-3">
          <a href="#" aria-label="Instagram" className="p-2 rounded-lg pointer-events-auto">
            <InstagramIcon idSuffix="inline" />
          </a>
          <a href="#" aria-label="Facebook" className="p-2 rounded-lg pointer-events-auto">
            <FacebookIcon idSuffix="inline" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`hidden sm:flex fixed top-4 right-4 z-50 items-center gap-2 pointer-events-none ${className ?? ''}`}
    >
      <a href="#" aria-label="Instagram" className="p-2 rounded-lg pointer-events-auto">
        <InstagramIcon idSuffix="fixed" size={26} />
      </a>
      <a href="#" aria-label="Facebook" className="p-2 rounded-lg pointer-events-auto">
        <FacebookIcon idSuffix="fixed" />
      </a>
      <button
        aria-label="Download App"
        className="px-4 py-2 text-white bg-gradient-to-r from-[#0F4377] to-[#2883B3] rounded-xl pointer-events-auto"
      >
        Download App
      </button>
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

function FacebookIcon({ size = 24, className, idSuffix = 'default' }: IconProps) {
  const gradId = `fbGradient-${idSuffix}`
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
      <path
        d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
        fill={`url(#${gradId})`}
      />
    </svg>
  )
}


