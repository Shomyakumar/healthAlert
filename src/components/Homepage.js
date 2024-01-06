import './Homepage.css'
import Header from "../assets/header.png"

export default function Homepage(){
    return(
        <div className='flex justify-between    w-11/12 max-w-[1200px] mx-auto py-12 gap-x-12'>
            <div className='flex flex-col gap-4 max-w-[600px]'>
                <p className="text-[3.5rem] font-semibold main-heading text-yellow-400"> <span className=" text-[3rem]">Welcome To</span>  HealthAlert </p>
                <p className='italic text-3xl text-slate-300 sub-heading'>People are around you to provide help or immediate assistance in your critical time.</p>
                
                <div>
                    <p className='text-lg font-semibold text-cyan-400'>People near you will get notified with your one click</p>
                    <p className='text-lg font-semibold text-cyan-400'>Seek help from people around you</p>
                </div>
                <div className='flex gap-4'>
                    <button className="text-white bg-red-600 py-4 px-6 rounded-lg font-medium mt-2">Need blood</button>
                    <button className="text-white bg-red-600 py-4 px-6 rounded-lg font-medium mt-2">Got Injured</button>
                    
                </div>
            </div>
            <div className='max-w-[600px]'>
                <img src={Header} alt="doctors"/>
            </div>
        </div>
    )
}