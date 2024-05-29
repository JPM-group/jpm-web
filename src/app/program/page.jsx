import React from 'react';

const page = () => {
  return (
    <>
      <heading className="mt-3 bg-center bg-no-repeat bg-[url('/bg-program.png')] bg-blend-multiply h-auto">
          <div className="ENG px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="font-extralight tracking-wider text-2xl leading-none text-customBlue sm:text-4xl md:text-6xl lg:text-7xl">
                Program development 
                <span className='font-light ml-5 text-2xl sm:text-5xl md:text-7xl lg:text-8xl'>works</span>
              </h1>
              <p className="mt-5 font-normal text-lg text-customBlue sm:text-xl md:text-2xl lg:text-3xl">interactive program & mini game for event</p>
          </div>
          <div className='ENG font-extralight gradient-tab text-lg'>Connecting Ideas, Creating Solutions</div>
      </heading>

      <project>
        <div>
        <video width="320" height="240" controls preload="none">
          <source src="/videos/v1.mp4" type="video/mp4" />
        </video>
        </div>
        <div></div>
        <div></div>

      </project>
    </>
  )
}

export default page