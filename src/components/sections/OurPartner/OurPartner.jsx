import Container from '../Container/Container';
import img1 from '@/assets/ourPartner/Group 8776.png';
import img2 from '@/assets/ourPartner/Group 1171275206.png';
import img3 from '@/assets/ourPartner/Group 8776 (1).png';
import img4 from '@/assets/ourPartner/Group 1171275207.png';
import img5 from '@/assets/ourPartner/Group 1171275208.png';
import img6 from '@/assets/ourPartner/Group 1171275209.png';
import img7 from '@/assets/ourPartner/image21.png';

const OurPartner = () => {
  return (
    <div className='mt-[85px] md:mt-[100px] lg:mt-[60px] xl:mt-[30px] 2xl:mt-[-30px]' id='partners'>

      <div className='flex justify-end lg:-mb-[260px] xl:-mb-[300px] 2xl:-mb-[355px] 2xl:mr-24'>
        <img src={img7} alt="Image" className='w-[280px] xl:w-[350px] 2xl:w-[450px] hidden lg:block' />
      </div>

      <Container>
        <div>
          <p className='text-[#DF355F] text-center text-[45px] md:text-[65px] xl:text-[77px] 2xl:text-[90px] lg:leading-[108px] lg:tracking-[2.7px] textStrokeSm md:textStroke -mb-[67px] md:-mb-[97px] lg:-mb-[108px]'>our partner</p>

          <p className='text-[#DF355F] text-center text-[45px] md:text-[65px] xl:text-[77px] 2xl:text-[90px] lg:leading-[108px] lg:tracking-[2.7px] mb-[30px] xl:mb-[60px]'>our partner</p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[60px] lg:gap-[50px] gap-[40px]'>
          <img className='w-auto' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500" src={img1} alt="Image" />
          <img className='w-auto' src={img2} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2600" alt="Image" />
          <img className='w-auto' src={img3} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2700" alt="Image" />
          <img className='w-auto' src={img4} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2800" alt="Image" />
          <img className='w-auto' src={img5} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2900" alt="Image" />
          <img className='w-auto' src={img6} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" alt="Image" />
        </div>

      </Container>
    </div>
  );
};

export default OurPartner;