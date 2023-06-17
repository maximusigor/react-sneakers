import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ onClickFavorite, imageUrl, title, price }) {
    const [isAdded, setIsAdded] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>

            <img src={imageUrl} style={{ width: 133, height: 112 }} alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>{price} грн.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={() => setIsAdded(!isAdded)}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="plus"
                />
            </div>
        </div>
    );
}

export default Card;
