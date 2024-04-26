import item from '../image/item.jpg'
import styles from '../css/Item.module.css'
import cn from 'classnames';
import React, { useState } from 'react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Item() {
    const [currentCategory, setCurrentCategory] = useState('OUTWEAR');
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      axios.get(`http://localhost:8080/api/items/MAN_${currentCategory}`)
        .then(response => {
          setItems(response.data);
        })
        .catch(error => console.error('Error fetching products:', error));
    }, [currentCategory]); // 의존성 배열에 currentCategory 추가
  
    // 카테고리 클릭 핸들러
    const handleCategoryClick = (category) => {
      setCurrentCategory(category);
    };
  

    return (
        <div className={cn(styles.content, "container")}>
            <div className="category">
                <p className={`${styles.categoryTitle} fw-bold`}>Man</p>
                <ul className={`${styles.categoryList} d-flex justify-content-center gap-4`}>
                    <li onClick={() => handleCategoryClick('OUTWEAR')}>OUTWEAR</li>
                    <li onClick={() => handleCategoryClick('TOP')}>TOP</li>
                    <li onClick={() => handleCategoryClick('BOTTOM')}>BOTTOM</li>
                    <li onClick={() => handleCategoryClick('ACC')}>ACC</li>
                </ul>
            </div>
            <ul className={`${styles.itemList} d-grid gap-4`}>
                {items.map(item => (
                    <li className={`${styles.item}`} key={item.id}>
                        <img className={`${styles.itemImg}`} src={item} />
                        <div className={`${styles.itemInfo}`}>
                            <p className={`${styles.itemName} fw-bold`} >{item.name}</p>
                            <p>{item.color}</p>
                            <p className={`${styles.itemPrice}`}>{item.price}</p>
                        </div>
                    </li>
                ))}
               
            </ul>
        </div>
    )
}
{/* <li className={`${styles.item}`}>
<img className={`${styles.itemImg}`} src={item} />
<div className={`${styles.itemInfo}`}>
    <p className={`${styles.itemName} fw-bold`} >Chocho wide denim</p>
    <p>2컬러/</p>
    <p className={`${styles.itemPrice}`}>59,000</p>
</div>
</li> */}