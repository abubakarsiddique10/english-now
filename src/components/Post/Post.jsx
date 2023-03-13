import { useContext, useState } from "react"
import { BsX } from "react-icons/bs";
import { AppContext } from "../../App"
import { GrGallery } from "react-icons/gr";
import moment from 'moment';
import Textarea from "../Form/Textarea";


const Post = () => {
    const { user } = useContext(AppContext);
    const phoneNumber = user?.phoneNumber;
    const userImgURL = user?.userImgURL;
    const userName = user?.userName;

    const { togglePost, handlePost } = useContext(AppContext);

    const [value, setValue] = useState({
        description: "",
        postImgURL: "",
        comments: [],
        likes: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('userImgURL', userImgURL);
        formData.append('phoneNumber', phoneNumber);
        formData.append('description', value.description);
        formData.append('postImgURL', value.postImgURL);
        formData.append('comments', value.comments);
        formData.append('likes', value.likes);

        fetch('http://localhost:5000/api/v1/userPost', {
            method: "POST",
            body: formData
        }).then((res) => res.json())
            .then(data => console.log(data))
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
                            placeholder="Write your post content here..."
                            value={value.description}
                            required={true}
                            name="description" />
                    </div>
                    <div className="flex items-center my-3 justify-center">
                        <h3 className="font-medium mr-4">Add an image to your post</h3>
                        <label className="border-blue cursor-pointer ">
                            <GrGallery className="text-xl" />
                            <input
                                onChange={(e) => setValue({ ...value, [e.target.name]: e.target.files[0] })}
                                type='file'
                                name="postImgURL"
                                className="hidden" />
                        </label>
                    </div>
                    <div >
                        <button
                            className={`w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${!value.description && "opacity-60"}`}
                            disabled={!value.description}
                            type="submit"
                            width="w-full">Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Post