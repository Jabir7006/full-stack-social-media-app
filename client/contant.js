import { GoHome } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";




export const sidebarIcons = [
  {
    name: "Home",
    path: "/",
    icon: <GoHome />,
  },
  {
    name: "People",
    path: "/users",
    icon: <SlPeople />,
  },
  {
    name: "Search",
    path: "/search",
    icon: <BsSearch />,
  },
  {
    name: "Create Post",
    path: "/create-post",
    icon: <IoCreateOutline />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <AiOutlineUser />,
  },
];
