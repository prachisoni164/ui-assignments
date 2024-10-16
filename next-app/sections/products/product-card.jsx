import React from 'react'
import Image from 'next/image';
import styles from "./product-card.module.css"

const ProductCard = (product) => {

    return (
        <>
            <div className={styles.productCard}>
                <Image
                    src={product.product.thumbnail}
                    alt={product.product.name}
                    width={50}
                    height={50}
                    layout="responsive"
                />
                <h2 className={styles.productTitle}>{product.product.title}</h2>
                <p className={styles.productDescription}>{product.product.description}</p>
            </div>
        </>
            
        
    )
}

export default ProductCard