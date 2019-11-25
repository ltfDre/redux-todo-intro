import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <>
            <h1>Home Page</h1>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/products">Product</Link></li>
                <li><Link to = "/brands">Brand</Link></li>
            </ul>
        </>
    )
}

export default HomePage;