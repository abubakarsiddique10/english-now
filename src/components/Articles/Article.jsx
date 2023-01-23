import { FaRegCommentDots } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";

const Article = () => {
    return (
        <>

            <article className=" bg-white border rounded-md mb-2">
                <div className="card">
                    <div className="card-body">
                        <div className="card-top p-4 pb-0">
                            <div className="flex flex-wrap items-top gap-2 mb-1">
                                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--VpR-xpfa--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/44940/c48f6904-fc82-46a3-8ed7-b2baac65cf9c.jpg" className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                    <h5 className="text-[15px] font-medium leading-5 text-[#050505]">Alicia Sykes</h5>
                                    <p className="text-[13px] font-normal leading-5 text-[#65676b]">Jan 19 (2 hours ago)</p>
                                </div>
                            </div>
                            <div className="mb-2">
                                <p className="card-details text-[15px] font-normal leading-5 text-[#050505]">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, modi ducimus illum vel facere necessitatibus animi voluptates iure accusamus debitis consequatur alias assumenda voluptate perferendis. Ut nulla culpa nam expedita?
                                </p>
                            </div>
                        </div>

                        <div className="card-indention">
                            <div className="">
                                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--C-Zm_m_9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9pf1tn6ixwtfh90qa01l.jpg" className="card-img h-auto w-full object-cover mb-3" />
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

            <article className=" bg-white border rounded-md mb-2">
                <div className="card">
                    <div className="card-body">
                        <div className="card-top p-4 pb-0">
                            <div className="flex flex-wrap items-top gap-2 mb-1">
                                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--VpR-xpfa--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/44940/c48f6904-fc82-46a3-8ed7-b2baac65cf9c.jpg" className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                    <h5 className="text-[15px] font-medium leading-5 text-[#050505]">Alicia Sykes</h5>
                                    <p className="text-[13px] font-normal leading-5 text-[#65676b]">Jan 19 (2 hours ago)</p>
                                </div>
                            </div>
                            <div className="mb-2">
                                <p className="card-details text-[15px] font-normal leading-5 text-[#050505]">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, modi ducimus illum vel facere necessitatibus animi voluptates iure accusamus debitis consequatur alias assumenda voluptate perferendis. Ut nulla culpa nam expedita?
                                </p>
                            </div>
                        </div>

                        <div className="card-indention">
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--C-Zm_m_9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9pf1tn6ixwtfh90qa01l.jpg" className="card-img h-auto w-full object-cover mb-3 px-4" />

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
export default Article;