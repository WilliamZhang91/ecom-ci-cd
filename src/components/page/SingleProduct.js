import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import productItems from "../../products";
import Rating from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import { itemsActions } from "../../store/items";

export const SingleProduct = () => {

    const params = useParams();
    const value = +params.id;
    const filter = productItems.filter(productItem => productItem.id === value);
    const dispatch = useDispatch();

    return <>
        <div className={styles.layout}>
            {filter.map((productItem, index) => {
                const addItemToCart = () => {
                    dispatch(itemsActions.addItemToCart({
                        id: productItem.id,
                        title: productItem.title,
                        price: productItem.price,
                        image: productItem.image
                    }))
                };
                return <div key={index}>
                    <h1 className={styles.title}>{productItem.title}</h1>
                    <div className={styles.description}>
                        <img src={productItem.image} className={styles.img} />
                        <div className={styles.description1}>
                            <h2>{productItem.description}</h2>
                            <Rating
                                defaultValue={productItem.rating.rate ?? " "}
                                name="half-rating-read"
                                precision={0.5}
                                readOnly
                                className={styles.rating}
                                size="large"
                            />
                            <h3>${productItem.price}</h3>
                            <button onClick={addItemToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}