import { Job } from '@/data'
import Image from 'next/image'
import React from 'react'
import { BiMoney } from 'react-icons/bi'
import { FaMapLocation, FaRegBookmark, } from 'react-icons/fa6'

interface Props {
  job: Job
}
export const JobCard = ({ job }: Props) => {
  return (
    <div className="relative transition-transform duration-300 hover:scale-105 border-gray-600 rounded-lg  border-2 border-opacity-20 p-1 md:p-2">
      <div className="flex items-center space-x-6">
        {/* Image */}
        <div>
          <Image src={job.image} alt={job.title} width={50} height={50} className="object-cover" />
        </div>
        {/* content */}
        <div>
          <h1 className="text-base font-semibold mb-2">
            {job.title}
          </h1>
          <div className="flex items-center md:space-x-10 space-x-4">
            {/* location */}
            <div className="flex items-center space-x-2">
              <FaMapLocation className='w-4 h-4 text-pink-600' />
              <p className='text-sm text-black font-semibold opacity-60'>{job?.location}</p>
            </div>
            {/* salary */}
            <div className="flex items-center space-x-2">
              <BiMoney className='w-4 h-4 text-pink-600' />
              <p className='text-sm text-black font-semibold text-opacity-60'>{job?.salary}</p>
            </div>
            {/* tags */}

          </div>
          <div className='flex item-center space-x-2 sm:space-x-4 mt-[1rem]'>
            <div className='text-[10px] sm:text-sm text-opacity-80 px-2 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-600'>
              {job?.jobtype}
            </div>
            <div className='text-[10px] sm:text-sm text-opacity-80 px-2 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-600'>
              Private
            </div>
            <div className='text-[10px] sm:text-sm text-opacity-80 px-2 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-600'>
              Urgent
            </div>
          </div>
        </div>
      </div>

      <div className='absolute z-40 top-4 right-4'>
        <FaRegBookmark className='hover:text-orange-600'/>
      </div>
    </div>
  )
}
