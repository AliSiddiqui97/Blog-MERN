import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';

import Slider from "react-slick";

const FreshStories = () => {
	const [stories,setStories] = useState([])

	useEffect(()=>{
		
		async function fetchData() {
            const request = await axios.get('/fresh-stories')
            setStories(request.data.posts)
		}
		
		fetchData();
		 
	},[])
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2
	  };
    return (
        <div>
            <section className="fresh-section on-trend-mode">
			<div className="container">
				<div className="title-section text-center">
					<h1>Fresh Stories</h1>
				</div>

				<Slider {...settings} >
				{stories.map((data)=> 
						 (
						<div key={data}>
						<div className='item'>
						<div className="news-post article-post">
						<div className="image-holder">
							<img src={data.imgUrl} alt=""/>
						</div>
						<a className="text-link" href="#">{data.category.name}</a>
						<h2><a href="single-post.html">{data.title}.</a></h2>
						<ul className="post-tags">
						 	<li>{data.createdAt.split('T',1)}</li>
							<li><a href="#">{data.comments} comments</a></li>
							<li>by <a href="#">{data.author.name}</a></li>
						</ul>
						<p>{data.description} </p>
						<a className="text-link" href="single-post.html">Read More</a>
						</div>
						</div>
						</div>
						)
					)}
					</Slider>
				
					


			</div>
		</section>
            
        </div>
    );
};

export default FreshStories;