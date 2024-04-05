import styles from '../css/QnA.module.css'
import item from '../image/item.jpg'

export default function QnA(){
    return(
        <div className='container'>
            <div className={`${styles.Category}`}>
                <ul className="categoryList d-flex justify-content-center gap-4">
                    <li><button type='button' className='btn btn-outline-secondary'>상품문의</button></li>
                    <li><button type='button' className='btn btn-outline-secondary'>배송문의</button></li>
                    <li><button type='button' className='btn btn-outline-secondary'>교환반품문의</button></li>
                    <li><button type='button' className='btn btn-outline-secondary'>기타문의</button></li>
                </ul>
            </div>
            <div className={`${styles.qnaBox}`}>
                <p className={`${styles.categoryTitle} fw-bold`}>상품문의</p>
                <div className='d-flex justify-content-between'>
                    <div className='d-inline-block'>
                        <select class={`${styles.selectList} form-select`}>
                            <option>전체글</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className='d-inline-block'>
                        <button className={`${styles.qnaWriteBtn}`}>Write</button>
                    </div>  
                </div>
                
                
                <ul className={`${styles.qnaList}`}>
                    <li className={`${styles.qnaItem} d-flex`}>
                        <img class={`${styles.qnaImg} d-inline-block`} src={item}/>
                        <div className={`${styles.qnaInfo} d-inline-block`}>
                            <p className={`${styles.qnaTitle} fw-bold`}>배송문의 드립니다.</p>
                            <p className={`${styles.qnaWriter} `}>정인식</p>
                        </div>
                    </li>
                    <li className={`${styles.qnaItem} d-flex`}>
                        <img class={`${styles.qnaImg} d-inline-block`} src={item}/>
                        <div className={`${styles.qnaInfo} d-inline-block`}>
                            <p className={`${styles.qnaTitle} fw-bold`}>배송문의 드립니다.</p>
                            <p className={`${styles.qnaWriter} `}>정인식</p>
                        </div>
                    </li>
                    <li className={`${styles.qnaItem} d-flex`}>
                        <img class={`${styles.qnaImg} d-inline-block`} src={item}/>
                        <div className={`${styles.qnaInfo} d-inline-block`}>
                            <p className={`${styles.qnaTitle} fw-bold`}>배송문의 드립니다.</p>
                            <p className={`${styles.qnaWriter} `}>정인식</p>
                        </div>
                    </li>
                    <li className={`${styles.qnaItem} d-flex`}>
                        <img class={`${styles.qnaImg} d-inline-block`} src={item}/>
                        <div className={`${styles.qnaInfo} d-inline-block`}>
                            <p className={`${styles.qnaTitle} fw-bold`}>배송문의 드립니다.</p>
                            <p className={`${styles.qnaWriter} `}>정인식</p>
                        </div>
                    </li>
                </ul>   
                <ul className="qnaPage pagination justify-content-center gap-3">
                    <li className="page-item"><a href="javascript:void(0);">&lt;</a></li>
                    <li className="page-item"><a href="javascript:void(0);">1</a></li>
                    <li className="page-item"><a href="javascript:void(0);">2</a></li>
                    <li className="page-item"><a href="javascript:void(0);">3</a></li>
                    <li className="page-item"><a href="javascript:void(0);">4</a></li>
                    <li className="page-item"><a href="javascript:void(0);">5</a></li>
                    <li className="page-item"><a href="javascript:void(0);">&gt;</a></li>
                </ul>
                
            </div>
        </div>
    )
}