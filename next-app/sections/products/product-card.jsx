import React from 'react'
import Image from 'next/image';
import styles from "./product-card.module.css"
import { useRouter } from 'next/navigation';

const ProductCard = ({product}) => {
    const router = useRouter();

    const handleCardClick = () => {
      router.push(`/products/${product.id}`);
    };

    return (
        <>
            <div className={styles.productCard} onClick={handleCardClick}>
                <Image
                    src={product.thumbnail}
                    alt={product.name || 'Product Image'}
                    width={150}
                    height={150}
                />
                <h2 className={styles.productTitle}>{product.title}</h2>
                <p className={styles.productDescription}>{product.description}</p>
            </div>
        </>
            
        
    )
}

export default ProductCard