import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function FooterContact() {
    const [openCom, setOpenCom] = useState(false);
    const [openSer, setOpenSer] = useState(false);
    const [openHlp, setOpenHlp] = useState(false);

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".footerContact", {
            y: 50,
            duration:0.6,
            opacity:0,
            stagger:0.2,
            scrollTrigger:{
            trigger:".footerContact",
            scroll:"body",
            scrub:2,
            once:true,
            start: "top 100%",
            end:"top 30%",
            }
        })
    }, []);

  return (
    <div className='bg-gray-100 footerContact'>
        <div className='w-[90%] mx-auto hidden md:grid lg:grid-cols-4 md:grid-cols-3'>
            <div className='text-center lg:mr-16'>
                <h2 className='text-[21px] font-bold text-gray-800'>COMPANY INFO</h2>
                <div className='text-[15px] mt-[4px] space-y-2'>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>About Us</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Contact Us</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>After-Sales Service</p>
                </div>
            </div>
            <div className='text-center lg:mr-16'>
                <h2 className='text-[21px] font-bold text-gray-800'>SERVICE</h2>
                <div className='text-[15px] mt-[4px] space-y-2'>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Bespoke</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Transfer</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Sublimation</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Sample</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>OEM & ODM</p>
                </div>
            </div>
            <div className='text-center lg:mr-16'>
                <h2 className='text-[21px] font-bold text-gray-800'>HELP & SUPPORT</h2>
                <div className='text-[15px] mt-[4px] space-y-2'>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Shipping & Delivery</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Returns & Exchanges</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Privacy Policy</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Terms & Conditions</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Intellectual Property Rights</p>
                    <p className='cursor-pointer hover:underline w-fit mx-auto'>Track Your Order</p>
                </div>
            </div>
            <div className='md:pl-0 pl-6'>
                <div>
                    <h2 className='text-[21px] font-bold text-gray-800'>Contact</h2>
                    <p className="text-[14px]">We'd love to hear from you-please send us your message or ideas.</p>
                    <p className="text-[14px] mt-4">Time: 9:00AM-6:00 PM(EST),7 Days a week.</p>
                    <p className="text-[14px] mt-2">Our Team will Be In Touch Within 12 Hours.</p>
                    <div className="mt-4 space-y-3">
                        <div className="flex items-center text-[25px] gap-2">
                            <RiMessage2Fill className="text-gray-700" />
                            <p className="text-[14px] border-b border-black cursor-pointer">whatsapp</p>
                        </div>
                        <div className="flex items-center text-[25px] gap-2">
                            <MdEmail className="text-gray-700" />
                            <p className="text-[14px] border-b border-black cursor-pointer">Email us</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3 text-[25px] w-[80%]">
                        <div className="group hover:bg-white hover:border hover:shadow-lg shadow-gray-500 transition-all duration-300 flex justify-center items-center cursor-pointer rounded-full w-[57px] h-[57px]">
                            <div className="group-hover:bg-gray-300 flex justify-center items-center transition-all duration-300 rounded-full w-[40px] h-[40px]">
                                <FaYoutube className="text-gray-700" />
                            </div>
                        </div>
                        <div className="group hover:bg-white hover:border hover:shadow-lg shadow-gray-500 transition-all duration-300 flex justify-center items-center cursor-pointer rounded-full w-[57px] h-[57px]">
                            <div className="group-hover:bg-gray-300 flex justify-center items-center transition-all duration-300 rounded-full w-[40px] h-[40px]">
                                <GrFacebookOption className="text-gray-700" />
                            </div>
                        </div>
                        <div className="group hover:bg-white hover:border hover:shadow-lg shadow-gray-500 transition-all duration-300 flex justify-center items-center cursor-pointer rounded-full w-[57px] h-[57px]">
                            <div className="group-hover:bg-gray-300 flex justify-center items-center transition-all duration-300 rounded-full w-[40px] h-[40px]">
                                <RiInstagramFill className="text-gray-700" />
                            </div>
                        </div>
                        <div className="group hover:bg-white hover:border hover:shadow-lg shadow-gray-500 transition-all duration-300 flex justify-center items-center cursor-pointer rounded-full w-[57px] h-[57px]">
                            <div className="group-hover:bg-gray-300 flex justify-center items-center transition-all duration-300 rounded-full w-[40px] h-[40px]">
                                <AiFillTikTok className="text-gray-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-100 mt-20 mb-5 md:hidden block">
            <div>
                <div className="border-b border-black cursor-pointer" onClick={() => setOpenCom(!openCom)}>
                    <div className="flex items-center justify-between ml-auto w-[65%] font-medium p-1">
                        <h2 className="text-[20px]">COMPANY INFO</h2>
                        <span className={`text-[17px] mr-1 ${openCom ? 'rotate-0' : 'rotate-2'}`}>{openCom ? <FaMinus /> : <FaPlus />}</span>
                    </div>
                </div>
                <div className={`text-center mb-3 space-y-2 ${openCom ? "block" : "hidden"}`}>
                    <p className="hover:underline cursor-pointer">About Us</p>
                    <p className="hover:underline cursor-pointer">Contact Us</p>
                    <p className="hover:underline cursor-pointer">After-Sales Service</p>
                </div>
            </div>
            <div>
                <div className="border-b border-black cursor-pointer" onClick={() => setOpenSer(!openSer)}>
                    <div className="flex items-center justify-between ml-auto w-[65%] font-medium p-1">
                        <h2 className="text-[20px]">SERVICE</h2>
                        <span className="text-[17px] mr-1">{openSer ? <FaMinus /> : <FaPlus />}</span>
                    </div>
                </div>
                <div className={`text-center mb-3 space-y-2 ${openSer ? "block" : "hidden"}`}>
                    <p className="hover:underline cursor-pointer">About Us</p>
                    <p className="hover:underline cursor-pointer">Contact Us</p>
                    <p className="hover:underline cursor-pointer">After-Sales Service</p>
                </div>
            </div>
            <div>
                <div className="border-b border-black cursor-pointer" onClick={() => setOpenHlp(!openHlp)}>
                    <div className="flex items-center justify-between ml-auto w-[65%] font-medium p-1">
                        <h2 className="text-[20px]">HELP & SUPPORT</h2>
                        <span className="text-[17px] mr-1">{openHlp ? <FaMinus /> : <FaPlus />}</span>
                    </div>
                </div>
                <div className={`text-center mb-3 space-y-2 ${openHlp ? "block" : "hidden"}`}>
                    <p className="hover:underline cursor-pointer">About Us</p>
                    <p className="hover:underline cursor-pointer">Contact Us</p>
                    <p className="hover:underline cursor-pointer">After-Sales Service</p>
                </div>
            </div>

            <div className='md:pl-0 pl-6 mt-8'>
                <div>
                    <h2 className='text-[21px] font-bold text-gray-800'>Contact</h2>
                    <p className="text-[14px]">We'd love to hear from you-please send us your message or ideas.</p>
                    <p className="text-[14px] mt-4">Time: 9:00AM-6:00 PM(EST),7 Days a week.</p>
                    <p className="text-[14px] mt-2">Our Team will Be In Touch Within 12 Hours.</p>
                    <div className="mt-4 space-y-3">
                        <div className="flex items-center text-[25px] gap-2">
                            <RiMessage2Fill className="text-gray-700" />
                            <p className="text-[14px] border-b border-black cursor-pointer">whatsapp</p>
                        </div>
                        <div className="flex items-center text-[25px] gap-2">
                            <MdEmail className="text-gray-700" />
                            <p className="text-[14px] border-b border-black cursor-pointer">Email us</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3 text-[25px] w-[60%]">
                        <div className="group hover:bg-white hover:border hover:shadow-lg shadow-gray-500 transition-all duration-300 flex justify-center items-center cursor-pointer rounded-full w-[57px] h-[57px]">
                            <div className="group-hover:bg-gray-300 flex justify-center items-center transition-all duration-300 rounded-full w-[40px] h-[40px]">
                                <FaYoutube className="text-gray-700" />
                            </div>
                        </div>
                        <div className="group hover:bg-white hover:border hover:shadow-lg shadow-gray-500 transition-all duration-300 flex justify-center items-center cursor-pointer rounded-full w-[57px] h-[57px]">
                            <div className="group-hover:bg-gray-300 flex justify-center items-center transition-all duration-300 rounded-full w-[40px] h-[40px]">
                                <GrFacebookOption className="text-gray-700" />
                            </div>
                        </div>
                        <div className="group hover:bg-white hover:border hover:shadow-lg shadow-gray-500 transition-all duration-300 flex justify-center items-center cursor-pointer rounded-full w-[57px] h-[57px]">
                            <div className="group-hover:bg-gray-300 flex justify-center items-center transition-all duration-300 rounded-full w-[40px] h-[40px]">
                                <RiInstagramFill className="text-gray-700" />
                            </div>
                        </div>
                        <div className="group hover:bg-white hover:border hover:shadow-lg shadow-gray-500 transition-all duration-300 flex justify-center items-center cursor-pointer rounded-full w-[57px] h-[57px]">
                            <div className="group-hover:bg-gray-300 flex justify-center items-center transition-all duration-300 rounded-full w-[40px] h-[40px]">
                                <AiFillTikTok className="text-gray-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterContact