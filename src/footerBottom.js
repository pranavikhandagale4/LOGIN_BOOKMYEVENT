import React from 'react';

function Footer1() {
  return (
    <footer style={{ position: 'fixed',top:670, bottom: 0, width: '140%', left: 0,
    right: 0, backgroundColor: 'dimgray',marginTop: '20px' }}>
      <p style={{ textAlign: 'center', padding: '10px' }}>
        &copy; {new Date().getFullYear()} My App
      </p>
    </footer>
  );
}

export default Footer1;
