import { authOptions } from '@/Auth'
import JobData from '@/data'
import { ApplyButton, JobCard } from '@/paths'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const JobDeatils = async ({ params }: { params: { id: string } }) => {
  const getJobDetail = JobData?.find((job) => job.id.toString() === params.id)

  const session = await getServerSession(authOptions)

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
    </div>
  )
}

export default JobDeatils