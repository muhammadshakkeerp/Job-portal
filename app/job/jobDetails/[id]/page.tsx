import JobData, { Job } from '@/data'
import { authOptions } from '@/Auth'
import { ApplyButton, JobCard } from '@/paths'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const JobDeatils = async ({ params }: { params: { id: string } }) => {
  const getJobDetail = JobData?.find((job) => job.id.toString() === params.id)
  console.log(getJobDetail)
  const session = await getServerSession(authOptions)
  const relatedJobs = JobData?.slice(0, 4)



  return (
    <div className='mt-20 mb-12'>
      <div className='block sm:flex items-center justify-between w-[80%] mx-auto'>
        <div className='flex-[0.7]'>
          {getJobDetail && <JobCard job={getJobDetail} />}
        </div>
        {session && <ApplyButton />}
        {!session && <Link href={'/signup'}>
          <button type='button' className='px-8 py-3 bg-emerald-600 rounded-lg text-white'>Signup</button>
        </Link>}
      </div>
      <div className='mt-16 w-[80%] mx-auto'>
        <h1 className='text-xl font-semibold'>Job Description</h1>
        <p className='mt-4 text-black text-opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deleniti blanditiis aliquid voluptatem, saepe autem omnis, aperiam consequatur quos voluptas quisquam, corporis facere. Tempore maxime, laboriosam corporis dolorum animi nihil!</p>
        <div className='mt-10 '>
          <h1 className='text-xl font-semibold'>Key Resposibilities</h1>
          <p className='mt-4 text-black text-opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deleniti blanditiis aliquid voluptatem, saepe autem omnis, aperiam consequatur quos voluptas quisquam, corporis facere. Tempore maxime, laboriosam corporis dolorum animi nihil!</p>
        </div>
        <div className='mt-10 '>
          <h1 className='text-xl font-semibold'>Key Resposibilities</h1>
          <ul className='mt-4'>
            <li className='text-black text-opacity-70'>React JS</li>
            <li className='text-black text-opacity-70'>HTML5</li>
            <li className='text-black text-opacity-70'>CSS3</li>
            <li className='text-black text-opacity-70'>Javascript</li>
            <li className='text-black text-opacity-70'>Tailwindcss</li>
          </ul>
        </div>

        <div className='mt-10'>
          <h1 className='text-xl font-semibold'>Related Jobs</h1>
          {relatedJobs?.map((job) => <Link key={job.id} href={`/job/jobDetails/${job.id}`} className='space-y-6'>
            <JobCard job={job} />
          </Link>

          )}
        </div>
      </div>

    </div>
  )
}

export default JobDeatils