import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { add_post, set_post, delete_post, edit_post } from "../../../_actions";

const Posts = () => {
  const posts = useSelector(state => state.blogReducer.posts);
  const dispatch = useDispatch();

  const newPost = {
    "userId": 8,
    "id": 6,
    "title": "new post eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  };

  const editPost = {
    "userId": 10,
    "id": 6,
    "title": "Edit post eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  };

  useEffect(() => {
    const postApiUrl = process.env.REACT_APP_API_URL + 'posts';
    fetch(postApiUrl).then((response) => {
      return response.json()
    }).then((data) => {
      dispatch(set_post(data.slice(0 , 5).reverse()));
    }).catch(error => {
      console.log("Error", error); 
    })
  }, [dispatch])
  
  return (
    <> 
    <ul className="text-left">
      {
        posts.map((post, index) => {
          return <li key={post.id} >{post.title}   
          <button onClick={() => dispatch(delete_post(post.id))}>Delete Post</button>
          <button onClick={() => dispatch(edit_post(post.id, editPost))}>Edit Post</button>
          </li>
        })
      }
    </ul> 
    <button onClick={() => dispatch(add_post(newPost))}>Add New Post</button>
    </>
  )
}

export default Posts;