import React from 'react'
import { Heading, JobCategoryCard } from '../../paths'
const JobCategory = () => {
    return (
        <div className='pt-8 md:pt-20 pb-8 md:pb-12'>
            {/* Heading */}
            <Heading mainHeading="Popular job categories" subHeading="2020 jobs live - 293 added today" />

            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-3 items-center">
                <JobCategoryCard image='/images/icon1.png' category='Finance' openPosition='23' />
                <JobCategoryCard image='/images/icon2.png' category='Marketing' openPosition='13' />
                <JobCategoryCard image='/images/icon3.png' category='Sales' openPosition='53' />
                <JobCategoryCard image='/images/icon4.png' category='Development' openPosition='13' />
                <JobCategoryCard image='/images/icon5.png' category='HR' openPosition='10' />
                <JobCategoryCard image='/images/icon6.png' category='Teacher' openPosition='8' />
                <JobCategoryCard image='/images/icon7.png' category='Mechanic' openPosition='42' />
                <JobCategoryCard image='/images/icon8.png' category='Retailer' openPosition='25' />
                <JobCategoryCard image='/images/icon9.png' category='Business' openPosition='31' />
            </div>
        </div>
    )
}

export default JobCategory