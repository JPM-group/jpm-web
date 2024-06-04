import React from 'react'
import EmblaCarousel from '../components/carousel/EmblaCarousel'
import imagePath from '../program/bg-program.png'

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function page() {
  return (
    <>
      <heading className="mt-3 bg-center w-full block" style={{backgroundImage: `url(${imagePath.src})`, width:'100%!',height:'100%'}}>
        <div className="ENG mx-auto max-w-screen-6xl text-center pt-24 lg:py-56">
            <h1 className="font-extralight tracking-wider text-2xl leading-none text-customBlue sm:text-4xl md:text-6xl lg:text-7xl">
              Graphic-motion graphic design
              <span className='font-light ml-5 text-2xl sm:text-5xl md:text-7xl lg:text-8xl'>works</span>
            </h1>
        </div>
        <div className='ENG font-extralight gradient-tab text-xs sm:text-sm md:text-base lg:text-lg '>Connecting Ideas, Creating Solutions</div>
      </heading>

      <div className='container my-14 px-5 mx-auto'>
        <h2 className='ENG mx-auto max-w-6xl my-10 text-customBlue text-4xl font-bold'>Graphic design works</h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      <div className='container my-14 px-5 mx-auto'>
        <h2 className='ENG mx-auto max-w-6xl my-10 text-customBlue text-4xl font-bold'>Motion graphic design works</h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </>
    
  )
}

export default page