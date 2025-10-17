import React from 'react';
import './ProfileStats.css';

const ProfileStats = ({ projects, followers, following }) => {
  return (
    <div className="profile-stats">
      <span className="stat" onClick={() => alert('Projects clicked!')}>Projects: {projects}</span>
      <span className="stat" onClick={() => alert('Followers clicked!')}>Followers: {followers}</span>
      <span className="stat" onClick={() => alert('Following clicked!')}>Following: {following}</span>
    </div>
  );
};

export default ProfileStats;