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
                                <p className="text-content w-full">
                                    Assalamualaikum. How are you all?  Hopefully you all are good.Alhamdulillah, I'm ok. What are you doing now? Now, I'm passing time in this group for the purpose of practice English. By the way,What about your practice condition?  I'm practice condition is not good. But, I'm trying again start my practice. For this reason, In this evening, I'm making some task.I will complete this task. I think, when i written some task that time this paper helps to remember my task.Please, keep me in your prayer.So that i will practice
                                </p>
                            </div>
                        </div>

                        <div className="card-indention">
                            <div className="px-0 lg:px-4">
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
                                <p className="text-content w-full">
                                    Assalamualaikum. How are you all?  Hopefully you all are good.Alhamdulillah, I'm ok. What are you doing now? Now, I'm passing time in this group for the purpose of practice English. By the way,What about your practice condition?  I'm practice condition is not good. But, I'm trying again start my practice. For this reason, In this evening, I'm making some task.I will complete this task. I think, when i written some task that time this paper helps to remember my task.Please, keep me in your prayer.So that i will practice
                                </p>
                            </div>
                        </div>

                        <div className="card-indention">
                            <div className="px-0 lg:px-4">
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
        </>
    )
}
export default Article;