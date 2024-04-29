import Container from '../Container/Container';
import phaseImage from '@/assets/phase/Group 1171275202.png';
import imageCard1 from '@/assets/phase/Group 1171275199 (1).png';
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
            <img className='lg:w-[550px]' src={imageCard1} alt="image" />
            <div className='absolute 2xl:top-[196px] 2xl:left-[98px]'>
              <p className='text-[#DF355F] text-[18px] leading-[27px] tracking-[0.72px] lg:mb-[10px]'>stage1</p>
              <div className='flex items-center'>
                <div className='bg-[#DF355F] w-[13px] h-[13px] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px] lg:mb-[15px]'>Launching CatWifHat Website & Community</p>
              </div>
              <div className='flex items-center'>
                <div className='bg-[#DF355F] w-[13px] h-[13px] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px] lg:mb-[15px]'>Launching CatWifHat Website & Community</p>
              </div>
              <div className='flex items-center'>
                <div className='bg-[#DF355F] w-[13px] h-[13px] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px] lg:mb-[15px]'>Launching CatWifHat Website & Community</p>
              </div>
              <div className='flex items-center'>
                <div className='bg-[#DF355F] w-[13px] h-[13px] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Launching CatWifHat Website & Community</p>
              </div>
            </div>
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