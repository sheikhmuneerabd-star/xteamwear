import { useGSAP } from "@gsap/react"
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
import gsap from "gsap"

function Home() {
  useGSAP(() => {
      let tl = gsap.timeline();
      tl.from(".xteamwearA", {
        y: 60,
        duration:0.7,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
          trigger:".xteamwearA",
          scroll:"body",
          scrub:2,
          once:true,
          start: "top 100%",
          end:"top 30%",
        }
      })
      tl.from(".showMore", {
        y: 50,
        duration:0.7,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
          trigger:".showMore",
          scroll:"body",
          scrub:2,
          once:true,
          start: "top 100%",
          end:"top 30%",
        }
      })
      tl.from(".latestP", {
        y: 50,
        duration:0.6,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
          trigger:".latestP",
          scroll:"body",
          scrub:2,
          once:true,
          start: "top 100%",
          end:"top 30%",
        }
      })
      tl.from(".latestT", {
        y: 50,
        duration:0.6,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
          trigger:".latestT",
          scroll:"body",
          scrub:2,
          once:true,
          start: "top 100%",
          end:"top 30%",
        }
      })
    }, []);
  return (
    <div>
        <NavContact />
        <Navbar />
        <CategoryBar />
        <TeamImage />
        <h3 className="text-center text-2xl font-medium xl:mt-0 mt-5 xteamwearA">XTEAMWEAR ADVANTAGES</h3>
        <FactoryCard />
        <div className="bg-gray-100">
          <h3 className="ml-[40px] text-2xl font-medium pt-10 pb-8">LATEST HOT PRODUCTS</h3>
          <div className="w-[93.8%] mx-auto">
            <ShirtCard />
          </div>
          <div className="flex justify-center pb-10 showMore">
            <button className="bg-white text-center text-[14px] font-medium w-[300px] h-[42px] rounded-md shadow-md mt-10 transition-all duration-200 hover:border-black border-[1.3px] hover:-translate-y-2">SHOW MORE</button>
          </div>
        </div>
        <TestimonialSlider />
        <div className="latest">
          <h1 className="text-center text-2xl font-medium latestP">LATEST POSTS</h1>
          <p className="text-center text-[15px] text-gray-600 font-medium latestT">Phasellus lorem malesuada ligula pulvinar cosmo</p>
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