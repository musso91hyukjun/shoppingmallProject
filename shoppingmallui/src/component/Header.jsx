import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'bootstrap';
import '../css/Header.css'

export default function Header() {
    return (
        <header className="d-flex justify-content-between p-3 vw-100 fs-5 mb-5">
            <div><FontAwesomeIcon icon={faBars} style={{ color: "#B197FC", }} /></div>
            <div style={{ color: "#B197FC", }}>BOXSENSEI</div>
            <div className="info_Group d-flex justify-content-between gap-3">
                <div className="w-100"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#B197FC", }} data-bs-toggle="modal" data-bs-target="#searchModal" /></div>
                <div className="flex-fill"><FontAwesomeIcon icon={faUser} style={{ color: "#B197FC", }} /></div>
                <div className="flex-fill"><FontAwesomeIcon icon={faBagShopping} style={{ color: "#B197FC", }} /></div>
            </div>

            <div className="modal" id="searchModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex">
                            <input className="" type="text" name="searchItem" id="searchItem" />
                            <button className="btn btn-primary">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

