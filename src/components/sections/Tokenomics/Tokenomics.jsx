import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { Progress } from "@/components/ui/progress"
import catLeft from "@/assets/tokenomics/image1.png"
import catRight from "@/assets/tokenomics/GJ.png"

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('CZNCrkTVEP8RzfpvfnYsaE1EimEJE11HBhSFixTev5ZA').then(() => {
        toast.success('Copied!');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className='mt-[45px] md:mt-[100px] lg:mt-[122px] xl:mt-[150px]' id='tokenomics'>
      <div className='md:-mb-[225px] lg:-mb-[350px] xl:-mb-[470px] 2xl:-mb-[610px]'>
        <div className='relative'>
          <p className='text-[#DF355F] text-center text-[45px] md:text-[65px] xl:text-[77px] 2xl:text-[90px] leading-[108px] tracking-[2.7px] -mb-[108px] textStrokeSm md:textStroke'>Tokenomics</p>

          <p className='text-[#DF355F] text-center text-[45px] md:text-[65px] xl:text-[77px] 2xl:text-[90px] leading-[108px] tracking-[2.7px] mb-5 md:mb-14 '>Tokenomics</p>
        </div>

        <div className='text-[#DF355F] bg-gradient-to-r from-[#C5959A] to-[#DEACB2] pt-8 md:pt-16 pb-12 md:pb-20'>
          <div>
            <p className='text-[24px] md:text-[28px] text-center textStrokeSm -mb-[36px] md:-mb-[42px]' data-aos="fade-up"
              data-aos-duration="2000">Total Supply: 1.000.000.000</p>
            <p className='text-[24px] md:text-[28px] text-center' data-aos="fade-up"
              data-aos-duration="2000">Total Supply: 1.000.000.000</p>
          </div>

          {/* Progress bar */}
          <div className="max-w-[450px] xl:max-w-[550px] mx-auto mt-8 px-5">
            <p className='text-[18px] mb-2'>burn 8%</p>
            <Progress value={12} />

            <p className='text-[18px] mb-2 mt-6'>Liquidity 26.5%</p>
            <Progress value={26.5} />

            <p className='text-[18px] mb-2 mt-6'>Liquidity MEXC 3.5%</p>
            <Progress value={8} />

            <p className='text-[18px] mb-2 mt-6'>MM CEX 2%</p>
            <Progress value={5} />

            <p className='text-[18px] mb-2 mt-6'>Presale 60%</p>
            <Progress value={57} />


            {/* Copied text */}
            <div className='flex justify-center md:justify-start mt-10'>
              <div className="flex justify-center items-center text-[14px] lg:text-[16px] xl:text-[19px] bg-[#DF355F] border py-3 xl:py-[15px] rounded-full w-full px-5 xl:px-6">
                <p className="text-[#D0CFCF] mr-2 md:mr-5">CZNCrkTVEP8RzfpvfnYsaE1EimEJE11HBhSFixTev5ZA</p>
                <button onClick={() => { setCopied(!copied); copyLink() }}>
                  {
                    copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] cursor-pointer text-[#fff]" /> :
                      <IoCopy className="text-[15px] md:text-[20px] cursor-pointer text-[#fff]" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className='hidden md:block'>
        <div className='flex justify-between'>
          <img src={catLeft} alt="Image" className='w-[130px] lg:w-[180px] xl:w-[270px] 2xl:w-auto' />
          <img src={catRight} alt="Image" className='w-[180px] lg:w-[280px] xl:w-[370px] 2xl:w-auto' />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
