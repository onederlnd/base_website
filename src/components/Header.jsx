import React from 'react';

const Header = () => {
    <div id='header' className='flex items-center justify-between'>
        <div className='text-[24px] ml-[80px] font-bold underline'>
            Let's Create
        </div>
        <div>
            <ul className='flex cursor-pointer m-6'>
                <a href="#aboutUS">
                    <li className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline hover:delay-75'>
                        <a href="#header">About Us</a>
                    </li>
                </a>
                <li className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline hover:delay-75'>
                    <a href="#Services">Services</a>
                </li>
                <li className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline hover:delay-75'>
                    <a href="#header">About Us</a>
                </li>
                <li className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline hover:delay-75'>
                    <a href="#header">About Us</a>
                </li>
            </ul>
        </div>
    </div>
}