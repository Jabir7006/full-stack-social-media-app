import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { TbPhotoPlus } from "react-icons/tb";


export default async function Home() {
  return (
    <div className="flex justify-between items-center gap-4">
     <UserButton />
    <Link href="create-post" className="bg-gray-200 px-8 py-2 rounded-full text-gray-600 w-full">What's on your mind?</Link>

    <Link href="create-post" className=""> <TbPhotoPlus size={25}/> </Link>
    </div>
  );
}
