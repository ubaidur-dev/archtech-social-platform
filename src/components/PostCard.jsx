import React, { useState } from 'react';

const PostCard = ({ author, time, text, img }) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50));
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-meta">
          <div className="avatar"></div>
          <div>
            <h4 style={{fontSize: '15px'}}>{author}</h4>
            <span style={{color: 'var(--text-muted)', fontSize: '12px'}}>{time} ago</span>
          </div>
        </div>
        <button className="action-btn">•••</button>
      </div>

      <p className="post-content">{text}</p>
      
      {img && <img src={img} className="post-image" alt="content" />}

      <div className="post-actions">
        <button className="action-btn" onClick={toggleLike} style={{color: liked ? '#ff4b2b' : ''}}>
          {liked ? '❤️' : '🤍'} {likes}
        </button>
        <button className="action-btn">💬 12 Comments</button>
        <button className="action-btn">🔗 Share</button>
      </div>
    </div>
  );
};

export default PostCard;