import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    
    return (
        <div className={styles.card}>

            <div className={styles.favorite} onClick={props.onClickFavorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            
            <img src={props.imageUrl} style={{ width: 133, height: 112 }} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>{props.price} грн.</b>
                </div>

                <button className="button" onClick={props.onPlus}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
            
        </div>
    );
}

export default Card;
