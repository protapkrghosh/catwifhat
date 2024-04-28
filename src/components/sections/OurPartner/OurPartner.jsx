import React from 'react';
import Container from '../Container/Container';
import img1 from '@/assets/ourPartner/Group 8776.png';
import img2 from '@/assets/ourPartner/Group 1171275206.png';
import img3 from '@/assets/ourPartner/Group 8776 (1).png';
import img4 from '@/assets/ourPartner/Group 1171275207.png';
import img5 from '@/assets/ourPartner/Group 1171275208.png';
import img6 from '@/assets/ourPartner/Group 1171275209.png';

const OurPartner = () => {
  return (
    <div className='lg:mt-[150px]'>
      <Container>
        <p className='text-[#DF355F] text-center lg:text-[90px] lg:leading-[108px] lg:tracking-[2.7px] lg:mb-[60px]'>our partner</p>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[60px] lg:gap-[50px] gap-[40px]'>
          <img className='w-auto' src={img1} alt="" />
          <img className='w-auto' src={img2} alt="" />
          <img className='w-auto' src={img3} alt="" />
          <img className='w-auto' src={img4} alt="" />
          <img className='w-auto' src={img5} alt="" />
          <img className='w-auto' src={img6} alt="" />
        </div>

      </Container>
    </div>
  );
};

export default OurPartner;