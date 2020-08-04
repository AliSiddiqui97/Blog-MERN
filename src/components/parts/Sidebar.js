import React, { useEffect,useState } from 'react';
import axios from 'axios';
const Sidebar = () => {
    const [categories, setCategories] = useState([])
    const [stories,setStories] = useState([])
    useEffect(()=>{
        async function fetchData() {
			const request = await axios.get('/categories')
			
            setCategories(request.data.categories)
        }
        async function fetchLatest() {
			const request = await axios.get('/fresh-stories')
            setStories(request.data.posts)
		}
		
        fetchData();
        fetchLatest()
    },[])
    
    
    return (
        <div className="sidebar">

            <div className="widget social-widget">
                <ul className="social-list">
                    <li>
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                            facebook
                            <span>25k likes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                            twitter
                            <span>31k followers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                            instagram
                            <span>31k followers</span>
                        </a>
                    </li>
                </ul>
            </div>

            {categories ? 
            <div className="widget category-widget">
                <h2>Categories</h2>
                <ul className="category-list">
                     {
                        categories.map((category)=>(
                            <li key={category._id}>
                                <a href="#">
                                    {category.name}
                                </a>
                            </li>
                        ))
                    } 
                    
                </ul>
            </div>
            : <></>}

           

            <div className="widget list-widget">
                <h2>Latest Stories</h2>
                <ul className="list-posts">
                   {
                       stories ? 
                       
                           stories.map((story=>(
                            <li>
                            <a className="text-link" href="#">{story.category.name}</a>
                            <h2><a href="single-post.html">{story.title}</a></h2>
                            <ul className="post-tags">
                           <li>{story.createdAt.split('T',1)}</li>
                           <li><a href="#">{story.comments} comments</a></li>
                            </ul>
                        </li>
                           )))
                       
                    :
                    <></>
                   }
                    
                  
                    
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;