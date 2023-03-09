import {ActionType} from "./actionTypes";
import axios from 'axios';

export const addPost = post => async dispatch => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', post);
    dispatch({
      type: ActionType.ADD_POST,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewPosts = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({
      type: ActionType.VIEW_POSTS,
      payload: response.data.slice(0,4),
    });
  } catch (error) {
    console.log(error);
  }
};

export const sortPosts = sortOrder => async dispatch => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_sort=date&_order=${sortOrder}`);
    dispatch({
      type: ActionType.SORT_POSTS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
