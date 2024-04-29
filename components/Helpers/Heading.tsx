import React from 'react'

interface Props {
    mainHeading: string
    subHeading: string
}
const Heading = (props: Props) => {
    return (
        <div className='text-center p-3'>
            <h1>{props.mainHeading}</h1>
            <p>{props.subHeading}</p>

        </div>
    )
}

export default Heading