import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import { Button } from "../../components/Button/Button";
import Label from "../../components/Form/Label"
import TextField from "../../components/Form/TextField"
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from "react-phone-number-input"
import { AppContext } from "../../App";

const Login = () => {
    const { user } = useContext(AppContext)
    const [value, setValue] = useState({
        phoneNumber: "",
        password: "",
    });

    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let isValid = value.phoneNumber && isValidPhoneNumber(value.phoneNumber) ? true : false;

        if (isValid) {
            fetch('http://localhost:5000/api/v1/user/login', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(value)
            }).then(res => res.json())
                .then(({ token, error }) => {
                    if (token) {
                        localStorage.setItem('accessToken', token);
                        setError("");
                        navigate('/');
                        window.location.reload();
                    }
                    else if (error) {
                        setError(error)
                    }
                })
        }
        else {
            setError('Invalid phone number')
        }
    }


    return (
        <div className="w-full h-screen flex justify-center items-center height">
            <div className="w-[500px] border p-5">
                <h1 className="mb-10">Login</h1>
                <form onSubmit={handleFormSubmit}>

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
                            value={value.password}
                            required={true}
                            name="password" />
                    </div>

                    {error && <span>{error}</span>}

                    <div className="text-center">
                        <Button width="w-[150px]" type="submit">Log in</Button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Don't have account? please </span>
                        <Link className="text-blue-500" to="/signup"> Sign up</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Login