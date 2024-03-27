import React from 'react'
import Image from '../assets/image.png'
import icon1 from '../assets/icon2.png'
import icon2 from '../assets/icon3.png'
import icon3 from '../assets/icon4.png'
import icon4 from '../assets/icon5.png'
import icon5 from '../assets/icon6.png'
import icon6 from '../assets/icon1.png'

const Market = () => {
    return (
        <div className='relative min-h-screen flex flex-col md:flex-row w-full px-6 md:px-16 py-6 md:py-10 overflow-hidden gap-x-10' id='about'>
            <div className='flex flex-col md:w-[70%] h-full justify-center items-center my-auto gap-3'>
                <p className='font-bold text-4xl'>Marketing For Restaurants</p>
                <p className='font-bold text-3xl text-white bg-[#00A599] px-3 py-2'>Analysis,Stratergy and Result</p>
                <img src={Image} alt='family' className='py-6 w-full md:w-11/12' />
            </div>
            <div className='flex md:flex-1 h-full flex-col my-auto items-left md:items-start gap-6 justify-center text-left'>
                <div className='flex border-2 rounded-3xl px-12 py-2 border-[#87288A] text-xl text-[#87288A] bg-white gap-6 w-80'>
                    <img src={icon1} alt='icon1' className='w-12 object-contain inline-block' />
                    <p className='my-auto'>BRANDING</p>
                </div>
                <div className='flex border-2 rounded-3xl px-12 py-2 border-[#87288A] text-xl text-[#87288A] bg-white gap-6 w-80'>
                    <img src={icon2} alt='icon2' className='w-12 object-contain inline-block' />
                    <p className='my-auto'>FOOD PHOTOGRAPHY</p>
                </div>
                <div className='flex border-2 rounded-3xl px-12 py-2 border-[#87288A] text-xl text-[#87288A] bg-white gap-6 w-80'>
                    <img src={icon3} alt='icon3' className='w-12 object-contain inline-block' />
                    <p className='my-auto'>SOCIAL MEDIA MANAGEMENT</p>
                </div>
                <div className='flex border-2 rounded-3xl px-12 py-2 border-[#87288A] text-xl text-[#87288A] bg-white gap-6 w-80'>
                    <img src={icon4} alt='icon4' className='w-12 object-contain inline-block' />
                    <p className='my-auto'>CELEBRITY MANAGEMENT</p>
                </div>
                <div className='flex border-2 rounded-3xl px-12 py-2 border-[#87288A] text-xl text-[#87288A] bg-white gap-6 w-80'>
                    <img src={icon5} alt='icon5' className='w-12 object-contain inline-block' />
                    <p className='my-auto'>EVENTS</p>
                </div>
                <div className='flex border-2 rounded-3xl px-12 py-2 border-[#87288A] text-xl text-[#87288A] bg-white gap-6 w-80'>
                    <img src={icon6} alt='icon6' className='w-12 object-contain inline-block' />
                    <p className='my-auto'>ADVERTISEMENT</p>
                </div>
            </div>
            <div className='absolute w-[600px] h-[600px] bg-[#87288A] -right-72 rounded-full -z-10 top-36'></div>
        </div>
    )
}

export default Market