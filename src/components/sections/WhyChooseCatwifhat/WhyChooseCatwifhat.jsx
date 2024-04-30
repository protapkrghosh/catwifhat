import React from 'react';
import Container from '../Container/Container';
import img1 from '@/assets/whyChooseCatwifhat/Group 1171275185.png';
import img2 from '@/assets/whyChooseCatwifhat/Group 1171275186.png';
import img3 from '@/assets/whyChooseCatwifhat/Group 1171275187.png';

const WhyChooseCatwifhat = () => {
  return (
    <div className='mt-[45px] md:mt-[100px] lg:mt-[110px] xl:mt-[150px]' id='whitepaper'>
      <Container>

        <div>
          <p className='text-[#DF355F] text-center md:text-start text-[45px] md:text-[58px] xl:text-[77px] 2xl:text-[90px] md:leading-[108px] tracking-[2.7px] textStrokeSm md:textStroke -mb-[135px] md:-mb-[108px]'>WHY CHOOSE CATWIFHAT?</p>

          <p className='text-[#DF355F] text-center md:text-start text-[45px] md:text-[58px] xl:text-[77px] 2xl:text-[90px] md:leading-[108px] tracking-[2.7px] mb-10 md:mb-[60px]'>WHY CHOOSE CATWIFHAT?</p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[40px]'>
          <img className='w-auto' src={img1} alt="" />
          <img className='w-auto' src={img2} alt="" />
          <img className='w-auto' src={img3} alt="" />
        </div>

      </Container>
    </div>
  );
};

export default WhyChooseCatwifhat;