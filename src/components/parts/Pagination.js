import React, { useState } from 'react';

const Pagination = ({postsPerPage,totalPosts,paginate,indexOfFirstPost,currentPage}) => {
   
    const pageNumbers = []
    for (let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++ ){
        pageNumbers.push(i)
    }
    return (
        <div>
            <div className="pagination-box">
                <ul className="pagination-list">
                {
                        pageNumbers.map(number=>(
                            <li className="active" key={number}>
                                <a  onClick={()=>{ paginate(number)}}  className={currentPage===number? 'active':''}>{number}</a>
                            </li>
                        ))
                    }
                   
                </ul>
            </div>
            
        </div>
    );
};

export default Pagination;