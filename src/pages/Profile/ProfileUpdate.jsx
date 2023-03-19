import { useContext, useEffect, useState } from "react"
import Label from "../../components/Form/Label"
import TextField from "../../components/Form/TextField"
import 'react-phone-number-input/style.css'
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import baseURL from "../../api/api";

const ProfileUpdate = () => {
    const { user, error, setUser } = useContext(AppContext);
    const navigate = useNavigate()
    const [value, setValue] = useState({
        userName: "",
        imageURL: "",
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleImage = (e) => {
        setValue({ ...value, imageURL: e.target.files[0] })
    }

    const handleProfileEdit = (e) => {
        e.preventDefault();
        const formData = new FormData;
        formData.append('userName', value.userName);
        formData.append('imageURL', value.imageURL);
        fetch(`${baseURL}/api/v1/user/updateProfile/${user.phoneNumber}`, {
            method: "PATCH",
            body: formData,
        }).then(res => res.json())
            .then(data => {
                if (data.status) {
                    navigate('/')
                    window.location.reload()
                } else {
                }
            })
            .catch((error) => {
            })
    }


    return (
        <div className="w-full h-screen flex justify-center items-center height">
            <div className="w-[500px] border p-5">
                <h1 className="mb-10">Edit your profile</h1>
                <form onSubmit={handleProfileEdit}>

                    <div className="w-full">
                        <Label label="Enter your name" />
                        <TextField
                            handleChange={handleChange}
                            placeholder="Name"
                            type="text"
                            required={false}
                            value={value.userName}
                            name="userName" />
                    </div>

                    <div className="w-full">
                        <Label label="Enter Image" />
                        <input
                            onChange={handleImage}
                            placeholder="Image"
                            type="file"
                            name="imageURL"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2.5 px-4 mb-3" />
                    </div>

                    <div className="text-center">
                        <Button width="full" type="submit">submit</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default ProfileUpdate