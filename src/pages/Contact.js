import { useState } from "react"
import toast from "react-hot-toast";
import docter from "../assets/doc-1.png"
export default function Contact(){

    const [formData,setFormData]=useState({Name:"",email:"",query:"",})
    function changeHandler(event){
        setFormData(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    function submitHandler(event){
        toast.success("Query sent successfully");        

    }

    return(
        <div className=" w-11/12 max-w-[1200px] mx-auto pt-12 gap-x-12">

         <div className="flex justify-between">
            <div className="w-[500px]">
                <img src={docter}/>
            </div>
            <div className="flex flex-col">
                <h1 className="text-[3rem] text-yellow-400">Contact Us</h1>
               <div className="min-w-[500px]">
                    <p className="italic text-2xl text-cyan-400">You can email us at</p>
                    <p className=" text-slate-200">HealthAlert101@gmail.com</p>
               </div>
               <div className="flex flex-col flex-1 gap-4">
                    <p className="font-semibold text-3xl text-white">Ask your query</p>
                    <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                        <label className="  flex-1 flex flex-col">
                            <p className="text-[0.875rem] leading-[1.375rem] text-white mb-1">Name <sup className="text-pink-200">*</sup></p>
                            <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                                type="text" required name="Name" value={formData.Name} 
                                onChange={changeHandler} placeholder="Enter name" />
                        </label>
                        <label className="  flex-1 flex flex-col">
                            <p className="text-[0.875rem] leading-[1.375rem] text-white mb-1">Email <sup className="text-pink-200">*</sup></p>
                            <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                                type="email" required name="email" value={formData.email} 
                                onChange={changeHandler} placeholder="Enter Email Address" />
                        </label>
                        <label className="  flex-1 flex flex-col">
                            <p className="text-[0.875rem] leading-[1.375rem] text-white mb-1">Query <sup className="text-pink-200">*</sup></p>
                            <input className="flex-1 p-2 rounded-md bg-richblack-800 text-richblack-5 border-b-[1px] border-b-richblack-100"
                                type="text" required name="query" value={formData.query} 
                                onChange={changeHandler} placeholder="Write your query" />
                        </label>
                        <button className="text-richblack-900 bg-yellow-50 py-2 rounded-lg font-medium mt-2 hover:bg-yellow-500">
                        Submit</button>
                    </form>
               </div>
            </div>

         </div>   

        </div>
    )
}