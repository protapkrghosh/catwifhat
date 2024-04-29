import React from 'react';
import Container from '../Container/Container';
import img1 from '@/assets/whyChooseCatwifhat/Group 1171275185.png';
import img2 from '@/assets/whyChooseCatwifhat/Group 1171275186.png';
import img3 from '@/assets/whyChooseCatwifhat/Group 1171275187.png';

const WhyChooseCatwifhat = () => {
  return (
    <div className='lg:mt-[152px]'>
      <Container>

        <div>
          <p className='text-[#DF355F] lg:text-[90px] leading-[108px] tracking-[2.7px] textStroke -mb-[108px]'>WHY CHOOSE CATWIFHAT?</p>
          <p className='text-[#DF355F] lg:text-[90px] leading-[108px] tracking-[2.7px] lg:mb-[60px]'>WHY CHOOSE CATWIFHAT?</p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[40px]'>
          <img className='w-auto' src={img1} alt="" />
          <img className='w-auto' src={img2} alt="" />
          <img className='w-auto' src={img3} alt="" />
        </div>

      </Container>
    </div>
  );
};

export default WhyChooseCatwifhat;