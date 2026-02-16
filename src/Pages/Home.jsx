import CategoryBar from "../Components/CategoryBar"
import CopyRightFooter from "../Components/CopyRightFooter"
import FactoryCard from "../Components/FactoryCard"
import FooterContact from "../Components/FooterContact"
import FooterSearch from "../Components/FooterSearch"
import LatestCards from "../Components/LatestCards"
import LatestPostSec from "../Components/LatestPostSec"
import Navbar from "../Components/Navbar"
import NavContact from "../Components/NavContact"
import ShirtCard from "../Components/ShirtCard"
import TestimonialSlider from "../Components/SliderImages"
import TeamImage from "../Components/TeamImage"

function Home() {
  return (
    <div>
        <NavContact />
        <Navbar />
        <CategoryBar />
        <TeamImage />
        <h3 className="text-center text-2xl font-medium xl:mt-0 mt-5">XTEAMWEAR ADVANTAGES</h3>
        <FactoryCard />
        <div className="bg-gray-100">
          <h3 className="ml-[40px] text-2xl font-medium pt-10 pb-8">LATEST HOT PRODUCTS</h3>
          <div className="w-[93.8%] mx-auto">
            <ShirtCard />
          </div>
          <div className="flex justify-center pb-10">
            <button className="bg-white text-center text-[14px] font-medium w-[300px] h-[42px] rounded-md shadow-md mt-10 transition-all duration-200 hover:border-black border-[1.3px] hover:-translate-y-2">SHOW MORE</button>
          </div>
        </div>
        <TestimonialSlider />
        <div>
          <h1 className="text-center text-2xl font-medium">LATEST POSTS</h1>
          <p className="text-center text-[15px] text-gray-600 font-medium">Phasellus lorem malesuada ligula pulvinar cosmo</p>
          <LatestPostSec />
          <LatestCards />
        </div>
        <FooterSearch />
        <FooterContact />
        <CopyRightFooter />
    </div>
  )
}

export default Home