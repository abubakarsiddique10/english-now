const TextField = ({ handleChange, placeholder, type, value, name, required }) => {
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }

    return (
        <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            value={value} />
    )
}
export default TextField;