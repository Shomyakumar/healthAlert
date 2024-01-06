
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from 'react-icons/fc'
export default function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}){
    return(
        <div className='flex justify-between items-center   w-11/12 max-w-[1200px] mx-auto py-12 gap-x-12'>
            <div className='flex flex-col gap-4 w-11/12 max-w-[450px]'>

                <h1 className='text-amber-300 text-[2rem] font-semibold '>{title}</h1>
                <p className='flex flex-col  text-[1.125rem]'>
                    <span className='text-[#F4EEE0]'>{desc1}</span>
                    <span className='italic text-[#F8F0E5] '>{desc2}</span>
                </p>
                {
                    formtype==="signup"?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }
                <div className='flex items-center gap-x-2 '>
                    <div className='h-[1px]  bg-white flex-grow'></div>
                    <p className='text-white font-medium'>OR</p>
                    <div className='h-[1px]  bg-white flex-grow'></div>
                </div>

                <button className='rounded border border-white text-white font-medium 
                    text-sm py-[8px] flex items-center justify-center gap-2'>
                <span><FcGoogle/></span>Sign in with Google</button>

            </div>
            <div className=' w-11/12 max-w-[650px] flex justify-end'>
               
                <img src={image} alt="users" width="650px"  loading="lazy"
                    className='absolute bottom-[2rem]'></img>
               
            </div>
        </div>
    )
}