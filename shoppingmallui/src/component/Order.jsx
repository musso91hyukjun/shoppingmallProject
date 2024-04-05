import { useState } from 'react';
import s from '../css/Order.module.css';
import cn from 'classnames'

export default function Order() {

    const [checked, setChecked] = useState("today");

    function radioHandler(event) {
        setChecked(event.target.value);
    }

    return (
        <div className="order w-50 m-auto">
            <h2 className='mb-5'>주문목록</h2>
            <div className="d-flex gap-2">
                <p>주문내역 조회(x건)</p>
                <p>취소/교환/반품 내역(x건)</p>
            </div>
            <p className='text-start mt-5 mb-2'>상태</p>
            <select className="form-select">
                <option name="orderStatus" value="">전체보기</option>
                <option name="orderStatus" value="">입금전</option>
                <option name="orderStatus" value="">배송준비중</option>
                <option name="orderStatus" value="">배송중</option>
                <option name="orderStatus" value="">배송완료</option>
                <option name="orderStatus" value="">취소</option>
                <option name="orderStatus" value="">교환</option>
                <option name="orderStatus" value="">반품</option>
            </select>
            <p className='text-start mt-5 mb-2'>기간</p>
            <div className="radioButtons d-flex justify-content-center gap-2">
                <input type="radio" name="days" value="today" id="today" hidden onChange={radioHandler} />
                <label className={cn(s.daysRadio, "flex-fill", "pe-3", "ps-3", "btn", { "btn-primary": checked === "today", "btn-outline-primary": checked !== "today" })} htmlFor="today">오늘</label>

                <input type="radio" name="days" value="month" id="month" hidden onChange={radioHandler} />
                <label className={cn(s.daysRadio, "flex-fill", "pe-3", "ps-3", "btn", { "btn-primary": checked === "month", "btn-outline-primary": checked !== "month" })} htmlFor="month">1개월</label>

                <input type="radio" name="days" value="threeMonth" id="threeMonth" hidden onChange={radioHandler} />
                <label className={cn(s.daysRadio, "flex-fill", "pe-3", "ps-3", "btn", { "btn-primary": checked === "threeMonth", "btn-outline-primary": checked !== "threeMonth" })} htmlFor="threeMonth">3개월</label>

                <input type="radio" name="days" value="sixMonth" id="sixMonth" hidden onChange={radioHandler} />
                <label className={cn(s.daysRadio, "flex-fill", "pe-3", "ps-3", "btn", { "btn-primary": checked === "sixMonth", "btn-outline-primary": checked !== "sixMonth" })} htmlFor="sixMonth">6개월</label>

                <input type="radio" name="days" value="customDays" id="customDays" hidden onChange={radioHandler} />
                <label className={cn(s.daysRadio, "flex-fill", "pe-3", "ps-3", "btn", { "btn-primary": checked === "customDays", "btn-outline-primary": checked !== "customDays" })} htmlFor="customDays">기간설정</label>
            </div>
            <div className="resultText mt-5">주문 내역이 없습니다</div>
        </div>
    )
}