import React, { useState } from 'react';

const GitHubSearch = () => {
  const [username, setUsername] = useState('farfesadee');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchGitHubUser = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError('');
    setUserData(null);
    setRepos([]);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error('User not found');
      const user = await userRes.json();

      const reposRes = await fetch(user.repos_url);
      const repoList = await reposRes.json();

      setUserData(user);
      setRepos(repoList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h2>🔍 GitHub User Search</h2>
      <div style={{ marginBottom: '1rem' }}>
        Username:{' '}
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="e.g. farfesadee"
          style={{ padding: '0.3rem' }}
        />
        <button onClick={fetchGitHubUser} style={{ marginLeft: '0.5rem' }}>
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {userData && !loading && (
        <div>
          <img
            src={userData.avatar_url}
            alt="avatar"
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <h3>@{userData.login}</h3>
          <p><strong>{userData.name}</strong></p>
          <p>{userData.bio}</p>
          <p>📚 Repos: {userData.public_repos}</p>
          <p>👥 Followers: {userData.followers}</p>

          {repos.length > 0 && (
            <div>
              <h4>📁 Repositories:</h4>
              <ul>
                {repos.map(repo => (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GitHubSearch;