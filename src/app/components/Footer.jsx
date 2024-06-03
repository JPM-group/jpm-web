import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
        <div className="flex items-center justify-center mt-44 mb-24">
            <div className="border-t border-gray-400 w-1/6"></div>
            <div className="flex space-x-4 mx-10">
                <span className="w-2 h-2 bg-customBlue"></span>
                <span className="w-2 h-2 bg-customBlue"></span>
                <span className="w-2 h-2 bg-customBlue"></span>
            </div>
            <div className="border-t border-gray-400 w-1/6"></div>
        </div>
        <footer className="ENG footer p-3 bg-customBlue text-white text-xs">
            <aside className='self-center justify-self-center'>
                <Image src="/whiteLogo.png" height={150} width={150} priority={false} alt='jpm logo'></Image>
                <p>©2024 JPMGROUP. All Rights Reserved.</p>
            </aside>
            <div></div><div></div><div></div>
            <nav>
                <h6 className="footer-title">Contact</h6> 
                <a className="link link-hover">096-2826224 (May)</a>
                <a className="link link-hover">LINE: @jpmgroup</a>
                <a className="link link-hover">jpmgroupteam@gmail.com</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Service</h6> 
                <a className="link link-hover">Interactive program</a>
                <a className="link link-hover">Mini game for event</a>
                <a className="link link-hover">Graphic-motion design</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Support</h6> 
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
            </nav>
        </footer>
    </>
  )
}

export default Footer