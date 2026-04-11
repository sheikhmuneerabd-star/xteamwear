import CategoryBar from "../Components/CategoryBar";
import CopyRightFooter from "../Components/CopyRightFooter";
import FooterContact from "../Components/FooterContact";
import FooterSearch from "../Components/FooterSearch";
import Navbar from "../Components/Navbar";
import NavContact from "../Components/NavContact";
import WhatsApp from "./WhatsApp";

import { Outlet } from 'react-router-dom'

function MainComponent() {
  return (
    <div>
        <NavContact />
        <Navbar />
        <CategoryBar />
            <Outlet />
        <WhatsApp />
        <FooterSearch />
        <FooterContact />
        <CopyRightFooter />
    </div>
  )
}

export default MainComponent