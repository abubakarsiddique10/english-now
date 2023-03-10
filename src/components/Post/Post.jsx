import { useContext, useState } from "react"
import { BsX } from "react-icons/bs";
import { HandlerContext } from "../../App"
import { GrGallery } from "react-icons/gr";
import moment from 'moment';
import Textarea from "../Form/Textarea";


const Post = () => {
    const { togglePost, handlePost } = useContext(HandlerContext);
    const [value, setValue] = useState({
        description: "",
        image: "",
        author: { name: "", image: "", url: "" }
    });


    /*  const time = moment().format();
     const postTime = moment("2023-02-14T15:28:45+06:00");
     console.log(postTime.fromNow()) */

    const handleSubmit = (e) => {
        e.preventDefault()
        const time = moment().format()
        const formData = new FormData();

        formData.append('description', value.post);
        formData.append('image', value.image);
        formData.append('datePublished', time);

        fetch('http://localhost:5000/userspost', {
            method: "POST",
            body: formData
        })

        setValue({ post: "", image: "" })
        console.log(value)
    }

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className={`w-full max-w-[480px] fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] px-3 sm:px-8 py-8 pt-0 bg-white  ${togglePost ? "block" : "hidden"}`}>
                <div className="text-center relative">
                    <h1 className=" text-lg font-medium pb-3 pt-4 border-b">Create Post</h1>
                    <div onClick={handlePost} className="bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-full absolute top-1/2 right-0 translate-y-[-50%] flex justify-center items-center transition-all duration-200 cursor-pointer">
                        <BsX className="text-[28px]" />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="h-40">
                        <Textarea
                            handleChange={handleChange}
                            placeholder="What's on your mind?"
                            value={value.post}
                            required={true}
                            name="description" />
                    </div>
                    <div className="flex items-center my-3 justify-center">
                        <h3 className="font-medium mr-4">Add an image to your post</h3>
                        <label class="border-blue cursor-pointer ">
                            <GrGallery className="text-xl" />
                            <input
                                onChange={(e) => setValue({ ...value, [e.target.name]: e.target.files[0] })}
                                type='file'
                                name="image"
                                className="hidden" />
                        </label>
                    </div>
                    <div className="">
                        <button
                            class={`w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${!value.post && "opacity-60"}`}
                            disabled={!value.post}
                            type="submit"
                            width="w-full">Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Post