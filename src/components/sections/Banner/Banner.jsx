import bannerBg from "@/assets/Banner/Group8.png";
import catwifhatText from "@/assets/Banner/Group81.png";
import welcomeIcon from "@/assets/Banner/image419.png";
import Container from '../Container/Container';
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="mb-[116px]">
      <img src={bannerBg} alt="Image" className=""/>
      <div className="-mt-[600px] 2xl:-mt-[810px]">
        <Container>
          <img src={catwifhatText} alt="Image" className="mx-auto"/>

          <img src={welcomeIcon} alt="Image" className="w-[250px] mt-20" />
          
          <div className="flex justify-end -mt-10 -mr-16">
            <div className="xl:w-[33%] 2xl:w-[29%]">
              <p className="text-[#272727] text-[18px]">CatwifHat is simply a cat wif a hat, Let's add hats to the cat. CatwifHat Is DogwifHat's Biggest Competitor! !</p>

              <Button className="bg-[#DF355F] text-[18px] navButton px-10 mt-12">Join Now</Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
