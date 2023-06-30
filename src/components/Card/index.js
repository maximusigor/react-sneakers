import React from 'react';
import styles from './Card.module.scss';

function Card({id, imageUrl, title, price, onPlus, onFavorite, favorited = false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({imageUrl, title, price});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({id, imageUrl, title, price});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>

            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="liked" />
            </div>
            
            <img src={imageUrl} style={{ width: 133, height: 112 }} alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>{price} грн.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="add" />  
            </div>
            
        </div>
    );
}

export default Card;
