import React from 'react'
import { Heading, JobCard } from '../../paths'
import JobData from '@/data'
import Link from 'next/link'
const FeatureJobs = () => {
    return (
        <div className='pt-8 md:pt-20 pb-8 md:pb-12'>
            <Heading mainHeading={'Feature jobs'} subHeading={'Know your worth and find the job that quality your life'} />

            <div className='mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {JobData?.map((job) => {
                    return <Link key={job?.id} href={`job/job_details/${job?.id}`}>
                        <JobCard job={job} />
                    </Link>
                })}
            </div>
        </div>
    )
}

export default FeatureJobs