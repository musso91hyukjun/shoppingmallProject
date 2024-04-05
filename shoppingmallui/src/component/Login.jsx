import { Link } from "react-router-dom";


export default function Login() {

    return (
        <div className="container">
            <form className="w-50 m-auto pt-5" >
                <div className='iconGroup d-flex gap-3 justify-content-center mb-5'>
                    <div><a>아이콘</a></div>
                    <div><a>아이콘</a></div>
                    <div><a>아이콘</a></div>
                </div>
                <ul >
                    <li><input className="input w-100 mb-3 form-control" type="text" name="userid" id="userid" placeholder='User name' /></li>
                    <li><input className="input w-100 mb-5 form-control" type="password" name="password" id="password" placeholder='Enter Password' /></li>
                    <div className='d-flex justify-content-between pt-3 mb-3'>
                        <li className='checkbox d-flex align-items-center'><input type="checkbox" name="rememberPassword" id="rememberPassword" />비밀번호 저장</li>
                        <li>아이디/비밀번호 찾기</li>
                    </div>
                    <li><input className="signin_btn btn btn-primary w-100 mb-2" type="button" value="Sign in" /></li>
                    <li><Link to="/Signup"><input className="signup_btn btn btn-primary w-100 mb-2" type="button" value="Sign up" /></Link></li>
                </ul>



            </form>
        </div>
    )
}