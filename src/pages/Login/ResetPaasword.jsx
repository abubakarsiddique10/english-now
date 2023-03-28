import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { useState } from "react"
import PhoneInput from "react-phone-number-input"
import { isValidPhoneNumber } from "react-phone-number-input"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import baseURL from "../../api/api"
import { Button } from "../../components/Button/Button"
import Label from "../../components/Form/Label"
import auth from "../../firebase.init"

const ResetPaasword = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState("");
    const [otp, setOtp] = useState("");
    const navigate = useNavigate()


    const recaptha = (phone) => {
        const recapthaVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth);
        recapthaVerifier.render();
        return signInWithPhoneNumber(auth, phone, recapthaVerifier)
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let isValid = phoneNumber && isValidPhoneNumber(phoneNumber) ? true : false;
        if (!isValid) return setError('number is not valid')

        const isExist = await fetch(`${baseURL}/api/v1/user/isUserExist/${phoneNumber}`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    return true
                } else {
                    return false
                }
            });

        if (!isExist) {
            return setError("No user found. please create an account")
        } else (setError(""));

        try {
            const response = await recaptha(phoneNumber);
            setResult(response);
            console.log(response)
            toast.success('OTP sent successfully', {
                autoClose: 10000,
            })
        } catch (error) {
        }
    }


    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const confirm = await result.confirm(otp);
            console.log(confirm)
            if (confirm?.user?.phoneNumber) {
                navigate(`/newPassword/${phoneNumber}`)
            } else { console.log(confirm) }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="height flex flex-col justify-center items-center">
            <div className="w-full max-w-[500px] border px-2 py-10 md:p-10">
                {!result ? <>
                    <h1 className="mb-8 text-center text-2xl font-medium">Reset your paasword</h1>
                    <form onSubmit={handleFormSubmit}>

                        <div id="recaptcha-container"></div>
                        <div className="w-full pb-3">
                            <Label label="Enter your mobile number" />
                            <PhoneInput
                                international
                                defaultCountry="BD"
                                countryCallingCodeEditable={false}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e)} />
                        </div>

                        {error ? <p className="text-red-500">{error}</p> : ""}

                        <div className="text-center">
                            <Button width="full" type="submit">submit</Button>
                        </div>
                    </form>
                </> : <div className="mt-5">
                    <div className="mb-5 text-center">
                        <h1 className="text-3xl mb-1 login_title">Verification Code</h1>
                        <span className="text-sm">Please enter the OTP sent to your phone number</span>
                    </div>
                    <form onSubmit={handleVerifyOTP}>
                        <input onChange={e => setOtp(e.target.value)} type="text" placeholder="Enter otp" className="border p-2 w-full mb-4" name="otp" value={otp} />
                        <Button width="full" type="submit">Submit</Button>
                    </form>
                </div>}
            </div>
        </div>
    )
}
export default ResetPaasword