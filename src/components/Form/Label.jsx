const Label = ({ label, text }) => {
    return (
        <div className="mb-2 leading-[15px]">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-black font-['Hind_Siliguri'] " htmlFor="grid-first-name">
                {label}
            </label>
            <span className="text-xs leading-[1px]">{text}</span>
        </div>
    )
}
export default Label;