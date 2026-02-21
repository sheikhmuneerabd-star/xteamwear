import logo from '../assets/logo.svg'
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import { useState } from 'react';

import greenShirt from '../assets/greenShirt.jpg'
import orangeShirt from '../assets/orangeShirt.jpg'

import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import { BsArrowLeft } from "react-icons/bs";

import { useRef, useEffect } from 'react';

import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiUserAddLine } from "react-icons/ri";


function Navbar() {
    const [focus, setFocus] = useState(false);
    const [searchFocus, setSearchFocus] = useState(false);

    const [toggle, setToggle] = useState(false);
    const menuSideBar = useRef();
    
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        function handleClickOutSide(event) {
            if(menuSideBar.current && !menuSideBar.current.contains(event.target)) {
                setToggle(false);
                setActiveMenu(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutSide);

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);

    const [openMenu, setOpenMenu] = useState(true);
    const [openCategory, setOpenCategory] = useState(false);

    const handleMenu = () => {
        setOpenCategory(false);
        setOpenMenu(true);
    }
    const handleCategory = () => {
        setOpenMenu(false);
        setOpenCategory(true);
    }

    const categoriesMenu = [
        {
            id: 1,
            name: "Soccer",
            items: [
            "Go To Soccer 1",
            "Go To Soccer 2",
            "Go To Soccer 3",
            ]
        },
        {
            id: 2,
            name: "Winter Wear",
            items: [
            "Jackets",
            "Hoodies",
            "Sweaters",
            ]
        },
        {
            id: 3,
            name: "Basket Ball",
            items: [
            "Basket Ball 1",
            "Basket Ball 2",
            "Basket Ball 3",
            ]
        }
    ]
    const categoriesCategory = [
        {
            id: 1,
            name: "FOOTBALL",
            items: [
            "Go To FOOTBALL",
            "Go To FOOTBALL2",
            "Go To FOOTBALL3",
            ]
        },
        {
            id: 2,
            name: "Basketball",
            items: [
            "Basket Ball 1",
            "Basket Ball 2",
            "Basket Ball 3",
            ]
        },
        {
            id: 3,
            name: "Baseball",
            items: [
            "Baseball Ball 1",
            "Baseball Ball 2",
            "Baseball Ball 3",
            ]
        }
    ]

  return (
    <div>
        {/* full screen */}
        <div className='w-full xl:flex hidden'>
            <div className='w-[91%] h-[110px] mx-auto flex items-center justify-between'>
                <div>
                    <img className='w-[80%]' src={logo} alt="xteamwear" />
                </div>
                {/* search system */}
                <div className='flex w-[36%] h-[45px] mr-[50px] rounded-xl relative'>
                    <label className={`absolute top-[10px] left-3 transition-all duration-300 ${focus ? '-translate-x-1 opacity-0' : 'translate-x-0 opacity-100'}`}>Search the store</label>
                    <input className='w-full h-full rounded-xl outline-none pl-3 shadowSearch shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)] text-[15px] placeholder-gray-600' type="text" onFocus={() => {setFocus(true), setSearchFocus(!searchFocus)}} onBlur={(e) => {!e.target.value && setFocus(false), setSearchFocus(false)}} />
                    <IoSearch className='absolute bottom-0 right-0 p-[9px] bg-yellow-400 w-[12%] h-full rounded-tr-xl rounded-br-xl transition-all duration-200 hover:bottom-1 cursor-pointer' />
                    <div className={`bg-white absolute [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 top-[60px] left-0 w-[125%] h-[300px] rounded-md border overflow-y-auto overflow-x-hidden z-50 ${searchFocus ? 'flex' : 'hidden'}`}>
                        <div className='p-5'>
                            <div className='p-2 border-b'>
                                <h2 className='font-semibold text-sm'>SUBLIMATED JERSEY</h2>
                            </div>

                            <div>
                                <div className='flex gap-2 pt-5'>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>uniform pakages</span>
                                    </div>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>fluorescent jersey</span>
                                    </div>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>sleeveless jersey</span>
                                    </div>
                                </div>
                                <div className='flex gap-2 pt-5'>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>loremous saliduar</span>
                                    </div>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>long sleeve shirts</span>
                                    </div>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>shorts & pants</span>
                                    </div>
                                </div>
                                <div className='flex gap-2 pt-5'>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>reversible basketball jersey</span>
                                    </div>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>bespoke</span>
                                    </div>
                                    <div className='flex gap-1 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 group text-gray-500 py-[6.5px] px-3'>
                                        <IoSearch className='group-hover:text-gray-700' />
                                        <span className='text-[13px] group-hover:text-gray-700'>socks & accessories</span>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-7'>
                                <h2 className='font-semibold text-sm border-b pb-2'>POPULAR PRODUCTS</h2>

                                <div className='mt-4 flex gap-3'>
                                    <div className='group flex flex-col justify-center'>
                                        <div className='w-full h-[180px] group/img group-hover:-translate-y-2 transition-all duration-300 relative cursor-pointer overflow-hidden'>
                                            <img className='w-full h-full object-cover opacity-100 group-hover/img:opacity-0 transition-opacity duration-700 ease-in-out' src={greenShirt} alt="greenShirt" />
                                            <img className='w-full h-full absolute top-0 left-0 object-cover opacity-0 group-hover/img:opacity-100 ease-out hover:scale-105 transition-all duration-700' src={orangeShirt} alt="greenShirt" />
                                        </div>
                                        <div className='w-[150px] p-4'>
                                            <span className='text-[11px] line-clamp-2 font-medium hover:text-blue-600 cursor-pointer'>Whirlwind - Men's Sublimated Footbal Lorem ipsum dolor sit amet.</span>
                                            <p className='text-gray-800 font-medium text-[15px] line-through'>Rs.19,053.53</p>
                                            <p className='text-gray-800 font-medium text-[15px] line-through'>PKR</p>
                                            <p className='text-red-600 font-medium text-[15px]'>Rs.13,645.45</p>
                                            <p className='text-red-600 font-medium text-[15px]'>PKR</p>
                                            <div className='w-[75%] flex justify-end'>
                                                <span className='bg-red-600 px-3 py-[3px] rounded text-[14px] text-white'>(-20%)</span>
                                            </div>
                                            <div className='w-[30px] mt-3 rounded-full border-[1.4px] p-[2px] border-gray-300'>
                                                <img className='rounded-full' title='GREEN & BLACK' src={greenShirt} alt="greenShirt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='group flex flex-col justify-center'>
                                        <div className='w-full h-[180px] group/img group-hover:-translate-y-2 transition-all duration-300 relative cursor-pointer overflow-hidden'>
                                            <img className='w-full h-full object-cover opacity-100 group-hover/img:opacity-0 transition-opacity duration-700 ease-in-out' src={greenShirt} alt="greenShirt" />
                                            <img className='w-full h-full absolute top-0 left-0 object-cover opacity-0 group-hover/img:opacity-100 ease-out hover:scale-105 transition-all duration-700' src={orangeShirt} alt="greenShirt" />
                                        </div>
                                        <div className='w-[150px] p-4'>
                                            <span className='text-[11px] line-clamp-2 font-medium hover:text-blue-600 cursor-pointer'>Whirlwind - Men's Sublimated Footbal Lorem ipsum dolor sit amet.</span>
                                            <p className='text-gray-800 font-medium text-[15px] line-through'>Rs.19,053.53</p>
                                            <p className='text-gray-800 font-medium text-[15px] line-through'>PKR</p>
                                            <p className='text-red-600 font-medium text-[15px]'>Rs.13,645.45</p>
                                            <p className='text-red-600 font-medium text-[15px]'>PKR</p>
                                            <div className='w-[75%] flex justify-end'>
                                                <span className='bg-red-600 px-3 py-[3px] rounded text-[14px] text-white'>(-20%)</span>
                                            </div>
                                            <div className='w-[30px] mt-3 rounded-full border-[1.4px] p-[2px] border-gray-300'>
                                                <img className='rounded-full' title='GREEN & BLACK' src={greenShirt} alt="greenShirt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='group flex flex-col justify-center'>
                                        <div className='w-full h-[180px] group/img group-hover:-translate-y-2 transition-all duration-300 relative cursor-pointer overflow-hidden'>
                                            <img className='w-full h-full object-cover opacity-100 group-hover/img:opacity-0 transition-opacity duration-700 ease-in-out' src={greenShirt} alt="greenShirt" />
                                            <img className='w-full h-full absolute top-0 left-0 object-cover opacity-0 group-hover/img:opacity-100 ease-out hover:scale-105 transition-all duration-700' src={orangeShirt} alt="greenShirt" />
                                        </div>
                                        <div className='w-[150px] p-4'>
                                            <span className='text-[11px] line-clamp-2 font-medium hover:text-blue-600 cursor-pointer'>Whirlwind - Men's Sublimated Footbal Lorem ipsum dolor sit amet.</span>
                                            <p className='text-gray-800 font-medium text-[15px] line-through'>Rs.19,053.53</p>
                                            <p className='text-gray-800 font-medium text-[15px] line-through'>PKR</p>
                                            <p className='text-red-600 font-medium text-[15px]'>Rs.13,645.45</p>
                                            <p className='text-red-600 font-medium text-[15px]'>PKR</p>
                                            <div className='w-[75%] flex justify-end'>
                                                <span className='bg-red-600 px-3 py-[3px] rounded text-[14px] text-white'>(-20%)</span>
                                            </div>
                                            <div className='w-[30px] mt-3 rounded-full border-[1.4px] p-[2px] border-gray-300'>
                                                <img className='rounded-full' title='GREEN & BLACK' src={greenShirt} alt="greenShirt" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cart and account */}
                <div className='flex gap-5'>
                    <div>
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <PiShoppingCartLight className='text-[32px] group-hover:scale-110 transition-all duration-200' />
                            <div className='flex flex-col justify-center text-[13px]'>
                                <span className='flex items-center justify-center bg-yellow-400 rounded-full font-semibold text-white w-[30px] h-[17.5px]'>0</span>
                                <span>Cart</span>
                            </div>
                        </div>
                        <div>
                            <select>
                                <option value="pakistan">Pakistan</option>
                                <option value="USD">USD</option>
                                <option value="Aus">Aus</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 group cursor-pointer'>
                        <PiUserLight className='text-[40px] group-hover:scale-110 transition-all duration-200' />
                        <div className='flex flex-col text-[13px]'>
                            <span>Sign In or Register</span>
                            <span className='font-semibold'>My account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* non full screen */}
        <div className='w-full h-[54px] bg-white xl:hidden flex'>
            <div className='w-[97%] flex items-center justify-between mx-auto'>
                <div className='flex items-center gap-5'>
                    <div className='relative'>
                        <HiMiniBars3 className='text-3xl' onClick={() => setToggle(!toggle)} />
                        <div className={`fixed overflow-scroll top-0 left-0 bg-white h-full z-50 w-[370px] transition-all duration-300 ${toggle ? "translate-x-0" : "-translate-x-full"}`} onBlur={() => setToggle(false)} ref={menuSideBar}>
                            <div className='p-3 flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <h1 className={`text-lg font-medium transition-all duration-300 ${openMenu ? "text-gray-900" : "text-gray-400"}`} onClick={handleMenu}>Menu</h1>
                                    <h1 className={`text-lg font-medium transition-all duration-300 ${openCategory ? "text-gray-900" : "text-gray-400"}`} onClick={handleCategory}>Category</h1>
                                </div>
                                <div>
                                    <IoMdClose className='text-[27px]' onClick={() => setToggle(false)} />
                                </div>
                            </div>
                            <div>
                                {/* Menu Section */}
                                <div className={`${openMenu ? 'block' : 'hidden'}`}>
                                    <div className='relative'>
                                        <div className='flex text-[17px] items-center justify-between border-b border-gray-300 p-3'>
                                            <h2 className='font-medium'>Home</h2>
                                        </div>
                                    </div>
                                    {
                                        categoriesMenu.map((cate) => (
                                            <div key={cate.id} className='relative'>
                                                <div className='flex text-[17px] items-center justify-between border-b border-gray-300 p-3' onClick={() => setActiveMenu(cate.id)}>
                                                    <h2 className='font-medium'>{cate.name}</h2>
                                                    <MdOutlineArrowForwardIos />
                                                </div>
                                                <div className={`fixed overflow-scroll top-0 left-0 h-full w-[370px] bg-white z-50 transition-all duration-200 ${activeMenu === cate.id ? "translate-x-0" : "-translate-x-full"}`}>
                                                    <div className='bg-gray-100'>
                                                        <div className='flex font-medium justify-between p-3 items-center w-[225px]'>
                                                            <BsArrowLeft className='text-[24px]' onClick={() => setActiveMenu(null)} />
                                                            <h2>{cate.name}</h2>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {cate.items.map((item, index) => (
                                                            <div className='text-[15px] border-b border-gray-200 p-4' key={index}>{item}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* Category Section */}
                                <div className={`${openCategory ? 'block' : 'hidden'}`}>
                                    {
                                        categoriesCategory.map((cateCate) => (
                                            <div key={cateCate.id} className='relative'>
                                                <div className='flex text-[17px] items-center justify-between border-b border-gray-300 p-3' onClick={() => setActiveCategory(cateCate.id)}>
                                                    <h2 className='font-medium'>{cateCate.name}</h2>
                                                    <MdOutlineArrowForwardIos />
                                                </div>
                                                <div className={`fixed overflow-scroll top-0 left-0 h-full w-[370px] bg-white z-50 transition-all duration-200 ${activeCategory === cateCate.id ? "translate-x-0" : "-translate-x-full"}`}>
                                                    <div className='bg-gray-100'>
                                                        <div className='flex font-medium justify-between p-3 items-center w-[225px]'>
                                                            <BsArrowLeft className='text-[24px]' onClick={() => setActiveCategory(null)} />
                                                            <h2 className=''>{cateCate.name}</h2>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {
                                                            cateCate.items.map((item, index) => (
                                                                <div key={index} className='text-[15px] border-b border-gray-200 p-4'>{item}</div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <div className='flex gap-1 items-center p-3 border-b border-gray-300'>
                                        <HiOutlineUserCircle className='text-[24px]' />
                                        <span className='text-[16px]'>Sign In</span>
                                    </div>
                                    <div className='flex gap-1 items-center p-3 border-b border-gray-300'>
                                        <RiUserAddLine className='text-[24px]' />
                                        <span className='text-[16px]'>Create an account</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-3 bg-gray-100'>
                                        <h2 className='font-medium'>CURRENCY</h2>
                                    </div>
                                    <div className="p-[13px] flex justify-between gap-[12px] items-center">
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
                                    </div>
                                    <div className="p-[13px] flex gap-[12px] items-center">
                                        <div className="flex items-center gap-2 cursor-pointer group">
                                            <img src="https://flagcdn.com/w40/au.png" className="w-6 h-6 rounded-full" />
                                            <span className="font-medium group-hover:border-black border-b-[1.5px] border-white">AUD</span>
                                        </div>
                                        <div className="flex items-center gap-2 cursor-pointer group ml-[18px]">
                                            <img src="https://flagcdn.com/w40/ca.png" className="w-6 h-6 rounded-full" />
                                            <span className="font-medium group-hover:border-black border-b-[1.5px] border-white">CAD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <IoIosSearch className='text-[28px]' />
                        <div className='relative'>
                            <div className='bg-white fixed top-0 left-0 w-[370px] h-full z-50'>
                                <div className='p-3 flex justify-between items-center'>
                                    <h2 className='font-medium text-lg'>Search</h2>
                                    <IoMdClose className='text-[27px]' />
                                </div>
                                <div className='p-3'>
                                    <div className='relative h-[43px]'>
                                        <label className={`absolute top-[10px] left-3 transition-all duration-300 ${focus ? '-translate-x-1 opacity-0' : 'translate-x-0 opacity-100'}`}>Search product...</label>
                                        <input className='w-full h-full rounded-md border-b border-gray-300 outline-none pl-3 shadowSearch text-[15px] placeholder-gray-600' type="text" onFocus={() => {setFocus(true), setSearchFocus(!searchFocus)}} onBlur={(e) => {!e.target.value && setFocus(false), setSearchFocus(false)}} />
                                        <IoSearch className='absolute bottom-0 right-0 p-[9px] w-[12%] h-full rounded-tr-xl rounded-br-xl transition-all duration-200 hover:bottom-1 cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[16%]'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex items-center gap-5 mr-2'>
                    <div>
                        <PiUserLight className='text-[28px]' />
                    </div>
                    <div className='relative'>
                        <span className='absolute -top-[8px] -right-[9px] text-[13px] bg-black text-white w-6 h-6 flex justify-center items-center rounded-full'>0</span>
                        <CgShoppingBag className='text-[28px]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar