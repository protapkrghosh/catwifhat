import { Progress } from "@/components/ui/progress"
import Container from '../Container/Container';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { useState } from 'react';
import toast from 'react-hot-toast';

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
    <div className='lg:mt-[150px]'>
      <Container>
        <div>
          <p className='text-[#DF355F] text-center text-[90px] leading-[108px] tracking-[2.7px] mb-14'>Tokenomics</p>

          <div className='text-[#DF355F]'>
            <p className='text-[28px] text-center'>Total Supply: 1.000.000.000</p>

            {/* Progress bar */}
            <div className="max-w-[550px] mx-auto mt-8">
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
      </Container>
    </div>
  );
};

export default Tokenomics;
