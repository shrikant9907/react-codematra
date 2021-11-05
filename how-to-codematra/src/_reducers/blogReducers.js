import * as actionType from "../_actionTypes";

export const blogReducer = (state = [], action) => {
  switch(action.type) {

    case actionType.ADD_POST:
      return { 
        ...state, 
        blogPosts: action.payload 
      };

    case actionType.EDIT_POST:
      return action.payload;

    case actionType.DELETE_POST:
      return state.filter(post => post.id !== action.id);

    case actionType.GET_POST:
      return {
        ...state, 
        blogPosts: action.payload 
      };

    default:
      return state;
  }
}