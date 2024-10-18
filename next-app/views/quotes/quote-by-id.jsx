import React from 'react'

const QuoteById = ({ quote }) => {
    
    return (
        <div className="full-container">
            <h2>{quote.author}</h2>
            <p>{quote.quote}</p>    
        </div>
    );
}

export default QuoteById;
