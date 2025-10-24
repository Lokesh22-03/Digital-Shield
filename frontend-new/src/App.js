import React from 'react';
import Chatbot from './components/Chatbot';
import ReportForm from './components/ReportForm';
import SafetyTips from './components/SafetyTips';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={{ margin: 0, color: '#005f73' }}>Digital Shield</h1>
        <p style={styles.subtitle}>Empowering women through awareness, protection, and support</p>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <SafetyTips />
        </section>

        <section style={styles.section}>
          <Chatbot />
        </section>

        <section style={styles.section}>
          <ReportForm />
        </section>
      </main>

      <footer style={styles.footer}>
        <small>© 2025 Digital Shield. All rights reserved.</small>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '20px auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '0 15px',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  subtitle: {
    fontWeight: 300,
    fontSize: '1.1rem',
    color: '#0a9396',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',
  },
  section: {
    backgroundColor: '#e0fbfc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    color: '#555',
  },
};

export default App;
