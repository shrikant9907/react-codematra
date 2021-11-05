import * as actionType from "../_actionTypes";

const initialState = {
  isLoading: true,
  posts: []
}

export const blogReducer = (state = initialState, action) => {

  switch(action.type) {

    case actionType.ADD_POST:
      return { 
        ...state, 
        posts: [action.payload, ...state.posts] 
      }

    case actionType.EDIT_POST:
      const newPosts = state.posts.map((item, idx) => {
        if (item.id === action.payload.id) {
          action.payload.id = item.id;
          return action.payload.post;
        } else {
          return item;
        }
      });
      return {
        ...state,
        posts:  newPosts
      }

    case actionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }

    case actionType.SET_POST:
      return {
        ...state, 
        posts: action.payload 
      }

    default:
      return state;
  }

}