import blueFront from '../assets/shirtsImages/blueFront.webp';
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function ProductsDetailsDemo({ cart, sizingDetailData, id, name, oldPrice, newPrice, image, color, increase, decrease, total, qty }) {
    
  return (
    <div>
        <div className="border flex flex-col lg:flex-row items-start lg:items-center mt-2 p-4 gap-4">

            {/* LEFT SIDE */}
            <div className="flex flex-col sm:flex-row items-start gap-3 w-full lg:w-[55%]">

            {/* Image */}
            <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px] p-1">
                <img
                    src={image} 
                    alt={color}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="text-sm text-gray-600 space-y-2 w-full">
                <p className="cursor-pointer hover:underline text-black">
                {name}
                </p>
                <p className="flex items-center gap-2">
                {color} / L <FiEdit className="text-[15px]" />
                </p>
                <p>Cikers Sports</p>
                <p>decoration option: Standard</p>
                <p>Team Name: {sizingDetailData.teamName}</p>
                <p>Player Number Option: {sizingDetailData.playerNumberOption}</p>
                <p>Sponsor Option: {sizingDetailData.sponsorOption}</p>
                <p>Sponsor Location: {sizingDetailData.sponsorLocation}</p>
                <p>requierments: {sizingDetailData.note}</p>
                <p>Number Of Player: {sizingDetailData.players.length}</p>
                {sizingDetailData.players.map((player, i) => (
                    <div key={i}>
                        <p>Size1: {player.size}</p>
                        <p>Player 1 Name: {player.name}</p>
                        <p>Number1: {player.number}</p>
                    </div>
                ))}
                <p>Logo: {sizingDetailData.logo ? URL.createObjectURL(sizingDetailData.logo) : ""}</p>
            </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full lg:w-[45%] gap-4">

            {/* Price */}
            <div className="text-[14px]">
                <p className="line-through text-gray-500">
                Rs.{oldPrice.toLocaleString("en-PK")} PKR
                </p>
                <p>Rs.{newPrice.toLocaleString("en-PK")} PKR</p>
            </div>

            {/* Quantity */}
            <div className="border border-gray-400 rounded-md flex justify-between items-center w-[100px] h-[40px]">
                <div className="w-full h-full flex items-center justify-center text-2xl hover:bg-gray-300 cursor-pointer"
                onClick={() => {
                    const item = cart.find(i => i.id === id);
                    if(item?.qty > 1){
                        decrease(id);
                    }
                }}>
                -
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    {qty}
                </div>
                <div className="w-full h-full flex items-center justify-center text-xl hover:bg-gray-300 cursor-pointer"
                onClick={() => increase(id)}>
                +
                </div>
            </div>

            {/* Total + Remove */}
            <div className="flex justify-between items-center w-full sm:w-auto gap-3">
                <p>Rs.{total.toLocaleString("en-PK")} PKR</p>
                <IoMdClose className="text-xl cursor-pointer" />
            </div>

            </div>
        </div>
    </div>
  );
}

export default ProductsDetailsDemo