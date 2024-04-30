import Image from 'next/image'
import React from 'react'

interface Props {
    image: string,
    category: String,
    openPosition: String,
}
export const JobCategoryCard = ({ category, image, openPosition }: Props) => {
    return (
        <div className='flex space-x-4 p-4 border-2 cursor-pointer hover:scale-105 hover:shadow-sm transition-transform border-gray-600 rounded-lg border-opacity-20'>
            {/* image */}
            <Image src={image} alt={`${category} job category image`} width={50} height={50} className='object-contain' />
            <div>
                {/* content */}
                <h3 className='text-base font-semibold mb-[0.4rem]'>{category}</h3>
                <p className='text-sm text-black font-semibold text-opacity-50'>({openPosition}) open positions</p>
            </div>
        </div>
    )
}
