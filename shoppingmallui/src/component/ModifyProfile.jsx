

export default function ModifyProfile() {

    return (
        <div className="ModifyProfile">
            <form className="signupForm w-25 m-auto pt-3" >
                <h2 className="mb-5">회원정보 수정</h2>
                <ul >
                    <li><input className="w-100 mb-3 form-control" type="text" name="userid" id="userid" placeholder='ID' /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="password" id="password" placeholder='Password' /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="checkPassword" id="newPassword" placeholder='New Password' /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="checkPassword" id="checkPassword" placeholder='Check Password' /></li>
                    <li><input className="w-100 mb-3 form-control" type="password" name="checkPassword" id="Name" placeholder='Name' /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="email" id="email" placeholder='e-mail' /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="tel" id="tel" placeholder='Phone Number' /></li>
                    <li><input className="w-100 mb-3 form-control" type="text" name="address" id="address" placeholder='Address ' /></li>
                </ul>
                <div className="d-flex w-100 gap-3">
                    <input className="signup_btn btn btn-primary w-100 mb-2 flex-fill w-100ll" type="button" value="수정완료" />
                    <input className="signup_btn btn btn-primary w-100 mb-2 flex-fill w-100ll" type="button" value="회원탈퇴" />
                    <input className="signup_btn btn btn-primary w-100 mb-2 flex-fill" type="button" value="취소" />
                </div>
            </form>
        </div>
    )
}