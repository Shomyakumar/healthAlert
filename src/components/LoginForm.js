
import { useState } from "react"
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({setIsLoggedIn}){
    const [formData,setFormData]=useState({
        email:"",password:""
    })
    const[showPassword,setShowpassword]=useState(false);
    function changeHandler(event){
        
        setFormData( prevdata=>{
            return {
                ...prevdata,
                [event.target.name]:event.target.value
            }
        })
    }
    const navigate=useNavigate();
    const submitHandler = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:4000/api/v1/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            setIsLoggedIn(true);
            toast.success('Logged in');
            navigate('/Home');
          } else {
            toast.error('Invalid credentials');
          }
        } catch (error) {
          console.error('Error during login:', error);
          toast.error('Internal server error');
        }
      };
    return(
        <form onSubmit={submitHandler} className="flex flex-col gap-4 w-full">

            <label className="  flex-1 flex flex-col">
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Email Adddress<sup className="text-pink-200">*</sup></p>
                <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                required type="email" name="email" value={formData.email} placeholder="Enter email address"
                    onChange={changeHandler}  >
                </input>
            </label>
            <label className=" flex flex-1 flex-col relative">
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Password <sup className="text-pink-200">*</sup></p>
                <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                    required name="password" type={showPassword?("text"):("password")} value={formData.password} 
                    onChange={changeHandler} placeholder="Enter password">
                </input>
                <span className="absolute right-3 top-[38px] cursor-pointer "
                    onClick={()=>setShowpassword((prev)=>!prev)}>
                    {showPassword?(<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={20} fill="#AFB2BF"/>)}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label>
            <button className="text-richblack-900 bg-yellow-50 py-2 rounded-lg font-medium mt-2 hover:bg-yellow-500">
                Sign in</button>
            
        </form>
    )
}