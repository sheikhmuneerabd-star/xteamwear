import ContactUsFields from "../ContactComponent/ContactUsFields"
import GetInTouch from "../ContactComponent/GetInTouch"
import Link from "../ContactComponent/Link"

function ContactUs() {
  return (
    <div className="xl:w-[92%] w-[95%] mx-auto">
        <Link />
        <div className="flex md:flex-row flex-col justify-between mt-3">
            <ContactUsFields />
            <GetInTouch />
        </div>
    </div>
  )
}

export default ContactUs