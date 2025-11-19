type TitleProProps = {
  className?: string
}

export default function TitlePro({ className }: TitleProProps) {
  return (
    <h2
      className={
        `text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight 
        bg-gradient-to-r from-[#0F4377] to-[#2883B3] bg-clip-text text-transparent ${className ?? ''}`
      }
    >
      Pro
    </h2>
  )
}


