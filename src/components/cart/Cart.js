import styles from "./Cart.module.css";
import ReactDOM from "react-dom";
import { interfaceActions } from "../../store/interface";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../../store/items";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Cart = () => {

    const dispatch = useDispatch();
    const inCart = useSelector(state => state.items.items);
    console.log(inCart)
    let price = [];

    price = inCart.map((cart) => {
        console.log(cart)
        return cart.price * cart.quantity
    });

    const totalPrice = price.reduce((a, b) => {
        return a + b
    }, 0);

    const toggleCart = () => {
        dispatch(interfaceActions.toggleCart())
    };

    return ReactDOM.createPortal(
        <>
            <div className={styles.overlay} onClick={toggleCart}></div>
            <div>
                <div className={styles.border}>
                    <div>
                        <h1>Your Cart</h1>
                        {inCart.map(cart => {
                            const { id } = cart
                            const addItemToCart = () => {
                                dispatch(itemsActions.addItemToCart({
                                    id: id,
                                }));
                            };
                            const removeItemFromCart = () => {
                                dispatch(itemsActions.removeItemFromCart({
                                    id: id,
                                }));
                            };
                            const removeFromCart = () => {
                                dispatch(itemsActions.removeFromCart({
                                    id: id,
                                }));
                            }
                            return <div key={cart.id} className={styles.cart}>
                                <img src={cart.image} alt={cart.id} className={styles.img} />
                                <div className={styles.description}>
                                    <h2 className={styles.title}>{cart.title}</h2>
                                    <p>Quantity: {cart.quantity}</p>
                                    <p>Total: ${cart.quantity * cart.price}</p>
                                    <div className={styles.icon}>
                                        <AddIcon onClick={addItemToCart} />
                                        <RemoveIcon className={styles.remove} onClick={removeItemFromCart} />
                                    </div>
                                    <button onClick={removeFromCart}>Remove</button>
                                </div>
                            </div>
                        })}
                        <p className={styles.total}>Total Price: ${totalPrice}</p>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("portal")
    )
}