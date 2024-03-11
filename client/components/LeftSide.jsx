"use client"
import { sidebarIcons } from "@/contant";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscSignOut } from "react-icons/vsc";


const LeftSide = () => {
  const pathname = usePathname()
  return (
    <div className="flex sm:flex-col gap-7 sm:mt-6">
      {sidebarIcons.map((item) => {
        const isActive = pathname === item.path
       return <Link href={item.path} key={item.name} className={`flex items-center gap-4 px-6 mx-4 mt-3 text-2xl max-lg:justify-center hover:bg-sky-500 hover:text-white hover:rounded-md hover:py-3 hover:backdrop-blur-lg hover:drop-shadow-md hover:duration-200 ${isActive && "bg-sky-500 text-white rounded-md py-3 drop-shadow-md backdrop-blur-lg"}`}>
        
           <i>{item.icon}</i>
          <p className="text-lg max-lg:hidden">{item.name}</p>
        
        </Link>
})}
     {/* <div className="flex items-center gap-4 px-6 ">
<VscSignOut size={24}/>

<SignOutButton className="text-lg fon-medium max-lg:hidden">
  Sign Out
</SignOutButton>

</div> */}
    </div>



  )
}

export default LeftSide

