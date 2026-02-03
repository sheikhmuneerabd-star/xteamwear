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

function Navbar() {
    const [focus, setFocus] = useState(false);
    const [searchFocus, setSearchFocus] = useState(false);
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
                    <div className={`bg-white absolute [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 top-[60px] left-0 w-[125%] h-[300px] rounded-md border overflow-y-scroll z-50 ${searchFocus ? 'flex' : 'hidden'}`}>
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
                                        <div className='w-full h-[180px] relative cursor-pointer'>
                                            <img className='w-full h-full absolute object-cover opacity-0 hover:opacity-100 hover:scale-105 transition-all duration-1000 z-10 group-hover:-translate-y-2' src={orangeShirt} alt="greenShirt" />
                                            <img className='w-full h-full absolute object-cover hover:opacity-0 transition-all duration-1000 group-hover:-translate-y-2 group-hover:duration-200' src={greenShirt} alt="greenShirt" />
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
                                        <div className='w-full h-[180px] relative cursor-pointer'>
                                            <img className='w-full h-full absolute object-cover opacity-0 hover:opacity-100 hover:scale-105 transition-all duration-1000 z-10 group-hover:-translate-y-2' src={orangeShirt} alt="greenShirt" />
                                            <img className='w-full h-full absolute object-cover hover:opacity-0 transition-all duration-1000 group-hover:-translate-y-2 group-hover:duration-200' src={greenShirt} alt="greenShirt" />
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
                                        <div className='w-full h-[180px] relative cursor-pointer'>
                                            <img className='w-full h-full absolute object-cover opacity-0 hover:opacity-100 hover:scale-105 transition-all duration-1000 z-10 group-hover:-translate-y-2' src={orangeShirt} alt="greenShirt" />
                                            <img className='w-full h-full absolute object-cover hover:opacity-0 transition-all duration-1000 group-hover:-translate-y-2 group-hover:duration-200' src={greenShirt} alt="greenShirt" />
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
                    <div>
                        <HiMiniBars3 className='text-3xl' />
                    </div>
                    <div>
                        <IoIosSearch className='text-[28px]' />
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