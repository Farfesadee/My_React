import React from 'react';
import Profile from "./Profile";

const App = () => {
  return (
    <div style={containerStyle}>
      <Profile
        image="/images/image_4.jpg"
        name="Odushile Omodolapo"
        role="AI Developer"
        description="Learning React to build amazing web apps in Nigeria."
      />
      <Profile
        image="/images/image_3.jpg"
        name="Olawale Olasoji"
        role="Frontend Engineer"
        description="Passionate about crafting beautiful user interfaces in Seoul."
      />
    </div>
  );
};

const containerStyle = {
  display: 'grid',
  justifyContent: 'center',
  gap: '20px',
  padding: '40px'
};

export default App;