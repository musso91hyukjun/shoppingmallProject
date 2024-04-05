import item from '../image/item.jpg'
import '../css/Item.css'

export default function Item() {

    return (
        <div className="container">
            <div className="category">
                <p className="categoryTitle fw-bold">Man</p>
                <ul className="categoryList d-flex justify-content-center gap-4">
                    <li>OUTWEAR</li>
                    <li>TOP</li>
                    <li>BOTTOM</li>
                    <li>DRESS</li>
                    <li>ACC</li>
                </ul>
            </div>
            <ul className='itemList d-grid gap-4'>
                <li className="item ">
                    <img className="itemImg" src={item} />
                    <div className="itemInfo">
                        <p className="itemName fw-bold" >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className="itemPrice">59,000</p>
                    </div>
                </li>
                <li className="item">
                    <img className="itemImg" src={item} />
                    <div className="itemInfo">
                        <p className="itemName fw-bold" >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className="itemPrice">59,000</p>
                    </div>
                </li>
                <li className="item">
                    <img className="itemImg" src={item} />
                    <div className="itemInfo">
                        <p className="itemName fw-bold" >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className="itemPrice">59,000</p>
                    </div>
                </li>
                <li className="item">
                    <img className="itemImg" src={item} />
                    <div className="itemInfo">
                        <p className="itemName fw-bold" >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className="itemPrice">59,000</p>
                    </div>
                </li>
                <li className="item">
                    <img className="itemImg" src={item} />
                    <div className="itemInfo">
                        <p className="itemName fw-bold" >Chocho wide denim</p>
                        <p>2컬러/</p>
                        <p className="itemPrice">59,000</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}