import React, { useState } from 'react'
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate(); 

    const [formData , setFormData] = useState({
        firstName : "" , 
        lastName : "" ,
        email : "" ,
        password : "" ,
        confirmPassword : "" ,
    })

    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);
    const [accountType , setAccountType] = useState("Student");

    function changeHandler(event){
        setFormData((prevData) => (
           { ...prevData,
            [event.target.name] : event.target.value, 
        }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match");
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate('./dashboard');
    }

  return (
    <div >
        <div className='flex rounded-full bg-richblack-800 p-1 gap-x-1 my-6 max-w-max '>
            <button className={`${accountType === "Student"
                                ? "bg-richblack-900 text-richblack-5"
                                : "bg-transparent text-richblack-200"
                                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("Student")}
                >Student</button>

            <button className={`${accountType === "Instructor"
                                ? "bg-richblack-900 text-richblack-5"
                                : "bg-transparent text-richblack-200"
                                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("Instructor")}
                >Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            {/* contains first name and last name */}
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name
                            <sup  className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        placeholder='Enter First Name'
                        onChange={changeHandler}
                        value={formData.firstName}
                        name='firstName'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name 
                        <sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        placeholder='Enter Last Name'
                        onChange={changeHandler}
                        value={formData.lastName}
                        name='lastName'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                </label>
            </div>

            {/* email add */}
            <div className=' mt-[20px]'>
                <label className='w-full'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address 
                        <sup  className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        placeholder='Enter Email Address'
                        onChange={changeHandler}
                        value={formData.email}
                        name='email'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                </label>

            </div>
            

            {/* create and confirm password */}
            <div className='w-full flex gap-x-4 mx-0 mt-[20px]'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password
                            <sup  className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password") }
                        placeholder='Enter Password'
                        onChange={changeHandler}
                        value={formData.password}
                        name='password'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                        <span className='absolute right-3 top-[38px] cursor-pointer  ' 
                            onClick={ () => setShowPassword( (prev) => !prev) }>
                            { showPassword ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
                        </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Confirm Password
                            <sup  className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type={showConfirmPassword ? ("text") : ("password") }
                        placeholder='Confirm Password'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        name='confirmPassword'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>

                        <span className='absolute right-3 top-[38px] cursor-pointer  ' 
                            onClick={ () => setShowConfirmPassword( (prev) => !prev) }>
                            { showConfirmPassword ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
                        </span>
                </label>
            </div>

            <button  className='w-full bg-yellow-50 text-richblack-900 px-[12px] py-[8px] rounded-[8px] font-medium mt-[20px]'
                >Create Account</button>

        </form>

    </div>
  )
}

export default SignupForm