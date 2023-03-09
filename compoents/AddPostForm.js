import React, { useState} from 'react';

const AddPostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const post = { title, comment, date };
    addPost(post);
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

export default AddPostForm;
