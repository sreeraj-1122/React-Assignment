import React from 'react';
import banner from '../../assets/banner.png';
import SubBanner from './SubBanner';

const Banner = () => {
  return (
    <section className='my-16'>
      <div className=' relative md:overflow-hidden md:mb-16 mb-10'>
        <img 
          src={banner} 
          alt="Banner" 
          className='w-full md:-mb-28 border-[8px] border-[#101828] rounded-2xl '
        />
      </div>
      <SubBanner/>
    </section>
  );
};

export default Banner;
