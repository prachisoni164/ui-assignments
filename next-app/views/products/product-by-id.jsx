import React, { useState, useEffect } from "react"
import { get } from "../../src/app/HttpClient"
import { PRODUCT_ROUTES } from '../../src/app/AppRoutes'
import styles from "../../sections/products/product-card.module.css"
import Image from 'next/image';
import "../../src/app/globals.css"

const ProductById = (id) => {
 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const productId = id.id; 

    const fetchProductById = async (id) => {
        try {
            const response = await get(`${PRODUCT_ROUTES.GET_PRODUCT}${id}`);
            setProduct(response.data);
        } 
        catch (err) {
            setError(err.response.data.message); // Handle any error that occurs
        } 
        finally {
            setLoading(false); // Set loading to false after fetching is complete
        }
    };

    useEffect(() => {
        fetchProductById(productId);
    }, [productId]);

    if (loading) return <div className="full-container"><p className='text-center'>Loading...</p></div>; // Show loading state
    if (error) return <div className="full-container">{error}</div>; // Show error message
    
    return (
        <div className="full-container">
            {product ? (
                <>
                    <div className={styles.productCard}>
                        <Image
                            src={product.thumbnail}
                            alt={product.name}
                            width={50}
                            height={50}
                            layout="responsive"
                        />
                        <h2 className={styles.productTitle}>{product.title}</h2>
                        <p className={styles.productDescription}>{product.description}</p>
                    </div>
                </>
            ) : (
                <p>product not found.</p>
            )}
        </div>
    );
};

export default ProductById;