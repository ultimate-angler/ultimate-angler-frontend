import Title from './components/Title'
import BottomCard from './components/BottomCard'
import DownloadButton from './components/DownloadButton'
import MockiPhones from './components/MockiPhones'
import FeatureBullets from './components/FeatureBullets'

function App() {

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#F3F4F8] to-[#FDFDFD]">
      <DownloadButton />
      {/* Mobile in-flow title */}
      <div className="block sm:hidden px-6 pt-8">
        <Title />
      </div>
      {/* Mobile inline download button between title and mock */}
      <div className="block sm:hidden px-6 pt-6">
        <DownloadButton variant="inline" />
      </div>
      <BottomCard>
        <div className="h-full w-full flex items-center justify-between px-6 sm:px-10 md:px-14">
          {/* Desktop bullets on the left */}
          <div className="hidden sm:block">
            <FeatureBullets />
          </div>
          {/* Desktop mock iPhones on the right */}
          <div className="-translate-y-[10.5rem] sm:-translate-y-[10.5rem] md:-translate-y-[10.5rem] sm:-translate-x-8 md:-translate-x-12 hidden sm:block">
            <MockiPhones />
          </div>
        </div>
      </BottomCard>
      <div
        className="hidden sm:block fixed inset-x-0 pl-6 pr-4 sm:pl-8 sm:pr-6 md:pl-10 md:pr-8 pointer-events-none"
        style={{ bottom: 'calc(50% + 2rem)' }}
      >
        <div className="pointer-events-auto text-left">
          <Title />
        </div>
      </div>
      {/* Mobile-only image below the fixed card, centered */}
      <div className="block sm:hidden mt-2 px-6 pb-6 min-h-[60vh] flex items-center justify-center">
        <MockiPhones />
      </div>
      {/* Mobile-only bullets card under the mock with spacing */}
      <div className="block sm:hidden px-6 pb-16">
        <div className="rounded-2xl bg-[#F3F4F8] shadow-md p-4">
          <FeatureBullets />
        </div>
      </div>
    </div>
  )
}

export default App


