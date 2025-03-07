
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      {/* Main Heading */}
      <h1 style={styles.title}>404</h1>

      {/* Subtitle */}
      <h2 style={styles.subtitle}>Pagina no encontrada!</h2>

      {/* Description */}
      {/* <p style={styles.description}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p> */}

      {/* Call-to-Action Button */}
      <Link to="/" style={styles.button}>
        Volver al inicio
      </Link>

      {/* Illustration (Optional) */}
      {/* <div style={styles.imageContainer}>
        <img
          src="https://pacucostorage.blob.core.windows.net/common/logo-pacuco-ok-min.webp" // Replace with your own illustration
          alt="pacuco 404 pagina inexistente"
          style={styles.image}
        />
      </div> */}
    </div>
  );
};

export default NotFoundPage;

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    padding: '20px',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  },
  subtitle: {
    fontSize: '2rem',
    color: '#555',
    margin: '40px 0',
    marginBottom: '80px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#777',
    maxWidth: '600px',
    marginBottom: '30px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  imageContainer: {
    marginTop: '40px',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
  },
};