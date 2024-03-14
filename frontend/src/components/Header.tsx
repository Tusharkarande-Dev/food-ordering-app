import { Link } from "react-router-dom"
import MobileNav from "./nav/MobileNav"
import MainNav from "./nav/MainNav"

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
          <Link to='/' className="text-3xl font-bold tracking-tight text-orange-500">EatVerse</Link>
          <div className="hidden md:flex items-center">
            <MainNav />
          </div>
          <div className="md:hidden flex items-center">
            <MobileNav />
          </div>
      </div>
    </div>
  )
}

export default Header