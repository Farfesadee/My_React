import React from 'react';
import StateCard from './StateCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <StateCard state="Lagos" capital="Ikeja" region="West" population="14 million">
        National Theatre
      </StateCard>
      <StateCard state="Enugu" capital="Enugu" region="East" population="3.3 million">
        Ngwo Pine Forest
      </StateCard>
      <StateCard state="Kano" capital="Kano" region="North" population="13 million">
        Gidan Rumfa Palace
      </StateCard>
      <StateCard state="Rivers" capital="Port Harcourt" region="South" population="7 million">
        Port Harcourt Pleasure Park
      </StateCard>
    </div>
  );
};

export default App;