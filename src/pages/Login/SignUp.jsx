import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import Label from "../../components/Form/Label"
import TextField from "../../components/Form/TextField"
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from "react-phone-number-input"
import { Button } from "../../components/Button/Button";

const SignUp = () => {
    const [value, setValue] = useState({
        userName: "",
        phoneNumber: "",
        password: "",
        userImgURL: "avater.png",
    });
    const [error, setError] = useState("")
    const navigate = useNavigate();


    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let isValid = value.phoneNumber && isValidPhoneNumber(value.phoneNumber) ? true : false;

        if (isValid) {
            fetch('http://localhost:5000/api/v1/user/signup', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(value)
            })
                .then(data => data.json())
                .then(data => {
                    const message = data.error?.split('user validation failed:')[1]
                    if (message) {
                        setError(message)
                    }
                    else if (data.error?.includes('E11000 duplicate key')) {
                        setError('Phone number already exist')
                    }
                    else if (data?.message) {
                        navigate('/login')
                    }
                })
        } else {
            setError('Invalid phone number')
        }
    }


    return (
        <div className="w-full h-screen flex justify-center items-center height">
            <div className="w-[500px] border p-5">
                <h1 className="mb-10">SignUp</h1>
                <form onSubmit={handleFormSubmit}>

                    <div className="w-full">
                        <Label label="Enter your name" />
                        <TextField
                            handleChange={handleChange}
                            placeholder="Name"
                            type="text"
                            required={true}
                            value={value.userName}
                            name="userName" />
                    </div>

                    <div className="w-full">
                        <Label label="Enter your mobile number" />
                        <PhoneInput
                            international
                            defaultCountry="BD"
                            countryCallingCodeEditable={false}
                            value={value.phoneNumber}
                            onChange={e => setValue({ ...value, phoneNumber: e })} />
                    </div>

                    <div className="w-full">
                        <Label label="Enter your password" />
                        <TextField
                            handleChange={handleChange}
                            placeholder="Password"
                            type="password"
                            required={true}
                            value={value.password}
                            name="password" />
                    </div>
                    {error ? <p>{error}</p> : ""}
                    <div className="text-center">
                        <Button width="w-[150px]" type="submit">Sign Up</Button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Already have an acount</span>
                        <Link className="text-blue-500" to="/login"> Login</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default SignUp