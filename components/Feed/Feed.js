import {SparklesIcon} from "@heroicons/react/outline";
import Tweet from "./Tweet";
import Post from "./Post";

export default function Feed(){
    const posts = [
        {
            id: "1",
            name: "Sahand Ghavidel",
            username: "codewithSahand",
            userImage: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",
            img: "https://globalcastaway.com/wp-content/uploads/2019/11/the-ultimate-guide-for-visiting-Angkor-Wat.jpg",
            text: "nice view!",
            timestamp: "2 hours ago",
        },
        {
            id: "2",
            name: "John Wick",
            username: "johnwich",
            userImage: "https://render.fineartamerica.com/images/rendered/default/flat/round-beach-towel/images/artworkimages/medium/3/john-wick-cucun-alfindo.jpg?&targetx=-20&targety=-3&imagewidth=823&imageheight=788&modelwidth=788&modelheight=788&backgroundcolor=000000&orientation=0",
            img: "https://media.istockphoto.com/photos/stone-face-asura-and-sunset-over-moat-angkor-thom-cambodia-picture-id589972482?k=20&m=589972482&s=612x612&w=0&h=t3wNtan524zUb-GgT3kk9scIU6gF-BH_PJUgky1Vs4k=",
            text: "wow!",
            timestamp: "2 days ago",
        },
        {
            id: "3",
            name: "Thor love thunder",
            username: "thorlovethunder",
            userImage: "https://pbs.twimg.com/media/DBTobXBU0AA6qdc.jpg",
            img: "https://static.onecms.io/wp-content/uploads/sites/6/2022/05/24/Thor-Love-and-Thunder-3.jpg",
            text: "see you at 9/July",
            timestamp: "5 days ago",
        },
        {
            id: "4",
            name: "Black Panther",
            username: "blackpanther",
            userImage: "https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png",
            img: "https://images.thedirect.com/media/article_full/black-panther-wakanda-forever-mcu-marvel-studios-angela-bassett.jpg",
            text: "see you at 9/Dec",
            timestamp: "now",
        }
    ]
    return (
        <div className="xl:ml-[16rem] border-2 border-r border-gray-200 xl:min-w-[55%] sm:min-w-[55%] sm:ml-[63px] flex-grow max-w-xl">
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className=" flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5" />
                </div>
            </div>
            <Tweet/>
            {posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}