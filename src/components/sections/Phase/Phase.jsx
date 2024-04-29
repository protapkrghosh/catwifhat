import React from 'react';
import Container from '../Container/Container';
import phaseImage from '@/assets/phase/Group 1171275202.png';
import imageCard1 from '@/assets/phase/Group 1171275199.png';
import imageCard2 from '@/assets/phase/Group 1171275200.png';
import imageCard3 from '@/assets/phase/Group 1171275201.png';

const Phase = () => {
  return (
    <div className='lg:mt-[150px]'>
      <Container>
        <p className='text-[#DF355F] text-center text-[90px] leading-[108px] tracking-[2.7px]'>phase</p>

        <div className='lg:mt-[290px] relative'>
          <img className='lg:w-auto mx-auto' src={phaseImage} alt="image" />

          {/* first cart */}
          <div className='absolute 2xl:top-[-226px] 2xl:left-[698px]'>
            <img className='lg:w-auto' src={imageCard1} alt="image" />
          </div>

          {/* second cart */}
          <div className='absolute 2xl:top-[76px] 2xl:left-[140px]'>
            <img className='lg:w-auto' src={imageCard2} alt="image" />
          </div>

          {/* third cart */}
          <div className='absolute 2xl:top-[356px] 2xl:left-[698px]'>
            <img className='lg:w-auto' src={imageCard3} alt="image" />
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Phase;