import React from 'react'
import { Hero, JobCategory } from '../../paths'
import FeatureJobs from './FeatureJobs'

const Home = () => {
    return (
        <div>
            <Hero />
            <JobCategory />
            <FeatureJobs />
        </div>
    )
}

export default Home