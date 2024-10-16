import React from 'react'
import Image from 'next/image';
import styles from "./product-card.module.css"
import { useRouter } from 'next/navigation';

const ProductCard = (product) => {
    const router = useRouter();

    const handleCardClick = () => {
      router.push(`/products/${product.product.id}`);
    };

    return (
        <>
            <div className={styles.productCard} onClick={handleCardClick}>
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