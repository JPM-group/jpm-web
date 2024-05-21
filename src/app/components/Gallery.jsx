import React from 'react'
import Head from 'next/head';

function Gallery() {
  return (
  <div className="container mx-auto p-4">
  <Head>
    <title>Program Works - JPM Groups</title>
    <meta name="description" content="JPM Groups Program Works and Interactive Solutions" />
  </Head>
  <main>
    <h1 className="text-3xl font-bold text-center my-8">Program Works</h1>
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">Interactive Programs</h2>
        <p>
          JPM Group สตาร์ทอัปที่ให้บริการด้านการออกแบบ interactive program ไม่ว่าจะเป็นสื่อการเรียนรู้ งานพิพิธภัณฑ์
          งานโฆษณา มินิเกมตามงานอีเวนต์ ฯลฯ โดยสามารถออกแบบได้ทั้งโปรแกรมที่ต้องทำงานร่วมกับ sensor และไม่ใช้
          sensor โปรแกรมที่เราออกแบบสามารถใช้งานได้บนอุปกรณ์ที่หลากหลาย ไม่ว่าจะเป็น จอ touch screen, จอ LED,
          projector เป็นต้น
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Graphics and Motion Design</h2>
        <p>
          นอกจากการออกแบบโปรแกรมแล้ว JPM Group ยังให้บริการออกแบบกราฟิกดีไซน์-วีดีโอ และโมชั่นต่างๆ ที่จำเป็นต้อง
          ใช้ร่วมกับ interactive program หรือ interactive game ลูกค้าแค่บอกไอเดีย หน้าที่ของเราคือสร้างสรรค์องค์
          ประกอบภาพให้ได้ออกมาตามที่คุณต้องการ
        </p>
      </section>
      <section className="video-gallery">
        <h2 className="text-2xl font-semibold">Video Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative">
            <video controls className="w-full h-auto">
              <source src="/videos/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm p-1">Video 1</div>
          </div>
          <div className="relative">
            <video controls className="w-full h-auto">
              <source src="/videos/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm p-1">Video 2</div>
          </div>
          <div className="relative">
            <video controls className="w-full h-auto">
              <source src="/videos/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm p-1">Video 3</div>
          </div>
          {/* Add more videos as needed */}
        </div>
      </section>
    </div>
  </main>
</div>
  )
}

export default Gallery