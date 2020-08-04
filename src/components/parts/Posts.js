import React from 'react';
import {useEffect,useState} from 'react';
import PostItem from './PostItems'
import Pagination from './Pagination'
import axios from 'axios'

const Posts = () => {
    const [postData, setPostData] = useState([])
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage,setPostsPerPage] = useState(3)
    
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)
    useEffect(() => {
        //async
        async function fetchData() {
            const request = await axios.get('/post')
            setPostData(request.data.posts)
        }
        fetchData();
      }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = postData.slice(indexOfFirstPost,indexOfLastPost)
    return (
        
        
        <div className="col-lg-8">
			<div className="blog-box list-style">
                <PostItem  postData={currentPosts}/>
                <Pagination postsPerPage={postsPerPage} paginate={paginate} currentPage={currentPage}  totalPosts={postData.length}/>
            </div>
        </div>
       
    );
};

export default Posts;