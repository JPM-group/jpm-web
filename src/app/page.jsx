import Image from "next/image";
import Jumbotron from "./components/Jumbotron";

export default function Home() {
  return (
    <main>
      <Jumbotron/>

    <about>
        <div className='flex-col justify-center conten-center'>
            <h2 id='AboutUs' className="ENG mb-14 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white gradient-text">About us</h2>
            <p className="TH m-5 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-64 dark:text-gray-400">JPM Group สตาร์ทอัปที่ให้บริการด้านการออกแบบ interactive program ไม่ว่าจะเป็นสื่อการเรียนรู้ งานพิพิธภัณฑ์ งานโฆษณา มินิเกมตามงานอีเวนต์ ฯลฯ โดยสามารถออกแบบได้ทั้งโปรแกรมที่ต้องทำงานร่วมกับ sensor และไม่ใช้ sensor โปรแกรมที่เราออกแบบสามารถใช้งานได้บนอุปกรณ์ที่หลากหลาย ไม่ว่าจะเป็น จอ touch screen, จอ LED, projector เป็นต้น</p>
            <p className="TH m-5 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-64 dark:text-gray-400">นอกจากการออกแบบโปรแกรมแล้ว JPM Group ยังให้บริการออกแบบกราฟิกดีไซน์-วิดีโอ และโมชั่นต่างๆ ที่จำเป็นต้องใช้ร่วมกับ interactive program หรือ interactive game ลูกค้าแค่นำเสนอไอเดีย หน้าที่ของเราคือสร้างสรรค์องค์ประกอบภาพให้ได้ออกมาตามที่คุณต้องการ</p>
        </div>
        <div className="flex items-center justify-center my-10">
          <div className="border-t border-gray-400 w-1/6"></div>
          <div className="flex space-x-4 mx-10">
            <span className="w-2 h-2 bg-customBlue"></span>
            <span className="w-2 h-2 bg-customBlue"></span>
            <span className="w-2 h-2 bg-customBlue"></span>
          </div>
          <div className="border-t border-gray-400 w-1/6"></div>
        </div>
      </about>

    <service>
      <div className="h-auto customBlack pb-14">
        <h2 id='Services' className="ENG mt-24 p-4 md:p-14 text-center text-4xl leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-gray-900">Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-12 sm:px-32 md:px-48 lg:px-36">
          <div className="pb-5 flex flex-col justify-between">
            <div>
              <Image src="/service_p1.png" height={290} width={290} priority={true} alt='service 1' className="w-full h-auto" />
              <div className="mt-10 mb-5 pl-3 bg-customBlue">
                <h3 className="ENG pl-7 p-2 bg-white text-2xl md:text-3xl lg:text-4xl text-customBlue">Interactive program</h3>
              </div>
              <p className="TH ml-3 pb-3 text-left text-white text-base md:text-lg lg:text-2xl font-extralight">ออกแบบระบบสำหรับเนื้อหาที่ต้องการให้กลุ่มเป้าหมายสามารถมีปฏิสัมพันธ์โต้ตอบกับอุปกรณ์ได้</p>
              <p className="TH ml-3 pb-3 text-left text-white text-base md:text-lg lg:text-2xl font-extralight">สามารถออกแบบได้ทั้งโปรแกรมที่ทำงานร่วมกับ sensor และระบบที่ไม่ต้องใช้ sensor</p>
              <p className="TH ml-3 pb-3 text-left text-white text-base md:text-lg lg:text-2xl font-extralight">โปรแกรมที่ออกแบบสามารถใช้งานได้กับอุปกรณ์ที่หลากหลาย เช่น จอ touch screen, จอ LED, projector ฯลฯ</p>
            </div>
            <div>
              <button className="ENG mt-5 bg-white text-customBlue hover:bg-customBlue hover:text-white font-bold py-2 px-4 rounded-full block">Idea for Interactive program</button>
              <button className="TH mt-3 bg-customBlue hover:bg-white hover:text-customBlue text-white py-2 px-4 rounded-full block">ผลงานของเรา</button>
            </div>
          </div>
          <div className="pb-5 flex flex-col justify-between">
            <div>
              <Image src="/service_p2.png" height={322} width={322} priority={true} alt='service 2' className="w-full h-auto" />
              <div className="mt-10 mb-5 pl-3 bg-customBlue">
                <h3 className="ENG pl-7 p-2 bg-white text-2xl md:text-3xl lg:text-4xl text-customBlue">Mini game for event</h3>
              </div>
              <p className="TH ml-3 pb-3 text-left text-white text-base md:text-lg lg:text-2xl font-extralight">ออกแบบเกมที่ใช้ตามงานอีเวนต์ต่างๆ ทั้งแบบที่ใช้งานร่วมกับ sensor และไม่ต้องใช้ sensor</p>
              <p className="TH ml-3 pb-3 text-left text-white text-base md:text-lg lg:text-2xl font-extralight">สามารถออกแบบให้ใช้งานได้กับอุปกรณ์ที่ลูกค้าต้องการ เช่น จอ touch screen, จอ LED, projector เป็นต้น</p>
            </div>
            <div>
              <button className="ENG mt-5 bg-white text-customBlue hover:bg-customBlue hover:text-white font-bold py-2 px-4 rounded-full block">Idea for Interactive program</button>
              <button className="TH mt-3 bg-customBlue hover:bg-white hover:text-customBlue text-white py-2 px-4 rounded-full block">ผลงานของเรา</button>
            </div>
          </div>
          <div className="pb-5 flex flex-col justify-between">
            <div>
              <Image src="/service_p3.png" height={322} width={321} priority={true} alt='service 3' className="w-full h-auto" />
              <div className="mt-10 mb-5 pl-3 bg-customBlue">
                <h3 className="ENG pl-7 p-2 bg-white text-2xl md:text-3xl lg:text-4xl text-customBlue">Graphic & motion design</h3>
              </div>
              <p className="TH ml-3 pb-3 text-left text-white text-base md:text-lg lg:text-2xl font-extralight">บริการออกแบบภาพกราฟิก-วิดีโอและโมชั่นต่างๆ ที่จำเป็นต้องใช้ร่วมกับ interactive program/ interactive game</p>
              <p className="TH ml-3 pb-3 text-left text-white text-base md:text-lg lg:text-2xl font-extralight">รวมถึงรับออกแบบงานดีไซน์สำหรับใช้ในด้านอื่นๆ ไม่ว่าจะเป็น กราฟิกสำหรับโฆษณาบน social media, infographic, catalog, poster, brochure, presentation หรืองาน retouch ภาพ เป็นต้น</p>
            </div>
            <div>
              <button className="TH mt-3 bg-customBlue hover:bg-white hover:text-customBlue text-white py-2 px-4 rounded-full block">ผลงานของเรา</button>
            </div>
          </div>
        </div>
      </div>
    </service>

    <contact>
      <div className='pt-14'>
        <h2 id='Contact' className="ENG mb-14 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white gradient-text">Contact us</h2>
        <div className="ENG mx-4 md:mx-24 lg:mx-64 my-24 flex flex-col 2xl:flex-row justify-between text-2xl font-light">
          <div className="flex p-3 justify-center items-center">
            <a href="tel:0962826224">
              <Image src="/Phone.png" height={60} width={60} alt='phone logo' className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </a>
            <p className="pl-5 text-center">096-2826224 (May)</p>
          </div>
          <div className="flex p-3 justify-center items-center">
            <a href="tel:0962826224">
              <Image src="/Line.png" height={60} width={60} alt='line logo' className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </a>
            <p className="pl-5 text-center">@jpmgroup</p>
          </div>
          <div className="flex p-3 justify-center items-center">
            <a href="mailto:jpmgroupteam@gmail.com">
              <Image src="/Mail.png" height={60} width={60} alt='mail logo' className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </a>
            <p className="pl-5 text-center">jpmgroupteam@gmail.com</p>
          </div>
        </div>
      </div>
    </contact>

    </main>
  );
}
