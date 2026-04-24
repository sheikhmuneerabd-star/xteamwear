import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function FooterContact() {
    const [openIndex, setOpenIndex] = useState(null);
    const abdoutContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!abdoutContainerRef.current?.contains(e.target)) {
                setOpenIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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

    const footerAbout = [
        {
            id:1,
            title: 'COMPANY INFO',
            subTitle: [
                'About Us',
                'Contact Us',
                'After-Sales Service'
            ]
        },
        {
            id:2,
            title: 'SERVICE',
            subTitle: [
                'About Us',
                'Contact Us',
                'After-Sales Service'
            ]
        },
        {
            id:3,
            title: 'HELP & SUPPORT',
            subTitle: [
                'About Us',
                'Contact Us',
                'After-Sales Service'
            ]
        }
    ]
    
    const contentRef = useRef(null);

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

        <div className="bg-gray-100 mt-20 mb-5 md:hidden block" ref={abdoutContainerRef}>
            {footerAbout.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={item.id}>
                        <div
                            aria-expanded={isOpen} 
                            aria-controls={`section-${index}`}
                            className="border-b border-black cursor-pointer" 
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                            <div className="flex items-center justify-between ml-auto w-[66%] font-medium p-1">
                                <h2 className="text-[20px]">{item.title}</h2>
                                <div className="relative mb-2 mr-4">
                                    <div className={`absolute transition-all duration-500 ${openIndex === index ? "rotate-90" : ""} top-0 left-1 w-[2px] h-[10px] bg-gray-800`}></div>
                                    <div className={`absolute transition-all duration-500 ${openIndex === index ? "rotate-180" : ""} top-1 w-[10px] h-[2px] bg-gray-800`}></div>
                                </div>
                            </div>
                        </div>
                        <div 
                            id={`section-${index}`}
                            role="region"
                            ref={contentRef}
                            style={{ 
                                height: isOpen 
                                    ? contentRef.current?.scrollHeight + "px"
                                    : "0px"
                             }}
                            className="transition-all duration-500 overflow-hidden flex flex-col items-center"
                        >
                            {item.subTitle.map((subItem, index) => (
                                <p key={index} className="hover:underline cursor-pointer">{subItem}</p>
                            ))}
                        </div>
                    </div>
                )
            })}

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