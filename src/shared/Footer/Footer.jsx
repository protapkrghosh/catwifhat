import React, { useEffect, useState } from 'react';
import Container from '@/components/sections/Container/Container';
import footerLogo from '@/assets/footer/catwif-logo 1.png';
import lineImg from '@/assets/footer/Line 46.png';
import { Input } from "@/components/ui/input"
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaTelegramPlane, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");


  // Determine which section is currently in view based on scroll position
  useEffect(() => {
    const changeActiveLink = () => {
      const scrollPosition = window.scrollY;

      const homeSection = document.getElementById("home");
      const aboutTokenSection = document.getElementById("aboutToken");
      const tokenomicsSection = document.getElementById("tokenomics");
      const buySection = document.getElementById("buy");
      const roadmapSection = document.getElementById("roadmap");

      if (
        homeSection.offsetTop <= scrollPosition &&
        homeSection.offsetTop + homeSection.offsetHeight > scrollPosition
      ) {
        setActiveLink("home");
      } else if (
        aboutTokenSection.offsetTop <= scrollPosition &&
        aboutTokenSection.offsetTop + aboutTokenSection.offsetHeight >
        scrollPosition
      ) {
        setActiveLink("aboutToken");
      } else if (
        tokenomicsSection.offsetTop <= scrollPosition &&
        tokenomicsSection.offsetTop + tokenomicsSection.offsetHeight >
        scrollPosition
      ) {
        setActiveLink("tokenomics");
      } else if (
        buySection.offsetTop <= scrollPosition &&
        buySection.offsetTop + buySection.offsetHeight > scrollPosition
      ) {
        setActiveLink("buy");
      } else if (
        roadmapSection.offsetTop <= scrollPosition &&
        roadmapSection.offsetTop + roadmapSection.offsetHeight > scrollPosition
      ) {
        setActiveLink("roadmap");
      }
    };

    window.addEventListener("scroll", changeActiveLink);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeActiveLink);
    };
  }, []);

  return (
    <div className='lg:mt-[100px] bg-[#FA7C88]'>
      <Container>
        <div className='pt-[70px] lg:pt-[100px] flex justify-center items-center lg:gap-[19px]'>
          <img className='w-auto' src={footerLogo} alt="image" />
          <p className='text-[#161307] text-[45.654px] leading-[68.48px]'>cat</p>
        </div>

        <p className='text-[#000] text-center text-[18px] leading-[27px] tracking-[0.72px] py-[20px]'>contact@catwiftoken.org</p>

        <div className='md:w-[48%] lg:w-[37%] xl:w-[34%] 2xl:w-[30%] mx-auto'>
          <div className='md:px-2'>
            <p className='text-[#373636] text-[16px] leading-[24px] lg:tracking-[0.64px] mb-[8px]'>Subscribe our newsletter</p>

            <div className='relative'>
              <Input placeholder='_ _ _' className="pl-5 text-white placeholder:text-white placeholder:absolute placeholder:top-4" />
              <MdOutlineArrowOutward className='text-[20px] text-white absolute top-3 hover:top-2 right-4 cursor-pointer duration-300' />
              {/* <input type="submit" value="" className='bg-white h-7 w-7 rounded-full' /> */}
            </div>
          </div>

          {/* Social media action button */}
          <div className='flex justify-center items-center space-x-14 mt-7 mb-3'>
            <a href="" target='_blank' className='text-white'>
              <div className='bg-[#DF355F] hover:bg-[#b8425f] p-2 xl:p-4 rounded-[8px] duration-300'>
                <FaTelegramPlane className='text-[25px]' />
              </div>
            </a>

            <a href="" target='_blank' className='text-white'>
              <div className='bg-[#DF355F] hover:bg-[#b8425f] p-2 xl:p-4 rounded-[8px] duration-300'>
                <FaXTwitter className='text-[25px]' />
              </div>
            </a>

            <a href="" target='_blank' className='text-white'>
              <div className='bg-[#DF355F] hover:bg-[#b8425f] p-2 xl:p-4 rounded-[8px] duration-300'>
                <FaInstagram className='text-[25px]' />
              </div>
            </a>

            <a href="" target='_blank' className='text-white'>
              <div className='bg-[#DF355F] hover:bg-[#b8425f] p-2 xl:p-4 rounded-[8px] duration-300'>
                <FaRedditAlien className='text-[25px]' />
              </div>
            </a>
          </div>
        </div>


        {/* Footer menu */}
        <div className='flex justify-center'>
          <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] px-4 ${open ? 'top-[75px] opacity-100 bg-[#c4a19d] z-10' : 'top-[-490px]'}`}>

            <li>
              <Link to="home" smooth={true} offset={-30} duration={600} className={`2xl:text-[18px] font-inter uppercase cursor-pointer ${activeLink === "home" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("home")}>Home</Link>
            </li>

            <li>
              <Link to="tokenomics" smooth={true} offset={0} duration={600} className={`2xl:text-[18px] font-inter duration-300 uppercase cursor-pointer ${activeLink === "tokenomics" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("tokenomics")}>Tokenomics</Link>
            </li>

            <li>
              <Link to="roadmap" smooth={true} offset={10} duration={600} className={`2xl:text-[18px] font-inter duration-300 uppercase cursor-pointer  ${activeLink === "roadmap" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("roadmap")}>Roadmap</Link>
            </li>

            <li>
              <Link to="partners" smooth={true} offset={10} duration={600} className={`2xl:text-[18px] font-inter duration-300 uppercase cursor-pointer  ${activeLink === "partners" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("partners")}>Partners</Link>
            </li>

            <li>
              <Link to="whitepaper" smooth={true} offset={10} duration={600} className={`2xl:text-[18px] font-inter duration-300 uppercase cursor-pointer  ${activeLink === "whitepaper" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("whitepaper")}>Whitepaper</Link>
            </li>

          </ul>
        </div>
      </Container>

      <div className='mt-7'>
        <img src={lineImg} alt="Image" />
        <p className='text-[#373636] text-center py-7'>•CatwifHat {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
