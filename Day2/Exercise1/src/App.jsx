import React from 'react';
import GreetingCard from './GreetingCard';
import './index.css';

const App = () => {
  return (
    <div className="cards-page">
      <div className="cards-container">
        <GreetingCard name="Tunde" message="Have a great day!" color="green" />
        <GreetingCard name="Aisha" message="Wishing you joy and peace!" color="skyblue" />
        <GreetingCard name="Chidi" message="Keep smiling and shining!" />
      </div>
    </div>
  );
};

export default App;