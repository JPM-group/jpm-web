import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src="/JPM_logo.png" height={125} width={125} priority={true} alt='jpm logo'></Image>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="TH border-2 hover:border-sky-800 text-white font-light bg-customBlue hover:bg-white hover:text-customBlue px-4 py-2 text-center rounded-full">ติดต่อ</button>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className='TH text-customBlue text-xl'>
                        <Link href="/" className="mr-14 block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-lightBlue md:p-0">หน้าแรก</Link>
                    </li>
                    <li className='TH text-customBlue text-xl'>
                        <Link href="/#Services" className="mr-14 block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-lightBlue md:p-0">บริการ</Link>
                    </li>
                    <li className='TH text-customBlue text-xl'>
                        {/* <Link href="" className="mr-14 block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-lightBlue md:p-0">ผลงาน</Link> */}
                        <div className="dropdown ">
                            <div tabIndex={0} role="button" className='mr-14 block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-lightBlue md:p-0'>ผลงาน</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64">
                                <li><Link href="" className="ENG text-lg font-medium md:hover:bg-transparent md:hover:text-lightBlue ">Program development</Link></li>
                                <li><Link href="" className="ENG text-lg font-medium md:hover:bg-transparent md:hover:text-lightBlue ">Graphic & motion design</Link></li>
                            </ul>
                        </div>
                        
                    </li>
                    <li className='TH text-customBlue text-xl'>
                        <Link href="" className="mr-14 block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-lightBlue md:p-0">ดูแคตาล็อค</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav