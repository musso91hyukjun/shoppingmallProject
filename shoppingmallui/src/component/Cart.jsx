import styles from '../css/Cart.module.css'
import item from '../image/item.jpg'

export default function Cart(){
    return(
        <div className='container'>
            <div className='cartBox'> 
                <ul className={styles.cartList}>
                    <li className={`${styles.cartItem} d-flex w-100 gap-3 align-items-center`}>
                        <div className='d-flex justify-content-start '>
                            <input type="checkbox"/>
                        </div>
                        <img class={`${styles.CartImg} d-inline-block `} src={item}/>
                        <p className='d-inline-block w-25'>LAB Ox-Color 긴팔셔츠</p>
                        <p className='d-inline-block p-3'>35,000</p>
                        <div className='d-inline-block w-10 p-3'>
                            <button type="button" className='btn'>+</button>
                            <p>1</p>
                            <button type="button" className='btn'>+</button>
                        </div>
                        <p className='d-inline-block w-25'>[옵션: 민트/S/선택안함]</p>
                        <div className={`${styles.delWishBtn} d-inline-block float-end`}>
                            <button type="button" className='btn d-block '>삭제</button>
                            <button type="button" className='btn'>WISH LIST</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.Pay}>
                <div className={styles.Product}>
                    <p className='d-inline-block float-start'>PRODUCT</p>
                    <p className='d-inline-block float-end'>35,000</p>
                </div>
                <div className={styles.Shipping}>
                    <p className='d-inline-block float-start'>SHIPPING</p>
                    <p className='d-inline-block float-end'>35,000</p>
                </div>
                <div className={styles.SubTotal}>
                    <p className='d-inline-block float-start'>SUBTOTAL</p>
                    <p className='d-inline-block float-end'>35,000</p>
                </div>
                <div className={styles.SelectBtn}>
                    <button type="button" class={`btn btn-outline-dark`}>SELECT ORDER</button>
                    <button type="button" class="btn btn-dark">ALL ORDER</button>
                </div>
            </div>
        </div>
    )
}