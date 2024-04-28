import BannerText from '@/components/sections/BannerText/BannerText';
import OurPartner from '@/components/sections/OurPartner/OurPartner';
import TryAnotherCat from '@/components/sections/TryAnotherCat/TryAnotherCat';
import WhyChooseCatwifhat from '@/components/sections/WhyChooseCatwifhat/WhyChooseCatwifhat';
import React from 'react';

const Home = () => {
  return (
    <div>
      <BannerText />
      <WhyChooseCatwifhat />
      <OurPartner />
      <TryAnotherCat />
    </div>
  );
};

export default Home;
