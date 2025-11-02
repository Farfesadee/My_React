import React, { useState } from 'react';

const StatesExplorer = () => {
  const statesData = [
    { name: 'Lagos', capital: 'Ikeja', region: 'South West' },
    { name: 'Plateau', capital: 'Jos', region: 'North Central' },
    { name: 'Kano', capital: 'Kano', region: 'North West' },
    { name: 'Enugu', capital: 'Enugu', region: 'South East' },
    { name: 'Rivers', capital: 'Port Harcourt', region: 'South South' },
    { name: 'Oyo', capital: 'Ibadan', region: 'South West' },
    { name: 'Kaduna', capital: 'Kaduna', region: 'North West' },
    { name: 'Abia', capital: 'Umuahia', region: 'South East' },
    { name: 'Benue', capital: 'Makurdi', region: 'North Central' },
    { name: 'Akwa Ibom', capital: 'Uyo', region: 'South South' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');

  const filteredStates = statesData.filter(state => {
    const matchesSearch =
      state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.capital.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      regionFilter === 'All' || state.region.toLowerCase().includes(regionFilter.toLowerCase());

    return matchesSearch && matchesRegion;
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h2>🇳🇬 Nigerian States</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Search:{' '}
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Enter state or capital"
          />
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setRegionFilter('All')}>All</button>{' '}
        <button onClick={() => setRegionFilter('North')}>North</button>{' '}
        <button onClick={() => setRegionFilter('South')}>South</button>{' '}
        <button onClick={() => setRegionFilter('East')}>East</button>{' '}
        <button onClick={() => setRegionFilter('West')}>West</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredStates.length > 0 ? (
          filteredStates.map((state, index) => (
            <li key={index}>
              {state.name} - Capital: {state.capital} ({state.region})
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>

      <p>
        Showing {filteredStates.length} of {statesData.length} states
      </p>
    </div>
  );
};

export default StatesExplorer;