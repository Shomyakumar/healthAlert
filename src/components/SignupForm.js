import { useState } from "react"
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignupForm({setIsLoggedIn}){
    
    const navigate=useNavigate();
    const[showPassword1,setShowPassword1]=useState(false);
    const[showPassword2,setShowPassword2]=useState(false);
    
    const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
    function changeHandler(event){
        setFormData(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.confirmPassword)
        {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        
        
        const finalData={...formData};
        console.log(finalData);
        fetch('http://localhost:4000/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(finalData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setIsLoggedIn(true);
                toast.success("Account Created");
                navigate("/Home");
            } else {
                toast.error("Failed to create account.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            toast.error("An error occurred. Please try again later.");
        });
        
        
    }
    return(
        <div>
            
            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4 my-4">
                    <label className="  flex-1 flex flex-col">
                        <p className="text-[0.875rem] leading-[1.375rem] text-white mb-1">First name <sup className="text-pink-200">*</sup></p>
                        <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                            type="text" required name="firstName" value={formData.firstName} 
                            onChange={changeHandler} placeholder="Enter first name" />
                    </label>
                    <label className="  flex-1 flex flex-col">
                        <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Last name <sup className="text-pink-200">*</sup></p>
                        <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                        type="text" required name="lastName" value={formData.lastName} 
                        onChange={changeHandler} placeholder="Enter last name" />
                    </label>
                </div>

                <label className="  flex-1 flex flex-col">
                    <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Email Address <sup className="text-pink-200">*</sup></p>
                    <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                    type="email" required name="email" value={formData.email} 
                    onChange={changeHandler} placeholder="Enter email" />
                </label>
                <div className="flex gap-x-4 my-4">
                    <label className="  flex-1 flex flex-col relative">
                        <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Create Password<sup className="text-pink-200">*</sup></p>
                        <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                        type={showPassword1?("text"):("password")} required name="password" value={formData.password} 
                        onChange={changeHandler} placeholder="Enter Password"/>
                        <span className="absolute right-3 top-[38px] cursor-pointer "
                            onClick={()=>{setShowPassword1(!showPassword1)}}>
                            {showPassword1?(<AiOutlineEye fontSize={20} fill="#AFB2BF"/>):(<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                    <label className="  flex-1 flex flex-col relative">
                        <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Confirm Password<sup className="text-pink-200">*</sup></p>
                        <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                        type={showPassword2?("text"):("password")} required name="confirmPassword" value={formData.confirmPassword} 
                        onChange={changeHandler} placeholder="Confirm Password" />
                        <span className="absolute right-3 top-[38px] cursor-pointer "
                            onClick={()=>{setShowPassword2(prev=>!prev)}}>
                            {showPassword2?(<AiOutlineEye fontSize={20} fill="#AFB2BF"/>):(<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                </div>

                <button className="text-richblack-900 bg-yellow-400 py-2 rounded-lg font-medium mt-4 w-full hover:bg-yellow-500 hover:text-white">Create Account</button>
            </form>
        </div>
    )
}