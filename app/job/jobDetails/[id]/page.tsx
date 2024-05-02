import JobData from '@/data'
import React from 'react'

const JobDeatils = ({ params }: { params: { id: string } }) => {
  const getJobDetail = JobData?.find((job) => job.id.toString() === params.id)
  console.log(getJobDetail)
  return (
    <div>

      <div>Jobdeatils</div>
      <div>
        {JSON.stringify(getJobDetail)}
      </div>
    </div>
  )
}

export default JobDeatils