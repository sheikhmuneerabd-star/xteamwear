import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoMail } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

function NavContact() {
  const [countryFlagShow, setCountryFlagShow] = useState(false);
  const boxRef = useRef(null);

  useGSAP(() => {
      gsap.to("#countryBox", {
        opacity:countryFlagShow ? 1 : 0,
        y:countryFlagShow ? 0 : -10,
        pointerEvents:countryFlagShow ? "auto" : "none",
        duration:0.3,
        ease:"power2.out"
      })
  }, [countryFlagShow]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(boxRef.current && !boxRef.current.contains(event.target)){
        setCountryFlagShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside); 
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div className="bg-slate-100 w-full h-[33px] xl:flex hidden">
        <div className="w-[93%] h-[33px] flex justify-between mx-auto">
          <div className="flex gap-5">
            <div className="flex justify-center items-center gap-1 text-gray-800 cursor-pointer">
              <TfiHeadphoneAlt className="text-[15px]" />
              <span className="text-[13px]">Call: +12025347325</span>
            </div>
            <div className="flex justify-center items-center gap-1 text-gray-800 cursor-pointer">
              <GoMail className="text-[15px]" />
              <span className="text-[13px]">support@xteamwear.com</span>
            </div>
          </div>

          <div className="flex items-center text-[13px] w-fit">
            <span className="font-semibold mr-[130px]">Free Shipping Over $199*</span>
          </div>

          <div className="flex gap-4 items-center text-gray-800 text-[13px] relative" ref={boxRef}>
            <span className="cursor-pointer">FAQs</span>
            <span className="cursor-pointer">Need Help?</span>
            <div className="flex items-center gap-[3px] cursor-pointer" onClick={() => setCountryFlagShow(!countryFlagShow)}>
              <span className="text-black">USD</span>
              <IoIosArrowDown className="text-gray-600" />
            </div>
            <div id="countryBox" className="bg-white z-50 w-[98px] py-3 flex flex-col gap-[12px] justify-center items-center rounded-md absolute top-9 right-3 shadowNavCon opacity-0 pointer-events-none">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="https://flagcdn.com/w40/us.png" className="w-6 h-6 rounded-full" />
                <span className="font-medium group-hover:border-black border-b-[1.5px] border-white">USD</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="https://flagcdn.com/w40/eu.png" className="w-6 h-6 rounded-full" />
                <span className="font-medium group-hover:border-black border-b-[1.5px] border-white">EUR</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="https://flagcdn.com/w40/gb.png" className="w-6 h-6 rounded-full" />
                <span className="font-medium group-hover:border-black border-b-[1.5px] border-white">GBP</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="https://flagcdn.com/w40/ch.png" className="w-6 h-6 rounded-full" />
                <span className="font-medium group-hover:border-black border-b-[1.5px] border-white">CHF</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="https://flagcdn.com/w40/au.png" className="w-6 h-6 rounded-full" />
                <span className="font-medium group-hover:border-black border-b-[1.5px] border-white">AUD</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="https://flagcdn.com/w40/ca.png" className="w-6 h-6 rounded-full" />
                <span className="font-medium group-hover:border-black border-b-[1.5px] border-white">CAD</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavContact