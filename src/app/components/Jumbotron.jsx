import React from 'react'

function Jumbotron() {
  return (
    <>
        <br/><br/>
        <section class="mt-1 bg-center bg-no-repeat bg-[url('/bg_home.png')] bg-blend-multiply h-auto">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="ml-14 pl-14 text-2xl font-extrabold tracking-tight leading-none text-white sm:text-4xl md:text-6xl lg:text-7xl text-start">Connecting Ideas,<br/><br/></h1>
                <h1 class="mr-14 pr-14 text-2xl font-extrabold tracking-tight leading-none text-white sm:text-4xl md:text-6xl lg:text-7xl text-end">Creating Solutions</h1>
            </div>
        </section>
        <div className='flex-col justify-center conten-center'>
            <h2 id='AboutUs' class="mb-14 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white gradient-text">About us</h2>
            <p class="m-5 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-64 dark:text-gray-400">JPM Group สตาร์ทอัปที่ให้บริการด้านการออกแบบ interactive program ไม่ว่าจะเป็นสื่อการเรียนรู้ งานพิพิธภัณฑ์ งานโฆษณา มินิเกมตามงานอีเวนต์ ฯลฯ โดยสามารถออกแบบได้ทั้งโปรแกรมที่ต้องทำงานร่วมกับ sensor และไม่ใช้ sensor โปรแกรมที่เราออกแบบสามารถใช้งานได้บนอุปกรณ์ที่หลากหลาย ไม่ว่าจะเป็น จอ touch screen, จอ LED, projector เป็นต้น</p>
            <p class="m-5 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-64 dark:text-gray-400">นอกจากการออกแบบโปรแกรมแล้ว JPM Group ยังให้บริการออกแบบกราฟิกดีไซน์-วิดีโอ และโมชั่นต่างๆ ที่จำเป็นต้องใช้ร่วมกับ interactive program หรือ interactive game ลูกค้าแค่นำเสนอไอเดีย หน้าที่ของเราคือสร้างสรรค์องค์ประกอบภาพให้ได้ออกมาตามที่คุณต้องการ</p>
        </div>

        <div className="flex items-center justify-center my-10">
          <div className="border-t border-gray-300 w-1/6"></div>
          <div className="flex space-x-4 mx-10">
            <span className="w-2 h-2 bg-gray-300 customBlue"></span>
            <span className="w-2 h-2 bg-gray-300 customBlue"></span>
            <span className="w-2 h-2 bg-gray-300 customBlue"></span>
          </div>
          <div className="border-t border-gray-300 w-1/6"></div>
        </div>
    </>
  )
}

export default Jumbotron