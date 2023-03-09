import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../action/actions';

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const post = { title, comment, date };
    dispatch(addPost(post));
    setTitle('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};


export default AddPost;