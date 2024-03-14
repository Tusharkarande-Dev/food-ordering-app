import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"

const MobileNav = () => {
  return (
    <Sheet>
       <SheetTrigger>
            <MenuIcon className="text-orange-500" size={35} />
       </SheetTrigger>
       <SheetContent className="space-y-3">
           <SheetTitle>
            <span>Welcome to EatVerse.com!</span>
           </SheetTitle>
           <Separator/>
           <SheetDescription className="flex">
               <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
           </SheetDescription>
       </SheetContent>
    </Sheet>
  )
}

export default MobileNav