import * as actionTypes from "../_actionTypes";

// Add Post Action - Using Array Function
export const add_post = (data) => {
  return {
    type: actionTypes.ADD_POST,
    payload: {
      postData: data
    }
  }
}

// Edit Post Action - Using Array Function
export const edit_post = (postId, data) => {
  return {
    type: actionTypes.EDIT_POST,
    payload: {
      postId: postId,
      postData: data
    }
  }
}

// Delete Post Action - Using Array Function
export const delete_post = (postId) => {
  return {
    type: actionTypes.DELETE_POST,
    payload: {
      postId: postId
    }
  }
}

// SET Post Action - Using Array Function
export const set_post = (data) => {
  return {
    type: actionTypes.SET_POST,
    payload: data
  }
}