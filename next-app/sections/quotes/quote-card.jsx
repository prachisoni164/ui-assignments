"use client"

import React from 'react'
import styles from "./quote-card.module.css"
import { useRouter } from 'next/navigation';

const QuoteCard = ({quote}) => {

    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/quotes/${quote.id}`)
    };

    return (
        <>
        <div className={styles.quoteCard} onClick={handleCardClick}>
            <h2>{quote.author}</h2>
            <p>{quote.quote}</p>
        </div>
        </>
    )
}

export default QuoteCard