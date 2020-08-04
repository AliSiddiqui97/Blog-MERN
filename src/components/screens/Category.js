import React from 'react';
import Header from '../parts/Header'

import Navbar from '../parts/Navbar'
import Footer from '../parts/Footer'
import Breadcrumb from '../parts/Breadcrumb'
import Posts from '../parts/Posts'
import Sidebar from '../parts/Sidebar'

const Category = () => {
    return (
        <>
        
        <Header />
        <Navbar />
        <Breadcrumb/>
        <section className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Posts/>
                    </div>
                    <div className="col-lg-4">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default Category;