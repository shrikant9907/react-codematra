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
        posts: action.payload 
      };

    case actionType.EDIT_POST:
      return action.payload;

    case actionType.DELETE_POST:
      return state.filter(post => post.id !== action.id);

    case actionType.SET_POST:
      return {
        ...state, 
        posts: action.payload 
      };

    default:
      return state;
  }

}