import React from 'react'
import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

interface Props {
    bgColor: string,
    Icon: IconType
}
const Footer = () => {
    const aboutItems = ['Job', 'Privacy', 'Police', 'Application', 'Candidates'];
    const quickLinkItems = ['All Job', 'Job Details', 'How To Apply', 'Resume'];
    return (
        <div className='pt-20 pb-12 bg-black'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-8 border-b-2 border-white border-opacity-10'>
                {/* 1st part of footer */}
                <div>
                    <h1 className='text-2xl text-white mb-4 font-bold uppercase'>Jobify</h1>
                    <p className='text-sm text-white text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit tempore obcaecati excepturi, voluptatem, odio deserunt.</p>
                    {/* social icons */}
                    <div className='mt-6 flex items-center space-x-3'>
                        <SocialIcon bgColor={'blue'} Icon={FaFacebook} />
                        <SocialIcon bgColor={'sky'} Icon={FaTwitter} />
                        <SocialIcon bgColor={'red'} Icon={FaYoutube} />
                        <SocialIcon bgColor={'pink'} Icon={FaInstagram} />
                    </div>
                </div>
                {/* 2nd part of footer */}
                {/* <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-6'>About Us</h1>
                    {aboutItems?.map((item, index) => <p key={index} className='text-base w-fit text-white text-opacity-50 hover:text-yellow-300 cursor-pointer '>{item}</p>)}

                </div> */}
                <FooterSection data={aboutItems} />
                {/* 3rd part of footer */}
                {/* <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-6'>Quick Links</h1>
                    {quickLinkItems?.map((item, index) => <p key={index} className='text-base w-fit text-white text-opacity-50 hover:text-yellow-300 cursor-pointer '>{item}</p>)}

                </div> */}

                {/* 4th part of footer */}
                <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-6'>Getin Touch</h1>
                    <p className='text-base w-fit text-white text-opacity-50 hover:text-yellow-300 cursor-pointer '>+01234567</p>
                    <p className='text-base w-fit text-white text-opacity-50 hover:text-yellow-300 cursor-pointer '>example@gmail.com</p>
                    <p className='text-base w-fit text-white text-opacity-50 hover:text-yellow-300 cursor-pointer '>India</p>

                </div>
            </div>
        </div>
    )
}

const SocialIcon = ({ bgColor, Icon }: Props) => (
    <div className={`w-10 h-10 bg-${bgColor}-600 rounded-full flex items-center justify-center flex-col`}>
        <Icon className='text-white' />
    </div>
);
interface Props {
    data: String[]
    title:String
}
const FooterSection = ({ data }: Props) => (
    <div>
        <h1 className='text-[22px] w-fit text-white font-semibold mb-6'>Quick Links</h1>
        {data?.map((item, index) => <p key={index} className='text-base w-fit text-white text-opacity-50 hover:text-yellow-300 cursor-pointer '>{item}</p>)}
    </div>
)
export default Footer