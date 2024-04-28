import bannerBg from "@/assets/Banner/Group8.png";
import catwifhatText from "@/assets/Banner/Group81.png";
import welcomeIcon from "@/assets/Banner/image419.png";
import Container from '../Container/Container';
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="mb-[50px] md:mb-[70px] xl:mb-[80px] 2xl:mb-[116px]">
      <img src={bannerBg} alt="Image" className="md:h-[500px] lg:h-[550px] xl:h-auto 2xl:h-screen w-full hidden md:block" />
      
      <div className="mt-24 md:-mt-[430px] lg:-mt-[465px] xl:-mt-[600px] 2xl:-mt-[810px]">
        <Container>
          <img src={catwifhatText} alt="Image" className="mx-auto w-[500px] xl:w-[760px] 2xl:w-auto"/>

          <img src={welcomeIcon} alt="Image" className="w-[130px] lg:w-[160px] xl:w-[160px] 2xl:w-[250px] mt-10 2xl:mt-20 hidden md:block" />
          
          <div className="md:flex justify-end md:-mt-20 xl:-mt-10 md:-mr-10 lg:-mr-16 xl:-mr-16 2xl:-mr-16">
            <div className="md:w-[35%] xl:w-[33%] 2xl:w-[29%]">
              <p className="text-[#272727] text-[13px] lg:text-[15px] xl:text-[18px] text-center md:text-start mt-4 md:mt-0">CatwifHat is simply a cat wif a hat, Let's add hats to the cat. CatwifHat Is DogwifHat's Biggest Competitor! !</p>

              <div className="flex justify-center md:justify-normal">
                <Button className="bg-[#DF355F] hover:bg-[#DF355F] text-[18px] navButton px-10 mt-5 md:mt-12">Join Now</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
