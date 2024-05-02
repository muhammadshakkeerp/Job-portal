import JobData, { Job } from '@/data'
import React from 'react'

const JobDeatils = async ({ params }: { params: { id: string } }) => {
  const getJobDetail = JobData?.find((job) => job.id.toString() === params.id)
  console.log(getJobDetail)
  return (
    <div>

    </div>
  )
}

export default JobDeatils