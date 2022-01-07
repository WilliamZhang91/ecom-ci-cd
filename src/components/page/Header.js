import React, { Fragment } from "react";
import styles from "./Header.module.css";
import { useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";
import { interfaceActions } from "../../store/interface";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {

    const cartQuantity = useSelector(state => state.items.totalQuantity);
    const showCart = useSelector(state => state.interface.showCart);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(interfaceActions.toggleCart())
    };

    useEffect(() => {
        if (showCart) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [toggleCart])

    return (
        <>
            <div className={styles.header}>
                <Link to="/" className={styles.header_left}><div>PRODUCTS</div></Link>
                <div className={styles.header_right}>
                    <MdShoppingCart className={styles.cart} onClick={toggleCart} />
                    <div className={styles.quantity}>
                        <div className={styles.quantity1}>{cartQuantity}</div>
                    </div>
                </div>
            </div>
        </>
    )
}