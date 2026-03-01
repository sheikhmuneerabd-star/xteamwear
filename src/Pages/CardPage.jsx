import ImageLeftPart from "../ComponentsCardPage/ImageLeftPart"
import LinkBar from "../ComponentsCardPage/LinkBar"

function CardPage() {
  return (
    <div className="xl:w-[92%] w-[97%] mx-auto border border-black xl:mt-[0px] mt-[55px]">
        <LinkBar />
        <ImageLeftPart />
    </div>
  )
}

export default CardPage