import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ShirtItem from './ShirtItem'
import data from '../ShirtData';
function ShirtCard() {
    
    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".shirt", {
        y: 100,
        duration:0.9,
        opacity:0,
        stagger:0.4,
        delay:0.3,
        scrollTrigger:{
            trigger:".shirt",
            scroll:"body",
            scrub:1,
            once: true,
            start: "top 80%",
            end:"top 30%"
        }
        })
    }, []);

  return (
    <>
        <div className='shirt grid grid-cols-1 min-[375px]:grid-cols-2 min-[475px]:grid-cols-2 min-[768px]:grid-cols-3 min-[1024px]:grid-cols-4 min-[1440px]:grid-cols-4 w-full gap-4'>
            {
                data.map((shirt) => (
                    <ShirtItem  key={shirt.id} shirt={shirt} />
                ))
            }
        </div>
    </>
  )
}

export default ShirtCard