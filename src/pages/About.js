import about from '../assets/about-img.png'
import Header from "../assets/header.png"
import Blood from"../assets/service-icon-3.png"
import Help from"../assets/service-icon-1.png"
import Explore from"../assets/service-icon-4.png"
export default function About(){
    return(
        <div className='w-[100vw]'>
            <div className='flex justify-between    w-11/12 max-w-[1200px] mx-auto pt-12 gap-x-12'>
                <div className='flex flex-col gap-4 max-w-[600px]'>
                    <p className="text-[3rem] font-semibold main-heading text-yellow-400">About HealthAlert Application</p>

                    <p className='text-slate-200 text-lg'>In a world where emergencies can strike at any moment, HealthAlert emerges
                     as a beacon of hope and assistance.<br></br><br></br>
                    With countless lives lost due to the lack of immediate aid and essential resources, this innovative
                     application steps forward as a lifeline during critical situations.</p>
                </div>
                <div className='max-w-[600px] flex items-end relative'>
                    <img src={about} alt="doctors" width="600px"/>
                </div>
            </div>
            <div className='w-[100vw] '>
                <div className='flex flex-col w-11/12 max-w-[1200px] mx-auto pt-12 gap-x-12'>
                    <p className='text-4xl font-semibold text-yellow-400  my-4'>Major Function</p>
                     <p className='text-white text-xl'>HealthAlert sends notification to registered user who are nearby to accident point
                      and are capable to help like medical help by donating blood or giving first
                      aid or help with transportation to nearby hospital or medical shops.</p>

                </div>
                <div className='flex flex-col w-11/12 max-w-[1200px] mx-auto py-12 gap-x-12'>
                    <p className='text-3xl  mb-6 font-semibold text-yellow-400'>You can use health alert when</p>
                    <div className='flex justify-between'>
                        
                        <div className='w-[350px] bg-[#EEF0E5] rounded-lg p-6 flex flex-col items-center gap-4'>
                            <img src={Blood} alt="blood"/>
                            <p className='text-lg font-semibold text-[#092635]'>When you urgently need blood and blood bank is not available in your area.</p>
                        </div>
                        <div className='w-[350px] bg-[#EEF0E5] rounded-lg p-6 flex flex-col items-center gap-4'>
                            <img src={Help} alt="blood"/>
                            <p className='text-lg font-semibold text-[#092635]'>When you get injured and you can't move and you need to admitted to hospital.</p>
                        </div>
                        <div className='w-[350px] bg-[#EEF0E5] rounded-lg p-6 flex flex-col items-center gap-4'>
                            <img src={Explore} alt="blood"/>
                            <p className='text-lg font-semibold text-[#092635]'>When you want to search hospitals or doctors near you.</p>
                        </div>
                    </div>
                        <div className='py-6'>
                        <p className='text-lg font-semibold text-white'>Our mission is to save lives by connecting individuals in
                         need with nearby registered users capable of offering timely help. Whether it's medical
                         assistance, first aid, or transportation, HealthAlert aims to make communities safer and more responsive.</p>
                         <br></br>
                        <p className='text-lg font-semibold text-white'>As a user-driven platform, HealthAlert encourages community members to contribute, collaborate, and become local heroes. By harnessing the power of technology, we strive to transform the way people respond to emergencies.</p>
                       
                        </div>
                </div>
            </div>
        </div>
    )
}