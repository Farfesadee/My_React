import React, { useState, useEffect } from 'react';

const UniversityDirectory = () => {
  const [universities, setUniversities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUniversities = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://universities.hipolabs.com/search?country=Nigeria');
      if (!response.ok) throw new Error('Failed to fetch universities');
      const data = await response.json();
      const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      setUniversities(sorted);
      setFiltered(sorted);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filteredList = universities.filter(u =>
      u.name.toLowerCase().includes(term) ||
      (u['state-province'] && u['state-province'].toLowerCase().includes(term))
    );
    setFiltered(filteredList);
  }, [searchTerm, universities]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h2>🎓 Nigerian Universities</h2>
      <label>
        Search:{' '}
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Enter name or state"
          style={{ padding: '0.3rem', marginBottom: '1rem' }}
        />
      </label>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && (
        <>
          <p>Showing {filtered.length} universities</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filtered.map((uni, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
                <strong>{uni.name}</strong><br />
                {uni['state-province'] || 'N/A'}<br />
                🔗 <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
                  {uni.web_pages[0]}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UniversityDirectory;