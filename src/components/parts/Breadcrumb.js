import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Breadcrumb = () => {
    const [numPosts, setnumPosts] = useState('0')
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get('/post-number')
            setnumPosts(request.data.postNumber)
        }
        fetchData();
    },[])
    return (
        <section className="page-banner-section">
            <div className="container">
                <h1>List Style</h1>
                <span>{numPosts? numPosts:0} Posts</span>
            </div>
        </section>
    );
};

export default Breadcrumb;