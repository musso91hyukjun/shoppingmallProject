import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';

import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

    return (
        <header className="d-flex justify-content-between p-5 vw-100 fs-5 mb-5">
            <div>
                <FontAwesomeIcon icon={faBars} style={{ color: "#B197FC", }} data-bs-toggle="collapse" data-bs-target="#hamberger" />

                {/* 햄버거 토글시 collapse */}
                <div id="hamberger" className="collapse position-absolute">
                    <div>
                        <div className="bannerWrapper">
                            <img src="/image/1.jpg" alt="" />
                        </div>
                        <div className='d-flex gap-5 justify-content-center m-3'>
                            <a href="">MAN</a>
                            <a href="">WOMAN</a>
                        </div>
                        <div className='groupNav' >
                            <h2><a href="">ONLINE STORE</a></h2>
                            <h2><a href="">B BRAND</a></h2>
                            <h2><a href="">AAME</a></h2>
                            <div>
                                <h2>ALL ITEMS</h2>
                                <p><a href="">MAN +</a></p>
                                <p><a href="">WOMAN +</a></p>
                                <p><a href="">GOOD PRICE ITEM</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='memberWrapper'>
                        <ul className='member d-flex justify-content-between'>
                            <li><a href="">MYPAGE</a></li>
                            <li><a href="">VIEW</a></li>
                            <li><a href="">Q&A</a></li>
                            <li><a href="">REVIEW</a></li>
                            <li><a href="">NOTICE</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 로고 */}
            <div style={{ color: "#B197FC", }}><Link to="/">BOXSENSEI</Link></div>

            {/* 검색, 마이페이지, 장바구니 */}
            <div className="info_Group d-flex justify-content-center gap-3">
                <div><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#B197FC", }} data-bs-toggle="modal" data-bs-target="#searchModal" /></div>
                <div><Link to="/mypage"><FontAwesomeIcon icon={faUser} style={{ color: "#B197FC", }} /></Link></div>
                <div><Link to="/cart"><FontAwesomeIcon icon={faBagShopping} style={{ color: "#B197FC", }} /></Link></div>
            </div>

            {/* 검색창 */}
            <div className="modal" id="searchModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className='input-group'>
                                <input className="form-control" type="text" name="searchItem" id="searchItem" />
                                <button className="btn btn-primary">search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

