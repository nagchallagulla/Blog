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
       const sortedComments =
        action.payload === 'asc'
          ? [...state.comments].sort(
              (a, b) => new Date(a.created_at) - new Date(b.created_at)
            )
          : [...state.comments].sort(
              (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
      return {
        ...state,
        comments: sortedComments,
      };
      
      react_devtools_backend.js:2655 Warning: Invalid DOM property `class`. Did you mean `className`?
    at h3
    at div
    at div
    at div
    at ViewPosts (http://localhost:3000/static/js/bundle.js:739:76)
    default:
      return state;
  }
};

export default reducer;
