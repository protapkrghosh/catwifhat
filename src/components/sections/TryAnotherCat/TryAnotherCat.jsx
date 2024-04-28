import React from 'react';
import Container from '../Container/Container';
import img1 from '@/assets/tryAnotherCat/Group 1171275212.png';
import img2 from '@/assets/tryAnotherCat/Group 1171275213.png';
import img3 from '@/assets/tryAnotherCat/Group 1171275214.png';
import img4 from '@/assets/tryAnotherCat/Group 1171275215.png';

const TryAnotherCat = () => {
  return (
    <div className='lg:mt-[150px]'>
      <Container>
        <p className='text-[#DF355F] text-center lg:text-[70px] leading-[96px] tracking-[2.4px] lg:mb-[60px]'>TRY ANOTHER CAT WITH ANOTHER HAT</p>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[30px]'>
          <img className='w-auto' src={img1} alt="" />
          <img className='w-auto' src={img2} alt="" />
          <img className='w-auto' src={img3} alt="" />
          <img className='w-auto' src={img4} alt="" />
        </div>

      </Container>
    </div>
  );
};

export default TryAnotherCat;