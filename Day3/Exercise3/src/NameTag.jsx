import React, { useState } from 'react';

const NameTag = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const handleDownload = () => {
    const formattedTag = `--- NAME TAG ---\nHello, my name is\n${name.toUpperCase()}\n${title}\n${company}`;
    alert(formattedTag);
  };

  return (
    <div style={styles.container}>
      <h2>Name Tag Generator</h2>
      <input
        type="text"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={styles.input}
      />

      <div style={styles.tag}>
        <p>--- NAME TAG ---</p>
        <p>Hello, my name is</p>
        <h2>{name.toUpperCase()}</h2>
        <p>{title}</p>
        <p>{company}</p>
      </div>

      <button onClick={handleDownload} style={styles.button}>
        Download
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'bisque',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
  },
  input: {
    display: 'block',
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    fontSize: '16px',
  },
  tag: {
    border: '2px solid #333',
    padding: '15px',
    marginTop: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default NameTag;