import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import Label from "../../components/Form/Label"
import TextField from "../../components/Form/TextField"
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from "react-phone-number-input"
import { Button } from "../../components/Button/Button";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from "../../firebase.init";

const SignUp = () => {
    const [value, setValue] = useState({
        userName: "",
        phoneNumber: "",
        password: "",
        userImgURL: "avater.png",
    });
    const [result, setResult] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }


    const recaptha = (phone) => {
        const recapthaVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth);
        recapthaVerifier.render();
        return signInWithPhoneNumber(auth, phone, recapthaVerifier)
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let isValid = value.phoneNumber && isValidPhoneNumber(value.phoneNumber) ? true : false;
        if (value.userName.length < 3) return setError('name must be at least 3 characters');
        if (!isValid) return setError('number is not valid');
        if (value.password.length < 5) return setError('password must be at least 5 characters');

        const checkUser = await fetch(`http://localhost:5000/api/v1/user/checkUser/${value.phoneNumber}`)
            .then(res => res.json())
            .then(data => {
                if (!data.status) {
                    return data.status
                } else {
                    return data.status
                }
            });
        if (checkUser) {
            return setError('This number is already registered')
        }

        try {
            setError('');
            const response = await recaptha(value.phoneNumber);
            setResult(response);
        } catch (error) {
        }
    }

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const confirm = await result.confirm(otp);
            if (confirm?.user?.phoneNumber) {
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
                        else if (data?.message) {
                            navigate('/login')
                        }
                    })
            }
        } catch (err) {
            setError(err.message)
        }

    }

    return (
        <div className="h-screen flex justify-center items-center height">
            <div className="w-full max-w-[500px] border px-2 md:p-10">
                <h1 className="mb-10 login_title">SignUp</h1>
                {!result ? <form onSubmit={handleFormSubmit}>
                    <div className="w-full">
                        <Label label="Your name" />
                        <TextField
                            handleChange={handleChange}
                            placeholder="Name"
                            type="text"
                            required={true}
                            value={value.userName}
                            name="userName" />
                    </div>

                    <div className="w-full mb-6">
                        <Label label="Your mobile number" />
                        <PhoneInput
                            international
                            defaultCountry="BD"
                            countryCallingCodeEditable={false}
                            value={value.phoneNumber}
                            onChange={e => setValue({ ...value, phoneNumber: e })} />
                    </div>
                    <div id="recaptcha-container" />

                    <div className="w-full">
                        <Label label="Enter password" />
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
                        <Button width="full" type="submit">Sign Up</Button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Already have an acount</span>
                        <Link className="text-blue-500" to="/login"> Login</Link>
                    </div>
                </form> :
                    <div className="mt-8">
                        <h1 className="text-2xl mb-3">Enter OTP</h1>
                        <form onSubmit={handleVerifyOTP}>
                            <input onChange={e => setOtp(e.target.value)} type="text" placeholder="OTP" className="border p-2 w-full mb-4" name="otp" value={otp} />
                            <Button width="full" type="submit">Submit</Button>
                        </form>
                    </div>}
            </div>
        </div>
    )
}
export default SignUp