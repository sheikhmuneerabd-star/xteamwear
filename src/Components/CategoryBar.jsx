import { TiThSmallOutline } from "react-icons/ti";
import { IoIosArrowUp } from "react-icons/io";
import categoryLogo from '../assets/categoryLogo.webp'
import gsap from "gsap";

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

  return (
    <div className="w-full categoryBackground">
        <div className="w-[92%] h-[47px] mx-auto flex justify-between items-center">
            <div className="h-[29px] mt-2 flex gap-1">
                <div>
                    <TiThSmallOutline className="text-[22px]" />
                </div>
                <div className="flex items-center mb-3">
                    <span className="text-[16px] font-medium mr-[2px]">Category</span>
                    <IoIosArrowUp className="mt-[5px]" />
                </div>
            </div>

            <div className="flex items-center gap-5 font-semibold text-[15px] mr-2">
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>Home</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
                </div>
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>Soccer</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
                </div>
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>Basketball</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
                </div>
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>Winter Wear</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
                </div>
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>More Teamwear</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
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
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>Sports Lab</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
                </div>
                <div className="relative cursor-pointer" onMouseEnter={(e) => enter(e)} onMouseLeave={(e) => leave(e)}>
                    <span>Blogs</span>
                    <span className="line absolute left-0 -bottom-1 h-[2px] w-full"></span>
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