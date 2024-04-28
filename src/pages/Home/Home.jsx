import Banner from '@/components/sections/Banner/Banner';
import BannerText from '@/components/sections/BannerText/BannerText';
import OurPartner from '@/components/sections/OurPartner/OurPartner';
import Phase from '@/components/sections/Phase/Phase';
import TryAnotherCat from '@/components/sections/TryAnotherCat/TryAnotherCat';
import WhyChooseCatwifhat from '@/components/sections/WhyChooseCatwifhat/WhyChooseCatwifhat';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerText />
      <WhyChooseCatwifhat />
      <Phase />
      <OurPartner />
      <TryAnotherCat />
    </div>
  );
};

export default Home;
