
import {EmojiHappyIcon, PhotographIcon} from "@heroicons/react/outline";

export default function Tweet(){
    return (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
            <img className="h-14 w-14 rounded-full cursor-pointer hover:brightness-95" src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Rubio_Circle.png" alt=""/>
            <div className="w-full divide-y divide-gray-200">
                <div className="">
                    <textarea className="w-full border-none focus:ring-0 text-lg placeholder:border-gray-700 tracking-wide min-h-[50px] text-gray-700" name="post" id="post" rows="2" placeholder="What's happening?"></textarea>
                </div>
                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex">
                        <PhotographIcon className="h-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
                        <EmojiHappyIcon className="h-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
                    </div>
                    <button className="bg-blue-400 text-white px-4 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50" disabled>Tweet</button>
                </div>
            </div>
        </div>
    )
}