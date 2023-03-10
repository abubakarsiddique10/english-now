
const PostButton = ({ children, handlePost }) => {
    return (
        <button onClick={handlePost} style={{ border: "1px solid #1D4ED8" }} class="inline-block px-4 py-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight capitalize rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">{children}</button>
    )
}
export default PostButton