import Banner from '@/components/sections/Banner/Banner';
import BannerText from '@/components/sections/BannerText/BannerText';
import OurPartner from '@/components/sections/OurPartner/OurPartner';
import Phase from '@/components/sections/Phase/Phase';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import TryAnotherCat from '@/components/sections/TryAnotherCat/TryAnotherCat';
import WhyChooseCatwifhat from '@/components/sections/WhyChooseCatwifhat/WhyChooseCatwifhat';
import React from 'react';

const Home = () => {
  return (
    <>
      <Banner />
      <BannerText />
      <WhyChooseCatwifhat />
      <Tokenomics />
      <Phase />
      <OurPartner />
      <TryAnotherCat />
    </>
  );
};

export default Home;
