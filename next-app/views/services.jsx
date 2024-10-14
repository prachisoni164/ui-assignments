import React from 'react'
import '../styles/services.styles.css'

const Services = () => {
  return (
    <div className="container">
        <h1>our services</h1>
        <ul className="cardList">
            <li className="card">
                <h2 className='text-bold'>Web Development</h2>
                <p>
                    Our expert team creates responsive and user-friendly websites tailored to your business needs.
                    We specialize in modern frameworks and technologies to ensure your site is both functional and visually appealing.
                </p>
            </li>
            <li className="card">
                <h2 className='text-bold'>Digital Marketing</h2>
                <p>
                    Boost your online presence with our comprehensive digital marketing services. From SEO to social media management,
                    we help you reach your target audience and drive more traffic to your site.
                </p>
            </li>
            <li className="card">
                <h2 className='text-bold'>Graphic Design</h2>
                <p>
                    Our graphic design services include logo design, branding, and marketing materials.
                    Let us help you create a strong visual identity that resonates with your audience.
                </p>
            </li>
            <li className="card">
                <h2 className='text-bold'>Content Creation</h2>
                <p>
                    Engage your audience with high-quality content. Our team of writers produces blog posts,
                    articles, and promotional materials that inform and captivate.
                </p>
            </li>
        </ul>
  </div>
  )
}

export default Services