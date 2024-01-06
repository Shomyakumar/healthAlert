

import { Link } from "react-router-dom"
import toast from "react-hot-toast";

export default function Nav(props){
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <div className="flex justify-between items-center  w-11/12 max-w-[1200px] py-4 mx-auto my-4 ">
            <div className="text-4xl font-mono font-bold text-white " >Health Alert</div>
            <nav>
                <ul className="flex gap-x-10 font-semibold  text-lg text-white  ">
                    <li className="border-b-2 border-[#04364A] hover:border-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="border-b-2 border-[#04364A] hover:border-white">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="border-b-2 border-[#04364A] hover:border-white">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex  gap-x-4 items-center">
                {   !isLoggedIn &&
                    <Link to="/login"><button className="bg-orange-600 text-white py-[8px] px-[18px] 
                    rounded-[8px]    hover:bg-orange-500 ">Log in</button></Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/Signup"><button className="bg-orange-600 text-white py-[8px] px-[18px] 
                    rounded-[8px]   hover:bg-orange-500 "
                    >Sign up</button></Link>
                }
                {
                    isLoggedIn&&
                    <Link to="/"><button className="bg-red-500 text-white py-[8px] px-[12px] 
                    rounded-[8px] border  "
                    onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>Log out</button></Link>
                }
                {
                    isLoggedIn&&
                    <Link to="/dashboard"><button className="bg-red-600 text-white py-[8px] px-[18px] 
                    rounded-[8px] border  hover:bg-red-500 ">Dashboard</button></Link>
                }
                
            </div>
        </div>
    )
}