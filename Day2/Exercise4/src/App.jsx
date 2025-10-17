import React from 'react';
import ProfileCard from './ProfileCard';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import SkillBadge from './SkillBadge';

const App = () => {
  return (
    <ProfileCard>
      <ProfileHeader
        name="Odushile Omodolapo"
        title="AI Developer at Paystack"
        avatar="https://via.placeholder.com/100?text=Avatar"
      />
      <ProfileStats projects={50} followers="1.2M" following={300} />
      <div style={{ textAlign: 'center' }}>
        <h4>Skills:</h4>
        <SkillBadge skill="React" level="Beginner" />
        <SkillBadge skill="JavaScript" level="Intermediate" />
        <SkillBadge skill="CSS" level="Intermediate" />
        <SkillBadge skill="HTML" level="Expert" />
        <SkillBadge skill="Backend Development" level="Beginner" />
      </div>
    </ProfileCard>
  );
};

export default App;