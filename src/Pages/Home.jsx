import CategoryBar from "../Components/CategoryBar"
import Navbar from "../Components/Navbar"
import NavContact from "../Components/NavContact"
import TeamImage from "../Components/TeamImage"

function Home() {
  return (
    <div>
        <NavContact />
        <Navbar />
        <CategoryBar />
        <TeamImage />
    </div>
  )
}

export default Home