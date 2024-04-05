

export default function Signup() {

    return (
        <div className="container">
            <form className="signupForm w-50 m-auto pt-3" >
                <h2 className="mb-5">회원가입</h2>
                <ul >
                    <li><input className="w-100 mb-3 form-control" type="text" name="userid" id="userid" placeholder='ID' /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="password" id="password" placeholder='Password' /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="checkPassword" id="checkPassword" placeholder='Check Password' /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="checkPassword" id="checkPassword" placeholder='Name' /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="email" id="email" placeholder='e-mail' /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="tel" id="tel" placeholder='Phone Number' /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="address" id="address" placeholder='Address ' /></li>
                    <li><input className="signup_btn btn btn-primary w-100 mb-2" type="button" value="Sign up" /></li>
                </ul>
            </form>
        </div>
    )
}
