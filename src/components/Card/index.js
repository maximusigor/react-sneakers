import React from 'react';
import styles from './Card.module.scss';

function Card({imageUrl, title, price, onPlus, onFavorite}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({imageUrl, title, price});
        setIsAdded(!isAdded);
    }

    const [isAddedFavorite, setIsAddedFavorite] = React.useState(false);

    const onClickFavorite = () => {
        onFavorite();
        setIsAddedFavorite(!isAddedFavorite);
    }

    return (
        <div className={styles.card}>

            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isAddedFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked" />
            </div>
            
            <img src={imageUrl} style={{ width: 133, height: 112 }} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>{price} грн.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />  
            </div>
            
        </div>
    );
}

export default Card;
