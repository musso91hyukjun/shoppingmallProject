import { useState } from "react";
import { signup } from "../api/LoginAPI";


export default function Signup() {

    const [formData, setFormData] = useState({
        userid: '',
        password: '',
        checkPassword: '',
        name: '',
        email: '',
        tel: '',
        address: ''
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
    }

    function handleSignup(e) {
        e.preventDefault();
        try {
            signup(formData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container">
            <form className="signupForm w-50 m-auto pt-3" >
                <h2 className="mb-5">회원가입</h2>
                <ul >
                    <li><input className="w-100 mb-3 form-control" type="text" name="userid" id="userid" placeholder='ID' value={formData.userid} onChange={handleChange} /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="password" id="password" placeholder='Password' value={formData.password} onChange={handleChange} /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="checkPassword" id="checkPassword" placeholder='Check Password' value={formData.checkPassword} onChange={handleChange} /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleChange} /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="email" id="email" placeholder='e-mail' value={formData.email} onChange={handleChange} /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="tel" id="tel" placeholder='Phone Number' value={formData.tel} onChange={handleChange} /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="address" id="address" placeholder='Address ' value={formData.address} onChange={handleChange} /></li>
                    <li><input className="signup_btn btn btn-primary w-100 mb-2" type="button" value="Sign up" onClick={handleSignup} /></li>
                </ul>
            </form>
        </div>
    )
}
