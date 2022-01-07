import styles from "./Product.module.css"
import Rating from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import { itemsActions } from "../../store/items";
import { Link } from "react-router-dom";

export const Product = (props) => {

    const { title, price, image, rating, id } = props;
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(itemsActions.addItemToCart({
            id: id,
            title: title,
            price: price,
            image: image
        }))
    };

    return <>
        <div className={styles.products}>
            <Link to={`/${id}`}>
                <img src={image} />
            </Link>
            <p>${price}</p>
            <div className={styles.add}>
                <Rating
                    name="half-rating-read"
                    defaultValue={rating.rate}
                    precision={0.5}
                    readOnly
                    className={styles.rating}
                    size="large"
                />
                <button onClick={addItemToCart}>Add To Cart</button>
            </div>

        </div>
    </>
}