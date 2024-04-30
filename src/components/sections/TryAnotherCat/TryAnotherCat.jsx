import React from 'react';
import Container from '../Container/Container';
import img1 from '@/assets/tryAnotherCat/Group 1171275212.png';
import img2 from '@/assets/tryAnotherCat/Group 1171275213.png';
import img3 from '@/assets/tryAnotherCat/Group 1171275214.png';
import img4 from '@/assets/tryAnotherCat/Group 1171275215.png';

const TryAnotherCat = () => {
  return (
    <div className='mt-[60px] md:mt-[100px] lg:mt-[130px] 2xl:mt-[150px] mb-20 lg:mb-0'>
      <Container>

        <div>
          <p className='text-[#DF355F] text-center text-[38px] md:text-[50px] lg:text-[49px] xl:text-[67px] 2xl:text-[75px] lg:leading-[96px] tracking-[2.4px] textStrokeSm md:textStroke -mb-[114px] md:-mb-[150px] lg:-mb-[96px] 2xl:-mb-[96px]'>TRY ANOTHER CAT WITH ANOTHER HAT</p>

          <p className='text-[#DF355F] text-center text-[38px] md:text-[50px] lg:text-[49px] xl:text-[67px] 2xl:text-[75px] lg:leading-[96px] tracking-[2.4px] mb-14 lg:mb-[30px] xl:mb-[60px]'>TRY ANOTHER CAT WITH ANOTHER HAT</p>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]'>
          <img className='w-auto mx-auto' src={img1} alt="Image" />
          <img className='w-auto mx-auto' src={img2} alt="Image" />
          <img className='w-auto mx-auto' src={img3} alt="Image" />
          <img className='w-auto mx-auto' src={img4} alt="Image" />
        </div>

      </Container>
    </div>
  );
};

export default TryAnotherCat;