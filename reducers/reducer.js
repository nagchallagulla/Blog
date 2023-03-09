import {ActionType} from "../action/actionTypes";

const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case ActionType. VIEW_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case ActionType.SORT_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
