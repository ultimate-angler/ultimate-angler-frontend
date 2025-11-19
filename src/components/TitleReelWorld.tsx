type TitleReelWorldProps = {
  className?: string
}

export default function TitleReelWorld({ className }: TitleReelWorldProps) {
  return (
    <h1
      className={
        `text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight 
        bg-gradient-to-r from-[#0F4377] to-[#2883B3] bg-clip-text text-transparent ${className ?? ''}`
      }
    >
      Reel World
    </h1>
  )
}


