import styles from "./Body.module.css"
import productItems from "../../products";
import { Product } from "./Product"

export const Body = () => {

    return <>
        <div className={styles.body}>
            <div className={styles.inner_body}>
                <h1>Our Products</h1>
                <div className={styles.product}>
                    {productItems.map((product) => {
                        return <Product key={product.id} {...product} /> 
                    })}
                </div>
            </div>
        </div>
    </>
}