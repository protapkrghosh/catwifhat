import React from 'react';
import Container from '@/components/sections/Container/Container';
import footerLogo from '@/assets/catwif-logo 1.png';

const Footer = () => {
  return (
    <div className='lg:mt-[100px] bg-[#FA7C88]'>
      <Container>
        <div className='lg:pt-[100px] flex justify-center items-center lg:gap-[19px]'>
          <img className='w-auto' src={footerLogo} alt="image" />
          <p className='text-[#161307] text-[45.654px] leading-[68.48px]'>cat</p>
        </div>

        <p className='text-[#000] text-center text-[18px] leading-[27px] tracking-[0.72px] lg:py-[20px]'>contact@catwiftoken.org</p>



        <p className='text-[#373636] text-center text-[16px] leading-[24px] lg:tracking-[0.64px]'>Subscribe our newsletter</p>







      </Container>
    </div>
  );
};

export default Footer;
