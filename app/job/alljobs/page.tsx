import React from 'react'
import JobData from '@/data'
import Link from 'next/link'
import { JobCard } from '@/paths'

const AllJobs = () => {
  return (
    <div className='mt-12 w-[80%] mx-auto mb-12'>
      <div className='mb-12'>
        <h1 className='semi-bold'>Show Result ({JobData.length})</h1>
      </div>
      <div className="space-y-10">
        {JobData?.map((job) => <Link key={job.id} href={`/job/jobDetails/${job.id}`}>
          <JobCard job={job} />
        </Link>)}
      </div>
    </div>
  )
}

export default AllJobs