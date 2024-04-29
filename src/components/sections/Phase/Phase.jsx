import Container from '../Container/Container';
import phaseImage from '@/assets/phase/Group 1171275202.png';
import imageCard1 from '@/assets/phase/Group 1171275199 (1).png';
import imageCard2 from '@/assets/phase/Group 1171275200.png';
import imageCard3 from '@/assets/phase/Group 1171275201.png';

const Phase = () => {
  return (
    <div className='lg:mt-[150px]'>
      <Container>
        <div>
          <p className='text-[#DF355F] text-center text-[90px] leading-[108px] tracking-[2.7px] textStroke -mb-[108px]'>phase</p>
          <p className='text-[#DF355F] text-center text-[90px] leading-[108px] tracking-[2.7px]'>phase</p>
        </div>

        <div className='lg:mt-[290px]'>
          <img className='lg:w-auto mx-auto' src={phaseImage} alt="image" />

          {/*-------------------- first cart -----------------------*/}
          <div className=''>
            <img className='lg:w-auto 2xl:mt-[-875px] xl:mt-[-875px] lg:mt-[-875px] 2xl:ml-[700px] xl:ml-[622px] lg:ml-[480px]' src={imageCard1} alt="image" />

            {/* title section  */}
            <div className='2xl:mt-[-205px] xl:mt-[-205px] lg:mt-[-205px] 2xl:ml-[774px] xl:ml-[697px] lg:ml-[540px]'>
              <p className='text-[#DF355F] text-[18px] leading-[27px] tracking-[0.72px] lg:mb-[10px]'>stage1</p>
              <div className='flex items-center gap-[10px] lg:mb-[15px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Launching CatWifHat Website & Community</p>
              </div>
              <div className='flex items-center gap-[10px] lg:mb-[15px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Presale On Pinksale</p>
              </div>
              <div className='flex items-center gap-[10px] lg:mb-[15px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Launch On Raydium...</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Launch Marketing</p>
              </div>
            </div>

          </div>

          {/* --------------------second cart------------------- */}
          <div className=''>
            <img className='lg:w-auto 2xl:mt-[-35px] xl:mt-[-35px] lg:mt-[-35px] 2xl:ml-[135px] xl:ml-[65px] lg:ml-[-50px]' src={imageCard2} alt="image" />

            {/* title section  */}
            <div className='2xl:mt-[-170px] xl:mt-[-170px] lg:mt-[-170px] 2xl:ml-[174px] xl:ml-[105px] lg:ml-[-25px]'>
              <p className='text-[#DF355F] text-[18px] leading-[27px] tracking-[0.72px] lg:mb-[10px]'>stage2</p>
              <div className='flex items-center gap-[10px] lg:mb-[15px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Listing CMC & CGK</p>
              </div>
              <div className='flex items-center gap-[10px] lg:mb-[15px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>#CatWifHat Trending Global</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Listing of CE...</p>
              </div>
            </div>

          </div>

          {/* ------------------------third cart---------------------- */}
          <div className=''>
            <img className='lg:w-auto 2xl:mt-[-45px] xl:mt-[-45px] lg:mt-[-45px] 2xl:ml-[700px] xl:ml-[622px] lg:ml-[480px]' src={imageCard3} alt="image" />

            {/* title section  */}
            <div className='2xl:mt-[-172px] xl:mt-[-172px] lg:mt-[-172px] 2xl:ml-[774px] xl:ml-[697px] lg:ml-[540px]'>
              <p className='text-[#DF355F] text-[18px] leading-[27px] tracking-[0.72px] lg:mb-[10px]'>stage3</p>
              <div className='flex items-center gap-[10px] lg:mb-[15px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Listing CMC & CGK</p>
              </div>
              <div className='flex items-center gap-[10px] lg:mb-[15px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>#CatWifHat Trending Global</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <div className='w-[13px] h-[13px] bg-[#DF355F] rounded-full'></div>
                <p className='text-[#3F3F3F] text-[16px] leading-[24px] tracking-[0.64px]'>Listing of CE...</p>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default Phase;