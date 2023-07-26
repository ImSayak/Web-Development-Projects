import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        firstname: "", lastname: "", email: "", password: "", confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigator = useNavigate()
    const [accountType, setAccountType]=useState("Student")

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        })
        )
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password do not match")
        }
        else {
            toast.success("Account Created")
            setIsLoggedIn(true)

            // final data
            const accountData = {
                ...formData, accountType
            }
            console.log(accountData);

            navigator("/Dashboard")
        }

    }

    return (
        <div>
            {/* student-Instructor tab */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType === "Student"? 
                "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"}
                py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("Student")}>
                    Student
                </button>
                <button className={`${accountType === "Instructor"? 
                "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"}
                py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("Instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* first name and lastName */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            onChange={changeHandler}
                            value={formData.firstname}
                            name="firstname"
                            placeholder="Enter first name"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            onChange={changeHandler}
                            value={formData.lastname}
                            name="lastname"
                            placeholder="Enter last name"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]'
                        />
                    </label>
                </div>

                {/* email Add */}
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        onChange={changeHandler}
                        value={formData.email}
                        name="email"
                        placeholder="Enter email address"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                {/* createPassword and Confirm Password */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            onChange={changeHandler}
                            value={formData.password}
                            name="password"
                            placeholder="Enter Password"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>

                    </label>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]'
                        />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
                <button className=' w-full bg-yellow-50 rounded-[8px] font-medium
                 text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account</button>
            </form>

        </div>
    )
}
export default SignupForm;