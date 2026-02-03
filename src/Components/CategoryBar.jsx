import { TiThSmallOutline } from "react-icons/ti";
import { IoIosArrowUp } from "react-icons/io";
import categoryLogo from '../assets/categoryLogo.webp'
import { RiArrowRightSLine } from "react-icons/ri";
import gsap from "gsap";
import category from "../CatesgoryBarItems";
import { useState } from "react";

function CategoryBar() {

    
    const enter = (e) => {
        const line = e.currentTarget.querySelector(".line");
        gsap.fromTo(line, 
            {scaleX:0, transformOrigin:'left', backgroundColor : 'black'},
            {scaleX:1, duration: 0.4, ease: 'power2.out', backgroundColor : 'black'}
        )
    }
    const leave = (e) => {
        const line = e.currentTarget.querySelector(".line");
        gsap.to(line, {
            scaleX:0,
            transformOrigin:'right',
            duration:0.4,
            ease:'power2.out',
            backgroundColor : 'black'
        })
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full categoryBackground">
        <div className="w-[92%] h-[47px] mx-auto flex justify-between items-center">
            <div className="relative group/main">
                <div className="h-[39px] mt-2 flex gap-1">
                    <div>
                        <TiThSmallOutline className="text-[22px] mt-[2px]" />
                    </div>
                    <div className="flex items-center mb-3">
                        <span className="text-[16px] font-medium mr-[2px]">Category</span>
                        <IoIosArrowUp className="mt-[5px]" />
                    </div>
                </div>
                <div className="bg-white absolute opacity-0 group-hover/main:opacity-100 pointer-events-none group-hover/main:pointer-events-auto translate-y-4 group-hover/main:translate-y-0 transition-all duration-200 top-[46px] w-[260px] h-fit border p-5">
                    <div className="flex flex-col gap-4">
                        {category.map((item) => (
                            <div key={item.id} className="relative group/item w-[225px]">
                                <div className="flex items-center justify-between group font-medium cursor-pointer">
                                    <span className="relative text-gray-700 group-hover:text-gray-950" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        {item.name}
                                        <span className="line absolute left-0 bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <RiArrowRightSLine className="absolute left-[201px] top-[5px] text-lg text-gray-500" />
                                </div>
                                <div className="w-[260px] h-fit pointer-events-none opacity-0 group-hover/item:opacity-100 -translate-y-5 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 bg-white rounded-md border shadow-md absolute left-[225px] -top-[4px] px-5 py-2">
                                    {item.title.map((item, index) => (
                                        <div key={index} className="cursor-pointer mt-2">
                                            <span className="text-sm">{item}</span>
                                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex h-full items-center gap-5 font-semibold text-[15px] mr-2">
                <div className="relative h-full flex items-center cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>Home</span>
                    <span className="line absolute left-0 top-[34px] h-[2px] w-full"></span>
                </div>
                <div className="relative h-full flex items-center group cursor-pointer" onMouseEnter={(e) => {enter(e), setDropdownOpen(true)}} onMouseLeave={(e) => {leave(e), setDropdownOpen(false)}}>
                    <span>Soccer</span>
                    <span className="line absolute left-0 top-[34px] h-[2px] w-full"></span>
                    <div className={`w-[260px] h-fit pointer-events-none opacity-0 ${dropdownOpen ? 'group-hover:opacity-100' : 'opacity-0'} -translate-y-3 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[-10px] top-[45px] px-5 py-2`}>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full flex items-center group cursor-pointer" onMouseEnter={(e) => {enter(e), setDropdownOpen(true)}} onMouseLeave={(e) => {leave(e), setDropdownOpen(false)}}>
                    <span>Basketball</span>
                    <span className="line absolute left-0 top-[34px] h-[2px] w-full"></span>
                    <div className={`w-[260px] h-fit pointer-events-none opacity-0 ${dropdownOpen ? 'group-hover:opacity-100' : 'opacity-0'} -translate-y-3 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[-10px] top-[45px] px-5 py-2`}>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full flex items-center group cursor-pointer" onMouseEnter={(e) => {enter(e), setDropdownOpen(true)}} onMouseLeave={(e) => {leave(e), setDropdownOpen(false)}}>
                    <span>Winter Wear</span>
                    <span className="line absolute left-0 top-[34px] h-[2px] w-full"></span>
                    <div className={`w-[260px] flex flex-col gap-3 h-fit pointer-events-none opacity-0 ${dropdownOpen ? 'group-hover:opacity-100' : 'opacity-0'} -translate-y-3 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[-10px] top-[45px] px-5 py-2`}>
                        <div className="relative mt-1 group/item w-[235px]">
                            <div className="flex items-center justify-between group font-medium cursor-pointer">
                                <span className="relative text-gray-700 group-hover:text-gray-950" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                    Adult Winter Wear
                                    <span className="line absolute left-0 bottom-[1px] h-[1.6px] w-full"></span>
                                </span>
                                <RiArrowRightSLine className="absolute left-[213px] top-[4px] text-lg text-gray-500" />
                            </div>
                            <div className="w-[260px] h-[155px] pointer-events-none opacity-0 group-hover/item:opacity-100 -translate-y-5 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[235px] -top-[8px] px-5 py-2">
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Cotton Vest
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Cotton Jacket
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Soccer / Winter Wear / Long Cotton Coat
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-gray-100"></div>
                        <div className="relative mb-1 group/item w-[235px]">
                            <div className="flex items-center justify-between group font-medium cursor-pointer">
                                <span className="relative text-gray-700 group-hover:text-gray-950" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                    Kid Winter Wear
                                    <span className="line absolute left-0 bottom-[1px] h-[1.6px] w-full"></span>
                                </span>
                                <RiArrowRightSLine className="absolute left-[213px] top-[4px] text-lg text-gray-500" />
                            </div>
                            <div className="w-[260px] h-[155px] pointer-events-none opacity-0 group-hover/item:opacity-100 -translate-y-5 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[235px] -top-[8px] px-5 py-2">
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Cotton Vest
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Cotton Jacket
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Long Cotton Coat
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full flex items-center group cursor-pointer" onMouseEnter={(e) => {enter(e), setDropdownOpen(true)}} onMouseLeave={(e) => {leave(e), setDropdownOpen(false)}}>
                    <span>More Teamwear</span>
                    <span className="line absolute left-0 top-[34px] h-[2px] w-full"></span>
                    <div className={`w-[260px] flex flex-col gap-3 h-fit pointer-events-none opacity-0 ${dropdownOpen ? 'group-hover:opacity-100' : 'opacity-0'} -translate-y-3 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[-10px] top-[45px] px-5 py-2`}>
                        <div className="relative mt-1 group/item w-[235px]">
                            <div className="flex items-center justify-between group font-medium cursor-pointer">
                                <span className="relative text-gray-700 group-hover:text-gray-950" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                    Baseball
                                    <span className="line absolute left-0 bottom-[1px] h-[1.6px] w-full"></span>
                                </span>
                                <RiArrowRightSLine className="absolute left-[213px] top-[4px] text-lg text-gray-500" />
                            </div>
                            <div className="w-[260px] h-[178px] pointer-events-none opacity-0 group-hover/item:opacity-100 -translate-y-5 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[235px] -top-[8px] px-5 py-2">
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Button Down Shirts
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        2-Button Shirts
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Crewneck Shirts
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Accessories
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-gray-100"></div>
                        <div className="relative mb-1w-[235px]">
                            <div className="flex items-center justify-between group font-medium cursor-pointer">
                                <span className="relative text-gray-700 group-hover:text-gray-950" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                    Badminton Clothing
                                    <span className="line absolute left-0 bottom-[1px] h-[1.6px] w-full"></span>
                                </span>
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-gray-100"></div>
                        <div className="relative mt-1 group/item w-[235px]">
                            <div className="flex items-center justify-between group font-medium cursor-pointer">
                                <span className="relative text-gray-700 group-hover:text-gray-950" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                    Training
                                    <span className="line absolute left-0 bottom-[1px] h-[1.6px] w-full"></span>
                                </span>
                                <RiArrowRightSLine className="absolute left-[213px] top-[4px] text-lg text-gray-500" />
                            </div>
                            <div className="w-[260px] h-fit pointer-events-none opacity-0 group-hover/item:opacity-100 -translate-y-5 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[235px] -top-[8px] px-5 py-2">
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Bibs
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        1/4 Zip Jacket
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Full Zip Jacket
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Polos
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Windbreaker
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Shorts
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Pants
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-gray-100"></div>
                        <div className="relative mt-1 group/item w-[235px]">
                            <div className="flex items-center justify-between group font-medium cursor-pointer">
                                <span className="relative text-gray-700 group-hover:text-gray-950" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                    Kids
                                    <span className="line absolute left-0 bottom-[1px] h-[1.6px] w-full"></span>
                                </span>
                                <RiArrowRightSLine className="absolute left-[213px] top-[4px] text-lg text-gray-500" />
                            </div>
                            <div className="w-[260px] h-fit pointer-events-none opacity-0 group-hover/item:opacity-100 -translate-y-5 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[235px] -top-[8px] px-5 py-2">
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Bibs
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        1/4 Zip Jacket
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Windbreaker
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Shorts
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Pants
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-gray-100"></div>
                        <div className="relative mb-1 group/item w-[235px]">
                            <div className="flex items-center justify-between group font-medium cursor-pointer">
                                <span className="relative text-gray-700 group-hover:text-gray-950" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                    Xteamwear Basics
                                    <span className="line absolute left-0 bottom-[1px] h-[1.6px] w-full"></span>
                                </span>
                                <RiArrowRightSLine className="absolute left-[213px] top-[4px] text-lg text-gray-500" />
                            </div>
                            <div className="w-[260px] h-fit pointer-events-none opacity-0 group-hover/item:opacity-100 -translate-y-5 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[235px] -top-[8px] px-5 py-2">
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Bibs
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        1/4 Zip Jacket
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Full Zip Jacket
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Polos
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                                <div className="cursor-pointer mt-2 group/subItem">
                                    <span className="text-sm relative text-gray-600 group-hover/subItem:text-gray-900" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                                        Pants
                                        <span className="line absolute left-0 -bottom-[1px] h-[1.6px] w-full"></span>
                                    </span>
                                    <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-red-600">Bespoke</span>
                </div>
                <div>
                    <img className="w-[40px]" src={categoryLogo} alt="" />
                </div>
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>DTF Design</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
                </div>
                <div className="relative h-full flex items-center group cursor-pointer" onMouseEnter={(e) => {enter(e), setDropdownOpen(true)}} onMouseLeave={(e) => {leave(e), setDropdownOpen(false)}}>
                    <span>Sports Lab</span>
                    <span className="line absolute left-0 top-[34px] h-[2px] w-full"></span>
                    <div className={`w-[260px] h-fit pointer-events-none opacity-0 ${dropdownOpen ? 'group-hover:opacity-100' : 'opacity-0'} -translate-y-3 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[-10px] top-[45px] px-5 py-2`}>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full flex items-center group cursor-pointer" onMouseEnter={(e) => {enter(e), setDropdownOpen(true)}} onMouseLeave={(e) => {leave(e), setDropdownOpen(false)}}>
                    <span>Blogs</span>
                    <span className="line absolute left-0 top-[34px] h-[2px] w-full"></span>
                    <div className={`w-[260px] h-fit pointer-events-none opacity-0 ${dropdownOpen ? 'group-hover:opacity-100' : 'opacity-0'} -translate-y-3 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-white border shadow-md absolute left-[-10px] top-[45px] px-5 py-2`}>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                        <div className="cursor-pointer mt-2 relative" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                            <span className="text-sm">Sublimated Shirts</span>
                            <span className="line absolute left-0 top-[19px] h-[1.7px] w-[115px]"></span>
                            <div className="w-full h-[1px] bg-gray-100 mt-[10px]"></div>
                        </div>
                    </div>
                </div>
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>All Reviews</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryBar