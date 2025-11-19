import TitleReelWorld from './TitleReelWorld'
import TitlePro from './TitlePro'

type TitleProps = {
  className?: string
}

export default function Title({ className }: TitleProps) {
  return (
    <div className={`flex flex-col items-start ${className ?? ''}`}>
      <TitleReelWorld />
      <TitlePro />
    </div>
  )
}


