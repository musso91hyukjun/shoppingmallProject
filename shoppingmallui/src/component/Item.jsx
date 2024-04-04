
export default function Item() {

    return (
        <div className="container">
            <div className="category">
                <p className="categoryTitle">Man</p>
                <ul className="categoryList d-flex justify-content-center gap-5">
                    <li>OUTWEAR</li>
                    <li>TOP</li>
                    <li>BOTTOM</li>
                    <li>DRESS</li>
                    <li>ACC</li>
                </ul>
            </div>
            <ul className='d-flex gap-5'>
                <li>
                    <div className="item">
                        <img className="itemImg" style={{ width: 200 }} />
                        <div className="itemInfo">
                            <p className="itemName" >Chocho wide denim</p>
                            <p>2컬러/test</p>
                            <p className="itemPrice">59,000</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <img className="itemImg" style={{ width: 200 }} />
                        <div className="itemInfo">
                            <p className="itemName" >Chocho wide denim</p>
                            <p>2컬러/F</p>
                            <p className="itemPrice">59,000</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}