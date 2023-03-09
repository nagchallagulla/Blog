import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewPosts,sortPosts } from '../action/actions';
const ViewPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
  
    useEffect(() => {
      dispatch(viewPosts());
    }, [dispatch]);
  
    return (
      <div>
        <button onClick={() => dispatch(sortPosts('asc'))}>Sort by Date Ascending</button>
        <button onClick={() => dispatch(sortPosts('desc'))}>Sort by Date Descending</button>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.comment}</p>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    );
  };
  export default ViewPosts;