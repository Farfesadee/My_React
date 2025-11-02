import React, { useState, useEffect } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userCount, setUserCount] = useState(0);

  const fetchUser = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) throw new Error('Failed to fetch user');
      const data = await response.json();
      const result = data.results[0];
      setUser({
        photo: result.picture.large,
        name: `${result.name.first} ${result.name.last}`,
        email: result.email,
        phone: result.phone,
        location: `${result.location.city}, ${result.location.country}`,
      });
      setUserCount(prev => prev + 1);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h2>👤 Random User Profile</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {user && !loading && (
        <div>
          <img src={user.photo} alt="User" style={{ borderRadius: '50%', width: '120px' }} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.location}</p>
        </div>
      )}
      <button onClick={fetchUser} style={{ marginTop: '1rem' }}>Get New User</button>
      <p>Users viewed: {userCount}</p>
    </div>
  );
};

export default RandomUser;