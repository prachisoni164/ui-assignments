import React from 'react'
import { get } from "../../../../app/HttpClient"
import { QUOTES_ROUTES } from '../../../../app/AppRoutes'
import QuoteById from '../../../../../views/quotes/quote-by-id'

// Works in AppRouter
// Implementing Static Site Generation (SSG) using generateStaticParams() 
// Generate static paths for dynamic route /quotes/[id]
export async function generateStaticParams() {
    // Fetch quotes from the API to generate the list of static paths
    const response = await get(`${QUOTES_ROUTES.GET_ALL_QUOTES}?limit=12&skip=0`)
    const quotes = response.data?.quotes || []

    // Return an array of objects with the id property
    return quotes.map((quote) => ({
        id: quote.id.toString()
    }))
}

// Fetch data for each individual quote at build time
const Quote = async ({ params }) => {

    const { id } = params;

    let quote = null;
    let isError = false;

    try {
        const response = await get(`${QUOTES_ROUTES.GET_QUOTE}${id}`);
        quote = response.data || null;
    }
    catch (err) {
        console.error('Error fetching quote:', err);
        isError = true;
    }

    if (isError) {
        return (
            <div className='full-container'>Error fetching quote</div>
        )
    }

    if (!quote) {
        return (
            <div className='full-container'>Quote not found</div>
        )
    }

    return (
        <QuoteById quote={quote} />
    )
}

export default Quote