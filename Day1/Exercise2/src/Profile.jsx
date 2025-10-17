import React from 'react';

const Profile = ({ image, name, role, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={`${name}'s profile`} style={styles.image} />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{description}</p>
    </div>
  );
};

const styles = {

  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '250px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '12px'
  }
};

export default Profile;