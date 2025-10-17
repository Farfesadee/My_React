import React from 'react';
import './SkillBadge.css';

const levelColors = {
  Beginner: '#808080',
  Intermediate: '#1E90FF',
  Expert: '#228B22',
};

const SkillBadge = ({ skill, level }) => {
  return (
    <span className="skill-badge" style={{ backgroundColor: levelColors[level] || '#ccc' }}>
      {skill} - {level}
    </span>
  );
};

export default SkillBadge;