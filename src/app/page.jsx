import Jumbotron from "./components/Jumbotron";

export default function Home() {
  return (
    <main>
      <Jumbotron/>
      <div className='flex-col justify-center conten-center'>
            <h2 id='AboutUs' className="mb-14 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white gradient-text">About us</h2>
            <div className="m-5 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-64 dark:text-gray-400">JPM Group สตาร์ทอัปที่ให้บริการด้านการออกแบบ interactive program ไม่ว่าจะเป็นสื่อการเรียนรู้ งานพิพิธภัณฑ์ งานโฆษณา มินิเกมตามงานอีเวนต์ ฯลฯ โดยสามารถออกแบบได้ทั้งโปรแกรมที่ต้องทำงานร่วมกับ sensor และไม่ใช้ sensor โปรแกรมที่เราออกแบบสามารถใช้งานได้บนอุปกรณ์ที่หลากหลาย ไม่ว่าจะเป็น จอ touch screen, จอ LED, projector เป็นต้น</div>
            <div className="m-5 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-64 dark:text-gray-400">นอกจากการออกแบบโปรแกรมแล้ว JPM Group ยังให้บริการออกแบบกราฟิกดีไซน์-วิดีโอ และโมชั่นต่างๆ ที่จำเป็นต้องใช้ร่วมกับ interactive program หรือ interactive game ลูกค้าแค่นำเสนอไอเดีย หน้าที่ของเราคือสร้างสรรค์องค์ประกอบภาพให้ได้ออกมาตามที่คุณต้องการ</div>
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
    </main>
  );
}
