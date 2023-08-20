import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div className="flex flex-col justify-center items-center">
          <h1 className='text-4xl font-bold mb-5'>Çok Yakında!</h1>
          <h2>scrumplanner.com, yakında sizlerle. Bizi takipte kalın.</h2>
      </div>

      <div className="mb-32 text-center flex justify-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
          />
      </div>
    </main>
  )
}
