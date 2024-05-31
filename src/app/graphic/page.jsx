import React from 'react'
import EmblaCarousel from '../components/carousel/EmblaCarousel'

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function page() {
  return (
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  )
}

export default page