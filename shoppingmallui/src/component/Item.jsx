import item from '../image/item.jpg'
import styles from '../css/Item.module.css'
import cn from 'classnames';

export default function Item() {

    return (
        <div className={cn(styles.content, "container")}>
            <div className="category">
                <p className={`${styles.categoryTitle} fw-bold`}>Man</p>
                <ul className={`${styles.categoryList} d-flex justify-content-center gap-4`}>
                    <li>OUTWEAR</li>
                    <li>TOP</li>
                    <li>BOTTOM</li>
                    <li>DRESS</li>
                    <li>ACC</li>
                </ul>
            </div>
            <ul className={`${styles.itemList} d-grid gap-4`}>
                <li className={`${styles.item}`}>
                    <img className={`${styles.itemImg}`} src={item} />
                    <div className={`${styles.itemInfo}`}>
                        <p className={`${styles.itemName} fw-bold`} >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className={`${styles.itemPrice}`}>59,000</p>
                    </div>
                </li>
                <li className={`${styles.item}`}>
                    <img className={`${styles.itemImg}`} src={item} />
                    <div className={`${styles.itemInfo}`}>
                        <p className={`${styles.itemName} fw-bold`} >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className={`${styles.itemPrice}`}>59,000</p>
                    </div>
                </li>
                <li className={`${styles.item}`}>
                    <img className={`${styles.itemImg}`} src={item} />
                    <div className={`${styles.itemInfo}`}>
                        <p className={`${styles.itemName} fw-bold`} >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className={`${styles.itemPrice}`}>59,000</p>
                    </div>
                </li>
                <li className={`${styles.item}`}>
                    <img className={`${styles.itemImg}`} src={item} />
                    <div className={`${styles.itemInfo}`}>
                        <p className={`${styles.itemName} fw-bold`} >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className={`${styles.itemPrice}`}>59,000aa</p>
                    </div>
                </li>
                <li className={`${styles.item}`}>
                    <img className={`${styles.itemImg}`} src={item} />
                    <div className={`${styles.itemInfo}`}>
                        <p className={`${styles.itemName} fw-bold`} >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className={`${styles.itemPrice}`}>59,000</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}