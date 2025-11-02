import React from 'react';
import GitHubSearch from './GitHubSearch';

const App = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>🔍 GitHub Profile Viewer</h1>
      <GitHubSearch />
    </div>
  );
};

export default App;