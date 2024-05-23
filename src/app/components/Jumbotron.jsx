import React from 'react'

function Jumbotron() {
  return (
    <>
        <br/><br/>
        <section className="mt-1 bg-center bg-no-repeat bg-[url('/bg_home.png')] bg-blend-multiply h-auto">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="ml-14 pl-14 text-2xl font-extrabold tracking-tight leading-none text-white sm:text-4xl md:text-6xl lg:text-7xl text-start">Connecting Ideas,<br/><br/></h1>
                <h1 className="mr-14 pr-14 text-2xl font-extrabold tracking-tight leading-none text-white sm:text-4xl md:text-6xl lg:text-7xl text-end">Creating Solutions</h1>
            </div>
        </section>
    </>
  )
}

export default Jumbotron