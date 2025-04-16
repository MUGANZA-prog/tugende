import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Bell,  CircleUser } from "lucide-react"
import Link from "next/link"
import MyImage from "../myComponents/myImage"
import { UserProfile } from "./user-profile"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 shadow-md md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Link href="/" className="flex items-center gap-2 font-semibold">
        <MyImage className=" size-10 object-contain" src="/logo.png" />
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-4">
       
        <Button variant="ghost" size="icon" className="rounded-full h-14 w-14">
          <Bell className="h-8 w-8" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" className=" h-14">
        <UserProfile name="YvesMaurice" workspace="Yves'account" image="https://img.freepik.com/free-photo/man-wearing-round-eyeglasses-casual-t-shirt_273609-19641.jpg?uid=R196195147&ga=GA1.1.534869810.1744706868&semt=ais_hybrid&w=740" />
        </Button>
       </div>
    </header>
  )
}
