"use client";
import React from 'react'
import signupImage from '@/public/images/chair.jpg'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const SignUp = () => {
  return (
    <div className='h-[84hv] flex flex-col items-center justify-center'>
      {/* image */}
      <Image src={signupImage} alt='signupImage' width={400} height={200} />
      {/* button */}
      <button type='submit' onClick={() => {
        signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_URL })
      }} className='px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-colors duration-300 font-semibold text-white rounded-lg'>Sign Up Now</button>
    </div>
  )
}

export default SignUp