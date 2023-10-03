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
      <div className="mt-32 md:mt-0 mb-32 text-center grid justify-center lg:max-w-5xl lg:w-full lg:mb-0 gap-2">
          <div className="col-24 flex flex-col md:flex-row items-center justify-center gap-5">
                 <Image
                     className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                     src="/next.svg"
                     alt="Next.js Logo"
                     width={180}
                     height={37}
                     priority
                 />
                  <Image
                      className="relative"
                      src="/spring.svg"
                      alt="Java Spring Boot Logo"
                      width={180}
                      height={37}
                      priority
                  />
                 <Image
                     className="relative"
                     src="/aws.svg"
                     alt="AWS Logo"
                     width={80}
                     height={37}
                     priority
                 />
          </div>
          <div className="col-24 flex flex-wrap justify-center items-center">
              <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col justify-center items-center">
                  <Image
                      className="relative"
                      src="/postgresql.svg"
                      alt="PostgreSQL Logo"
                      width={65}
                      height={37}
                      priority
                  />
                  <div>
                      Postgre<span className="text-[#336791] font-bold">SQL</span>
                  </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col justify-around items-center">
                  <Image
                      className="relative"
                      src="/aws-ec2.svg"
                      alt="AWS EC2 Logo"
                      width={50}
                      height={50}
                      priority
                  />
                  <div>
                      amazon <span className="text-[#F68536] font-bold">EC2</span>
                  </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col justify-around items-center">
                  <Image
                      className="relative"
                      src="/aws-rds.svg"
                      alt="AWS RDS Logo"
                      width={50}
                      height={50}
                      priority
                  />
                  <div>
                      amazon <span className="font-bold">RDS</span>
                  </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col justify-center items-center">
                  <Image
                      className="relative"
                      src="/docker.svg"
                      alt="Java Spring Boot Logo"
                      width={48}
                      height={50}
                      priority
                  />
                  <div className="text-[#0091E2]">docker</div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col justify-center items-center">
                  <Image
                      className="relative dark:invert"
                      src="/github.svg"
                      alt="Java Spring Boot Logo"
                      width={52}
                      height={37}
                      priority
                  />
                  <div>GitHub</div>
              </div>
          </div>
      </div>
    </main>
  )
}
