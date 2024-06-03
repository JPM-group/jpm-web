import React from 'react';
import imagePath from '../program/bg-program.png'

const page = () => {
  return (
    <>
      <heading className="mt-3 bg-center w-full block" style={{backgroundImage: `url(${imagePath.src})`, width:'100%!',height:'100%'}}>
          <div className="ENG px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="font-extralight tracking-wider text-2xl leading-none text-customBlue sm:text-4xl md:text-6xl lg:text-7xl">
                Program development
                <span className='font-light ml-5 text-2xl sm:text-5xl md:text-7xl lg:text-8xl'>works</span>
              </h1>
              <p className="mt-5 font-normal text-lg text-customBlue sm:text-xl md:text-2xl lg:text-3xl">interactive program & mini game for event</p>
          </div>
          <div className='ENG font-extralight gradient-tab text-xs sm:text-sm md:text-base lg:text-lg '>Connecting Ideas, Creating Solutions</div>
      </heading>

      <project className="px-5 grid grid-cols-1 gap-x-24 gap-y-14 my-14 md:grid-cols-2">
        <div className='flex justify-center lg:justify-end'>
          <div>
            <video width="465" height="auto" controls preload="none" poster='/preload/KIA.png'>
              <source src="/videos/KIA.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>KIA immersive wall</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-start'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/GuitarHero.png'>
              <source src="/videos/GuitarHero.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>Guitar hero</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-end'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/GS1.png'>
              <source src="/videos/GS1.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>GS1 Touch wall</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-start'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/ColorRemem.png'>
              <source src="/videos/ColorRemember.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>Pixel 1 Boost Up</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-end'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/XSPRING.png'>
              <source src="/videos/XSPRING.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>XSPRING Digital</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-start'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/PTTGC.png'>
              <source src="/videos/PTTGC.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>PTTGC photo booth</h2>
          </div>
        </div>
        
        <div className='flex justify-center lg:justify-end'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/Amazon.png'>
              <source src="/videos/Amazon.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>Cafe Amazon</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-start'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/MuayThai.png'>
              <source src="/videos/PTTGC.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>Discover Muaythai</h2>
          </div>
        </div>
        
        <div className='flex justify-center lg:justify-end'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/EGAT.png'>
              <source src="/videos/EGAT.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>EGAT rfid</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-start'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/Science.png'>
              <source src="/videos/Science.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>Science week</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-end'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/BangChak.png'>
              <source src="/videos/BangChak.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>Bangchak 38th anniversary</h2>
          </div>
        </div>

        <div className='flex justify-center lg:justify-start'>
          <div>
            <video width="465" height="232" controls preload="none" poster='/preload/Oishi.png'>
              <source src="/videos/Oishi.mp4" type="video/mp4" />
            </video>
            <h2 className='ENG mt-5 text-center text-3xl text-customBlue'>Oishi</h2>
          </div>
        </div>
      </project>
    </>
  )
}

export default page