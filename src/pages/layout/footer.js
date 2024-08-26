// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <ul style={linksStyle}>
          <li style={listItemStyle}>
            <Link href="/" style={footerLinkStyle}>
              Home
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link href="/about" style={footerLinkStyle}>
              About
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link href="/contact" style={footerLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
        <div style={infoStyle}>
          <p style={textStyle}>© 2024 MyApp. All rights reserved.</p>
          <p style={textStyle}>123 Main St, Anytown, USA</p>
        </div>
      </div>
    </footer>
  );
};

// Inline styles
const footerStyle = {
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #444',
};

const containerStyle = {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2rem',
};

const linksStyle = {
  listStyle: 'none',
  padding: '0',
  display: 'flex',
  gap: '1rem',
};

const listItemStyle = {
  margin: '0',
};

const footerLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'color 0.3s',
};

const infoStyle = {
  textAlign: 'right',
};

const textStyle = {
  margin: '0',
  fontSize: '0.8rem',
};

// For hover effects, you'll need to handle this using external CSS or styled-components.
const footerLinkHoverStyle = {
  color: '#f0f0f0',
};

export default Footer;
