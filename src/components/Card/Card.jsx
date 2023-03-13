import { FaRegCommentDots } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
import moment from "moment";
import { useState } from "react";

const Card = ({ post }) => {
    const { userName, createdAt, description, postImgURL, userImgURL, } = post;
    const [toggle, setToggle] = useState(false)
    const postTime = moment(createdAt)?.fromNow();

    return (
        <>
            <article className="bg-white border rounded-md mb-2">
                <div className="card " >
                    <div className="card-body">
                        <div className="card-top p-4 pb-0">
                            <div className="flex flex-wrap items-top gap-2 mb-1">
                                <img src={`http://localhost:5000/assets/avater/${userImgURL}`} className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                    <h5 className="text-[15px] font-medium leading-5 text-[#050505]">{userName}</h5>
                                    <p className="text-[13px] font-normal leading-5 text-[#65676b]">{postTime === "an hour ago" ? "1 hour ago" : postTime}</p>
                                </div>
                            </div>
                            <div onClick={() => setToggle(!toggle)} className="mb-2 cursor-pointer transition-all duration-1000">
                                <p className="text-content w-full cursor-pointer">{toggle ? description : description.length > 200 ? description.slice(0, 200) + "... See more" : description}</p>
                            </div>
                        </div>

                        <div className="card-indention">
                            <div className="px-0 lg:px-4">
                                {postImgURL ? <img src={`http://localhost:5000/assets/usersPostImage/${postImgURL}`} className="card-img h-auto object-fill mb-3 w-auto h-auto" /> : ""}
                            </div>


                            <div className="card-bottom flex justify-between mx-4 border-t py-1">
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-1 hover:bg-[#F2F2F2] px-3 py-1.5 rounded">
                                        <BiLike className="text-xl" />
                                        <span className="text-sm">15 Reactions</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 hover:bg-[#F2F2F2] px-3 py-1.5 rounded">
                                        <FaRegCommentDots className="text-lg" />
                                        <span className="text-sm ">2 Comments</span>
                                    </div>
                                </div>
                                <div className="hover:bg-[#F2F2F2] px-3 py-2 rounded">
                                    <BsBookmarkHeart className="text-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default Card;