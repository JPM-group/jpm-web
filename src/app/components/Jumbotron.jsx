import React from 'react'

function Jumbotron() {
  return (
    <>
        <section className="mt-3 bg-center bg-no-repeat bg-[url('/bg_home.png')] bg-blend-multiply h-auto">
            <div className="ENG px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="ml-24 pl-24 text-2xl leading-none text-white sm:text-4xl md:text-6xl lg:text-7xl text-start">Connecting Ideas,</h1>
                <h1 className="mr-24 pr-24 mt-5 text-2xl leading-none text-white sm:text-4xl md:text-6xl lg:text-7xl text-end">Creating Solutions</h1>
            </div>
        </section>
    </>
  )
}

export default Jumbotron