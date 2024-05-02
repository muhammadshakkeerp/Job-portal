"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ApplyButton = () => {
    const [isApplied, setIsApplied] = useState(false)
    const applyHandler = () => {
        if (!isApplied) {
            toast.success("Submitted Successfully")
            setIsApplied(true)
        }

    }
    return (
        <div>
            <button onClick={applyHandler} type='submit' className={`${isApplied && 'opacity-20'} px-10 py-3 bg-blue-600 text-white font-semibold transition-all duration-300 hover:bg-blue-800 hover:scale-105`} disabled={isApplied}>{isApplied ? "Applied" : "Apply Now"}</button>
            <ToastContainer position='top-center' />
        </div>
    )
}
