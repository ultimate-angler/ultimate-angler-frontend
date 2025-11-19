import mock1 from '../assets/mock1.png'
import mock2 from '../assets/mock2.png'

type MockiPhonesProps = {
  className?: string
}

export default function MockiPhones({ className }: MockiPhonesProps) {
  return (
    <div className="relative w-[280px] sm:w-[290px] md:w-[350px]">
        <img
          src={mock2}
          alt="Background iPhone mockup"
          className="block w-full h-auto select-none pointer-events-none z-0"
        />
      </div>
  )
}


