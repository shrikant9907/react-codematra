import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { set_post } from "../../../_actions";

const Posts = () => {
  const posts = useSelector(state => state.blogReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const postApiUrl = process.env.REACT_APP_API_URL + 'posts';
    fetch(postApiUrl).then((response) => {
      return response.json()
    }).then((data) => {
      dispatch(set_post(data.slice(0 , 5)));
    }).catch(error => {
      console.log("Error", error); 
    })
  }, [dispatch])
  
  return (
    <> 
    <ul className="text-left">
      {
        posts.map((post, index) => {
          return <li key={post.id} >{post.title}</li>
        })
      }
    </ul> 
    </>
  )
}

export default Posts;