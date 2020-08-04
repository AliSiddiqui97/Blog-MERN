import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const TrendingPosts = () => {
	const [trendingPosts,setTrendingPosts] = useState([])
	useEffect(()=>{

		async function fetchData() {
			const request = await axios.get('/trending-post')
			
            setTrendingPosts(request.data.posts)
		}
		
		fetchData();
	},[])
	console.log(trendingPosts[0])
	
    return (
        
		<section className="top-home-section">
			<div className="container">
				<div className="title-section text-center">
					<h1>Trending Posts</h1>
				</div>
				<div className="top-home-box">
					<div className="row">
						{
							trendingPosts[0]?
							<div className="col-lg-6 col-md-12">
							<div className="news-post image-post">
								<img src={trendingPosts[0].imgUrl} alt="trendingpost1"/>
								<div className="hover-post">
									<a className="category-link" href="#">{trendingPosts[0].category.name}</a>
									<h2><a href="single-post.html">{trendingPosts[0].title}</a></h2>
									<ul className="post-tags">
										<li>by <a href="#">{trendingPosts[0].author.name}</a></li>
										<li>{trendingPosts[0].createdAt.split("T",1)}</li>
										
									</ul>
								</div>
							</div>
						</div>
							:
							<div className="col-lg-6 col-md-12">
							<div className="news-post image-post">
								<img src="upload/blog/home5/a1.jpg" alt=""/>
								<div className="hover-post">
									<a className="category-link" href="#">Lifestyle</a>
									<h2><a href="single-post.html">Praesent placerat quiseros.</a></h2>
									<ul className="post-tags">
										<li>by <a href="#">Stan Enemy</a></li>
										<li>3 days ago</li>
										<li><a href="#">2 comments</a></li>
									</ul>
								</div>
							</div>
						</div>

						}
						<div className="col-lg-6 col-md-12">
						
							<div className="row">
							{trendingPosts[1]? 
									<div className="col-md-6">
									<div className="news-post standard-post left-align">
										<div className="image-holder">
											<a href="single-post.html"><img src={trendingPosts[1].imgUrl} alt=""/></a>
										</div>
										<a className="text-link" href="#">{trendingPosts[1].category.name}</a>
										<h2><a href="single-post.html">{trendingPosts[1].title}</a></h2>
										<ul className="post-tags">
											<li>by <a href="#">{trendingPosts[1].author.name}</a></li>
											<li>{trendingPosts[1].createdAt.split("T",1)}</li>
										</ul>
									</div>
								</div> 
								:
								<div className="col-md-6">
								<div className="news-post standard-post left-align">
									<div className="image-holder">
										<a href="single-post.html"><img src="upload/blog/home2/m7.jpg" alt=""/></a>
									</div>
									<a className="text-link" href="#">Lifestyle</a>
									<h2><a href="single-post.html">Praesent placerat risus.</a></h2>
									<ul className="post-tags">
										<li>by <a href="#">Stan Enemy</a></li>
										<li>2 weeks ago</li>
									</ul>
								</div>
							</div>
							
								}
								{trendingPosts[2]? 
									<div className="col-md-6">
									<div className="news-post standard-post left-align">
										<div className="image-holder">
											<a href="single-post.html"><img src={trendingPosts[2].imgUrl} alt=""/></a>
										</div>
										<a className="text-link" href="#">{trendingPosts[2].category.name}</a>
										<h2><a href="single-post.html">{trendingPosts[2].title}</a></h2>
										<ul className="post-tags">
											<li>by <a href="#">{trendingPosts[2].author.name}</a></li>
											<li>{trendingPosts[2].createdAt.split("T",1)}</li>
										</ul>
									</div>
								</div> 
								:
								<div className="col-md-6">
								<div className="news-post standard-post left-align">
									<div className="image-holder">
										<a href="single-post.html"><img src="upload/blog/home2/m7.jpg" alt=""/></a>
									</div>
									<a className="text-link" href="#">Lifestyle</a>
									<h2><a href="single-post.html">Praesent placerat risus.</a></h2>
									<ul className="post-tags">
										<li>by <a href="#">Stan Enemy</a></li>
										<li>2 weeks ago</li>
									</ul>
								</div>
							</div>
							
								}
							
							
							</div>

							<div className="row">
							{trendingPosts[3]? 
									<div className="col-md-6">
									<div className="news-post standard-post left-align">
										<div className="image-holder">
											<a href="single-post.html"><img src={trendingPosts[3].imgUrl} alt=""/></a>
										</div>
										<a className="text-link" href="#">{trendingPosts[3].category.name}</a>
										<h2><a href="single-post.html">{trendingPosts[3].title}</a></h2>
										<ul className="post-tags">
											<li>by <a href="#">{trendingPosts[3].author.name}</a></li>
											<li>{trendingPosts[3].createdAt.split("T",1)}</li>
										</ul>
									</div>
								</div> 
								:
								<div className="col-md-6">
								<div className="news-post standard-post left-align">
									<div className="image-holder">
										<a href="single-post.html"><img src="upload/blog/home2/m7.jpg" alt=""/></a>
									</div>
									<a className="text-link" href="#">Lifestyle</a>
									<h2><a href="single-post.html">Praesent placerat risus.</a></h2>
									<ul className="post-tags">
										<li>by <a href="#">Stan Enemy</a></li>
										<li>2 weeks ago</li>
									</ul>
								</div>
							</div>
							
								}
								{trendingPosts[4]? 
									<div className="col-md-6">
									<div className="news-post standard-post left-align">
										<div className="image-holder">
											<a href="single-post.html"><img src={trendingPosts[4].imgUrl} alt=""/></a>
										</div>
										<a className="text-link" href="#">{trendingPosts[4].category.name}</a>
										<h2><a href="single-post.html">{trendingPosts[4].title}</a></h2>
										<ul className="post-tags">
											<li>by <a href="#">{trendingPosts[4].author.name}</a></li>
											<li>{trendingPosts[4].createdAt.split("T",1)}</li>
										</ul>
									</div>
								</div> 
								:
								<div className="col-md-6">
								<div className="news-post standard-post left-align">
									<div className="image-holder">
										<a href="single-post.html"><img src="upload/blog/home2/m7.jpg" alt=""/></a>
									</div>
									<a className="text-link" href="#">Lifestyle</a>
									<h2><a href="single-post.html">Praesent placerat risus.</a></h2>
									<ul className="post-tags">
										<li>by <a href="#">Stan Enemy</a></li>
										<li>2 weeks ago</li>
									</ul>
								</div>
							</div>
							
								}
							
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
	
	);
};

export default TrendingPosts;