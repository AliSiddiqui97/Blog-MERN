import React from 'react';

const PostItems = ({postData}) => {
	console.log(postData)
    return (
		<div>
		{postData.map((data) => (
                
			<div key={data._id}className="news-post article-post2">
			<div className="row">
				<div className="col-md-6">
					<div className="image-holder">
						<img src={data.imgUrl} alt=""/>
					</div>
				</div>
				<div className="col-md-6">
					<a className="text-link" href="#">{data.category.name}</a>
					<h2><a href="single-post.html">{data.title}</a></h2>
					<ul className="post-tags">
						<li>{data.createdAt.split("T",1)}</li>
						<li><a href="#">{data.comments} comments</a></li>
						<li>by <a href="#">{data.author.name}</a></li>
					</ul>
					<p >{data.description.slice(0, 200)}...</p>
				</div>
			</div>
			</div>
	   
		))}
		
		</div>
    );
};

export default PostItems;