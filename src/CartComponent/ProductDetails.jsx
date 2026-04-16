import OrderSummary from "./OrderSummary"
import ProductsDetailsDemo from "./ProductsDetailsDemo"
import { useContext, useState } from 'react';
import { dataContext } from '../UseContext/UseContext';
import { AiFillSafetyCertificate } from "react-icons/ai";

function ProductDetails() {
    const { sizingDetailData, product, cart, increase, decrease } = useContext(dataContext);
    let totalQty = cart?.reduce((acc, item) => acc + (Number(item.qty) || 0), 0);
    let price = Number(product?.newPrice) || 0;
    let total = totalQty * price;
  return (
    <div className="mt-8 flex xl:flex-row flex-col justify-between">
        <div className="xl:w-[65%] w-full overflow-x-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center px-3 font-semibold text-sm py-3 bg-gray-50 gap-2 sm:justify-between">
                <p>PRODUCT</p>
                <div className="hidden sm:flex justify-between w-full sm:w-[50%]">
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>TOTAL</p>
                </div>
            </div>
            {cart.length === 0 ? <div className='text-center text-2xl font-medium'>Not Cart</div> : 
            cart.map((item) => (
                <ProductsDetailsDemo key={item.id} cart={cart} sizingDetailData={sizingDetailData} id={item.id} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} image={item.variants[0].images[0]} color={item.variants[0].color} increase={increase} decrease={decrease} total={total} qty={item.qty} />
            ))}
            {/* Additional Comments */}
            <div className="mt-5">
                <h1 className="font-medium text-sm mb-2">Additional Comments</h1>

                <textarea
                className="xl:w-[75%] w-full h-[90px] outline-none border border-gray-400 rounded-md pt-3 pl-4 text-sm placeholder-gray-600"
                placeholder="Special instruction for seller..."
                ></textarea>

                <div className="flex items-center gap-1 mt-3">
                <AiFillSafetyCertificate className="text-2xl" />
                <p className="text-gray-600 text-[15px]">
                    Secure shopping guarantee
                </p>
                </div>
            </div>
        </div>
        <div className="xl:w-[33%] w-full">
            <OrderSummary />
        </div>
    </div>
  )
}

export default ProductDetails