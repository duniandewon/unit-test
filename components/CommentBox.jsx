import React, { useState } from "react";

const CommentBox = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="comment-box">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default CommentBox;
