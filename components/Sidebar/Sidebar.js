import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {DotsHorizontalIcon, HomeIcon, InboxIcon} from "@heroicons/react/solid";
import {BellIcon, HashtagIcon, ClipboardIcon, BookmarkIcon, DotsCircleHorizontalIcon, UserIcon} from "@heroicons/react/outline";

export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
            {/*Twitter Logo*/}
            <div className="p-0 xl:px-1">
                <Image width="30" height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"></Image>
            </div>
            {/*Menu*/}
            <div className="mb-2.5 mt-4 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} Active/>
                <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
                <SidebarMenuItem text="Notification" Icon={BellIcon}/>
                <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
                <SidebarMenuItem text="Profile" Icon={UserIcon}/>
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
            </div>

            {/*Button*/}
            
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"> Tweet</button>
            
            {/*Mini-Profile*/}
            
            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img className="h-10 w-10 rounded-full xl:mr-2" src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Rubio_Circle.png" alt="user-img"/>
                <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold">Sahand Ghavidel</h4>
                    <p className="text-gray-500">@codewithsahand</p>
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
            </div>
        </div>
    )
}
