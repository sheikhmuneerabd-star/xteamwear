import sponserPosition from '../assets/sponserPosition/sponserPosition.webp';

import { IoLogoWhatsapp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoShirt } from "react-icons/io5";
import { TbShirtFilled } from "react-icons/tb";
import { useEffect, useRef, useState } from 'react';

import { IoCloudUploadOutline } from "react-icons/io5";

import { gsap } from "gsap";

function SizingSystem({ product, selectedColor, setSelectedColor }) {

    const selectedVariant = product.variants.find((v) => v.color === selectedColor) || product.variants[0];

    const [activeImage, setActiveImage] = useState(selectedVariant.images[0]);

    useEffect(() => {
        setActiveImage(selectedVariant.images[0]);
    }, [selectedVariant]);

    const [teamName, setTeamName] = useState(false);
    const [playerNumber, setPlayerNumber] = useState(false);
    const [logo, setLogo] = useState(false);
    const [sponsor, setSponsor] = useState(false);

    const fileRef = useRef();
    const handleRef = () => {
        fileRef.current.click();
    }

  return (
    <div className="xl:w-[45%] md:w-[55%] w-full md:mt-0 mt-5 md:z-0 z-50 bg-white">
        <div className='md:w-[85%] w-[89%] mx-auto space-y-4'>
            <h2 className='text-2xl font-semibold mt-1'>{product.name}</h2>
            <p className='text-gray-600 text-[15px] font-medium line-clamp-2'>Feature CONVEX-FIT fabric Made from 100% polyester wicking knit with 92% polyester / 8% spandex wicking pinhole mesh High-tech</p>
            <div className='flex flex-wrap gap-2 text-2xl '>
                <p className='line-through'>{product.oldPrice}</p>
                <span className='text-red-500 font-semibold'>{product.newPrice}</span>
            </div>
            <p className='underline hover:text-gray-600 w-fit cursor-pointer text-sm'>Size Chart</p>
            <div className='flex items-center'>
                <p className='text-sm font-medium'>Color: <span className='font-normal text-gray-600'>blue</span></p>
                <div className='md:block hidden w-[75%] h-[1px] border border-gray-200 mt-[5px] ml-1'></div>
            </div>
            <div className='flex gap-[9px]'>
                {
                    product.variants.map((variant, i) => (
                        <div key={i} className={`w-[60px] border-[1.4px] p-[3px] rounded-lg cursor-pointer ${selectedColor === variant.color ? "border-blue-900" : "border-gray-300"}`}
                            onClick={() => setSelectedColor(variant.color)}>
                            <img className='rounded-lg' src={variant.icon} alt="shirt" />
                        </div>
                    ))
                }
            </div>
            <div className='flex gap-2 text-[15px]'>
                <p className='font-medium'>Step 1: Choose a decoration option</p>
                <span>Standard</span>
            </div>
            <div className='flex gap-3'>
                <button className='bg-black text-gray-100 w-[105px] rounded font-semibold text-lg h-[40px]'>Standard</button>
                <button className='text-gray-700 w-[105px] rounded font-semibold text-[18px] border border-gray-600 h-[40px]'>Bespoke</button>
            </div>
            <div>
                <img src={sponserPosition} alt="" />
            </div>
            <div>
                <p className='font-medium'>Step 2:Team Information</p>
                <div className='flex flex-wrap gap-3 text-black mt-1'>
                    <label class="flex items-center gap-1 cursor-pointer" onChange={() => setTeamName(prev => !prev)}>
                        <input className='w-5 h-5 border border-gray-300 accent-blue-500 rounded-md checked:bg-blue-600 checked:border-blue-600 text-white' type="checkbox" />
                        <span className='font-semibold text-gray-800'>Team Name</span>
                    </label>
                    <label class="flex items-center gap-1 cursor-pointer" onChange={() => setPlayerNumber(prev => !prev)}>
                        <input className='w-5 h-5 border border-gray-300 accent-blue-500 rounded-md checked:bg-blue-600 checked:border-blue-600 text-white' type="checkbox" />
                        <span className='font-semibold text-gray-800'>Player Number</span>
                    </label>
                    <label class="flex items-center gap-1 cursor-pointer" onChange={() => setLogo(prev => !prev)}>
                        <input className='w-5 h-5 border border-gray-300 accent-blue-500 rounded-md checked:bg-blue-600 checked:border-blue-600 text-white' type="checkbox" />
                        <span className='font-semibold text-gray-800'>Logo</span>
                    </label>
                    <label class="flex items-center gap-1 cursor-pointer" onChange={() => setSponsor(prev => !prev)}>
                        <input className='w-5 h-5 border border-gray-300 accent-blue-500 rounded-md checked:bg-blue-600 checked:border-blue-600 text-white' type="checkbox" />
                        <span className='font-semibold text-gray-800'>Sponsor</span>
                    </label>
                </div>
                <div className={`mt-2 ${teamName ? "block" : "hidden"}`}>
                    <h2 className='font-medium'>Team Name</h2>
                    <textarea className='w-full mt-1 h-[70px] border border-black rounded p-3 outline-none' id=""></textarea>
                </div>
                <div className={`mt-2 ${playerNumber ? "block" : "hidden"}`}>
                    <h2 className='font-medium'>Player Number Option</h2>
                    <select className='border mt-1 border-black w-full p-2 font-medium rounded cursor-pointer'>
                        <option value="">Please choose</option>
                        <option value="Both Sides">Both Sides</option>
                        <option value="Only Back Number">Only Back Number</option>
                        <option value="Ony Front Number">Ony Front Number</option>
                    </select>
                </div>
                <div className={`font-medium mt-2 ${logo ? "block" : "hidden"}`}>
                    Logo <span className='text-[14px] text-red-600'>*</span>
                    <div className='w-[60px] mt-[7px] h-[60px] flex justify-center items-center border-[1.3px] border-dashed border-gray-800 rounded-md cursor-pointer'
                        onClick={handleRef}>
                        <IoCloudUploadOutline className='text-2xl text-gray-800' />
                        <input className='hidden' ref={fileRef} type="file" onChange={(e) => console.log(e.target.files[0])} />
                    </div>
                </div>
                <div className={`space-y-4 mt-3 ${sponsor ? "block" : "hidden"}`}>
                    <div>
                        <h2 className='font-medium'>Sponsor Option</h2>
                        <select className='border mt-1 border-black w-full p-2 font-medium rounded cursor-pointer'>
                            <option value="">Please choose</option>
                            <option value="Sponsor Text">Sponsor Text</option>
                            <option value="Sponsor Image">Sponsor Image</option>
                        </select>
                    </div>
                    <div>
                        <h2 className='font-medium'>Sponsor Location</h2>
                        <select className='border mt-1 border-black w-full p-2 font-medium rounded cursor-pointer'>
                            <option value="">Please choose</option>
                            <option value="Sponsor Text">1.Front Chest(Replacing TeamName)</option>
                            <option value="Sponsor Image">2.Front Belly (Low Position)</option>
                            <option value="Sponsor Image">3.Back Waist (Low Position)</option>
                            <option value="Sponsor Image">4.Replacing Play Name</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <p className='font-medium'>Step 3:Special requirements and additional notes</p>
                <textarea className='w-full mt-1 h-[70px] border border-black rounded p-3 outline-none' id=""></textarea>
            </div>
            <div>
                <p className='font-medium'>Step 4: Player Information</p>
                <p className='font-medium mt-1'>Number of Players</p>
                <select className='border mt-1 border-black w-full p-2 font-medium rounded cursor-pointer'>
                    <option value="">Please choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <button className='w-full h-[50px] border rounded-md font-semibold text-sm border-yellow-400 hover:bg-yellow-400 transition-all duration-100'>ADD TO CART</button>
            <div>
                <div className='flex flex-wrap items-center text-[13px]'>
                    <span>Contact us on</span>
                    <span className='flex items-center cursor-pointer text-blue-600 font-semibold ml-1'><IoLogoWhatsapp className='text-green-600 text-2xl' /> WhatApp</span>
                    <span>,or send E-mail to</span>
                    <p className='ml-[3px] font-medium cursor-pointer'>support@xteamwear.com</p>
                </div>
            </div>
            <div>
                <div className='flex gap-2 items-center text-[15px] w-fit cursor-pointer'>
                    <TbTruckDelivery className='text-[26px]' />
                    <div>
                        <div className='flex items-center gap-4'>
                            <span>Free Shipping</span>
                            <BsQuestionCircleFill className='text-[16.5px] text-gray-400' />
                        </div>
                        <p className='text-blue-600'>Learn More</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center text-[15px] w-fit cursor-pointer'>
                    <IoShirt className='text-[26px]' />
                    <div>
                        <div className='flex items-center gap-4'>
                            <span>Low MOQ: 1 Piece Customization</span>
                            <BsQuestionCircleFill className='text-[16.5px] text-gray-400' />
                        </div>
                        <p className='text-blue-600'>Learn More</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center text-[15px] w-fit cursor-pointer'>
                    <TbShirtFilled className='text-[26px]' />
                    <div>
                        <div className='flex items-center gap-4'>
                            <span>Sublimation Printing - Won't Fade</span>
                            <BsQuestionCircleFill className='text-[16.5px] text-gray-400' />
                        </div>
                        <p className='text-blue-600'>Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SizingSystem