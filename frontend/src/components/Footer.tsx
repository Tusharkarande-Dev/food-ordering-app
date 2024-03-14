import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
       <div className="container mx-auto flex flex-col gap-2 justify-between items-center md:flex-row">
       <Link to='/' className="text-3xl font-bold tracking-tight text-white">EatVerse</Link>
       <div className="text-white text-sm font-bold tracking-tight flex gap-4">
        <span>Privacy Policy</span>
        <span>Terms of Service</span> 
       </div>
       </div>
    </div>
  )
}

export default Footer