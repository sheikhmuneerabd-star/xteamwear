import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function FooterSearch() {
    const [focus, setFocus] = useState(false);
    const [searchFocus, setSearchFocus] = useState(false);

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".rec", {
            y: 50,
            duration:0.6,
            opacity:0,
            stagger:0.2,
            scrollTrigger:{
            trigger:".rec",
            scroll:"body",
            scrub:2,
            once:true,
            start: "top 100%",
            end:"top 30%",
            }
        })
        tl.from(".searchBox", {
            y: 50,
            duration:0.6,
            opacity:0,
            stagger:0.2,
            scrollTrigger:{
            trigger:".searchBox",
            scroll:"body",
            scrub:2,
            once:true,
            start: "top 100%",
            end:"top 30%",
            }
        })
    }, []);

  return (
    <div className="mt-9 flex items-center bg-gray-100 h-[50vh]">
        <div className="md:w-[50%] w-[85%] mx-auto space-y-2">
            <h2 className="md:text-[24px] text-[18px] font-medium">SIGN UP FOR OUR NEWSLETTER</h2>
            <p className="text-sm rec">Receive our latest updates about our products & promotions.</p>
            <div className="flex gap-2 searchBox md:flex-row flex-col">
                <div className="relative h-[40px]">
                    <label className={`absolute top-[7px] left-3 transition-all duration-300 ${focus ? '-translate-x-1 opacity-0' : 'translate-x-0 opacity-100'}`}>enter your email address</label>
                    <input className='xl:w-[470px] lg:w-[370px] md:w-[260px] w-full h-full border border-gray-300 rounded-xl outline-none pl-3 text-[15px] placeholder-gray-600' type="text" onFocus={() => {setFocus(true), setSearchFocus(!searchFocus)}} onBlur={(e) => {!e.target.value && setFocus(false), setSearchFocus(false)}} />
                </div>
                <button className="bg-white rounded-xl border hover:-translate-y-2 transition-all duration-300 border-yellow-400 md:w-[155px] w-full h-[40px] text-[15px] hover:bg-yellow-400">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default FooterSearch