import React from 'react'

const Footer = () => {
    return (
        <div className='pt-20 pb-12 bg-black'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-8 border-b-2 border-white border-opacity-10'>
                {/* 1st part of footer */}
                <div>
                    <h1 className='text-2xl text-white mb-4 font-bold uppercase'>Jobify</h1>
                    <p className='text-sm text-white text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit tempore obcaecati excepturi, voluptatem, odio deserunt.</p>
                    {/* social icons */}
                </div>
            </div>
        </div>
    )
}

export default Footer