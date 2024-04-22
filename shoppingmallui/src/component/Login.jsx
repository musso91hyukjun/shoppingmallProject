import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/LoginAPI";


export default function Login() {

    const [credentials, setCredentials] = useState({ userid: '', password: '' });
    const navigate = useNavigate();


    function handleChange(e) {
        const { name, value } = e.target;
        console.log(e.target.value);
        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();



        if (!credentials.userid) {
            alert("아이디를 입력해 주세요")
            return;
        }
        if (!credentials.password) {
            alert("비밀번호를 입력해 주세요")
            return;
        }
        try {
            const response = await login(credentials);
            if (response.status === 200) {
                console.log("success");
                navigate('/');
            } else {
                console.error("failed")
                alert("로그인 실패")
            }


        } catch (error) {
            console.error("실패", error.message);
        }
    }

    return (
        <div className="container">
            <form className="w-50 m-auto pt-5" onSubmit={handleSubmit} method="post" >
                <div className='iconGroup d-flex gap-3 justify-content-center mb-5'>
                    <div><p>아이콘</p></div>
                    <div><p>아이콘</p></div>
                    <div><p>아이콘</p></div>
                </div>
                <ul >
                    <li><input className="input w-100 mb-3 form-control" type="text" name="userid" id="userid" placeholder='User name' value={credentials.userid} onChange={handleChange} /></li>
                    <li><input className="input w-100 mb-5 form-control" type="password" name="password" id="password" placeholder='Enter Password' value={credentials.password} onChange={handleChange} /></li>
                    <div className='d-flex justify-content-between pt-3 mb-3'>
                        <li className='checkbox d-flex align-items-center'><input type="checkbox" name="rememberPassword" id="rememberPassword" />비밀번호 저장</li>
                        <li>아이디/비밀번호 찾기</li>
                    </div>
                    <li><input className="signin_btn btn btn-primary w-100 mb-2" type="submit" value="Sign in" /></li>
                    <li><Link to="/Signup"><input className="signup_btn btn btn-primary w-100 mb-2" type="button" value="Sign up" /></Link></li>
                </ul>

            </form>
        </div>
    )
}