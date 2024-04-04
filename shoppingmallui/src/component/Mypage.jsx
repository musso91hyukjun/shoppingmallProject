import { Link } from 'react-router-dom'

export default function Mypage() {

    return (
        <div className="mypage">
            <div className='start mb-5'>
                <p>xx님은 ROOKIE 회원 이십니다</p>
                <p>1 이상 구매시 1%를 추가적립 받으실 수 있습니다</p>
            </div>
            <div className='d-flex justify-content-center m-auto mb-5 w-50 gap-5'>
                <p>MY ETC INFO</p>
                <p>MY ORDER INFO</p>
            </div>
            <div>
                <ul className="list">
                    <li>
                        <div className="listItem d-flex justify-content-between align-items-center w-50 m-auto border-bottom mb-4 pb-4">
                            <p>Log out</p>
                            <div className="text-end">
                                <p>회원님의 로그인 상태를</p>
                                <p>비회원으로 전환합니다</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/order">
                            <div className="listItem d-flex justify-content-between align-items-center w-50 m-auto border-bottom mb-4 pb-4">
                                <p>Order</p>
                                <div className="text-end">
                                    <p>고객님께서 주문하신 상품의</p>
                                    <p>주문내역을 확인 하실 수 있습니다.</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/member/modify">
                            <div className="listItem d-flex justify-content-between align-items-center w-50 m-auto border-bottom mb-4 pb-4">
                                <p>Profile</p>
                                <div className="text-end">
                                    <p>회원이신 고객님의 개인정보를</p>
                                    <p>관리하는 공간입니다</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mileage">
                            <div className="listItem d-flex justify-content-between align-items-center w-50 m-auto border-bottom mb-4 pb-4">
                                <p>Mileage</p>
                                <div className="text-end">
                                    <p>적립금은 상품 구매 시</p>
                                    <p>사용하실 수 있습니다</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className="listItem d-flex justify-content-between align-items-center w-50 m-auto border-bottom mb-4 pb-4">
                            <p>Coupon</p>
                            <div className="text-end">
                                <p>고객님께서 작성하신 게시물을</p>
                                <p>관리하는 공간입니다</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listItem d-flex justify-content-between align-items-center w-50 m-auto border-bottom mb-4 pb-4">
                            <p>Address</p>
                            <div className="text-end">
                                <p>자주 사용하는 배송지를 등록하고</p>
                                <p>관리하실 수 있습니다</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}