import imageFront from '../assets/shirtsImages/front-shirt.jpg'
import imageBack from '../assets/shirtsImages/back-shirt.jpg'
import blueFront from '../assets/shirtsImages/blueFront.webp'
import blueBack from '../assets/shirtsImages/blueBack.webp'
import blueFrontTo from '../assets/shirtsImages/blueToFront.webp'
import blueBackTo from '../assets/shirtsImages/blueToBack.webp'
import redFront from '../assets/shirtsImages/redFront.webp'
import redBack from '../assets/shirtsImages/redBack.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ShirtItem from './ShirtItem'
function ShirtCard() {
    const data = [
        {
            id:1,
            variants: [
                { front:imageFront, back:imageBack, icon:imageFront, color:'GREEN & BLACK' },
                { front:blueFront, back:blueBack, icon:blueFront, color:'Grey-Blue' },
            ]
        },
        {
            id:2,
            variants: [
                { front:redFront, back:redBack, icon:redFront, color:'Red' },
                { front:blueFrontTo, back:blueBackTo, icon:blueFrontTo, color:'Blue' },
                { front:imageFront, back:imageBack, icon:imageFront, color:'GREEN & BLACK' }
            ]
        },
        {
            id:3,
            variants: [
                { front:blueFront, back:blueBack, icon:blueFront, color:'Grey-Blue' },
                { front:blueFrontTo, back:blueBackTo, icon:blueFrontTo, color:'Blue' },
                { front:imageFront, back:imageBack, icon:imageFront, color:'GREEN & BLACK' },
                { front:redFront, back:redBack, icon:redFront, color:'Red' }
            ]
        },
        {
            id:4,
            variants: [
                { front:blueFrontTo, back:blueBackTo, icon:blueFrontTo, color:'Blue' },
                { front:imageFront, back:imageBack, icon:imageFront, color:'GREEN & BLACK' },
                { front:blueFront, back:blueBack, icon:blueFront, color:'Grey-Blue' }
            ]
        }
    ]
    
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