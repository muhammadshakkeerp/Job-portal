import React from 'react'

const Hero = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] '>
            <div className='w-full h-[60vh]  flex flex-col items-center justify-center'>
                <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 item-center gap-[2rem]'>
                    {/* content */}
                    <div>
                        <h1 className='text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold'>The <span className='text-blue-500'>Easiest Way</span> <br /> To Get Your Dream jobs </h1>
                        <p className='text-[#4f5e6f] text-[16px] md:text-[18px] mt-[1rem]'>Looking for your dream job? Look no further! Our platform provides the simplest path to securing the job you've always wanted. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, praesentium. Provident voluptatem nobis recusandae. With our user-friendly interface and extensive job listings, finding your dream job has never been easier..</p>
                        {/* search box */}
                        <div className='mt-[1.5rem]'>
                            <input className='w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-l-md bg-gray-200' title='search box' type="text" />
                            <button title='Press to Search' type='button' className='px-5 py-4 outline-none rounded-r-md bg-blue-500'>Search</button> </div>
                    </div>
                    {/* image */}
                </div>
            </div>
        </div>
    )
}

export default Hero