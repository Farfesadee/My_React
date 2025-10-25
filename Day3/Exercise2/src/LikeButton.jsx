import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const toggleLike = () => {
    if (disabled) return;

    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
    setDisabled(true);

    setTimeout(() => setDisabled(false), 1000); // 1 second cooldown
  };

  return (
    <div className="like-button-container">
      <button
        className={liked ? 'liked' : 'unliked'}
        onClick={toggleLike}
        disabled={disabled}
      >
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
      <p>{likes} {likes === 1 ? 'like' : 'likes'}</p>
      <small>(Click to toggle)</small>
    </div>
  );
};

export default LikeButton;