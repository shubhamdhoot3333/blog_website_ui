// components/Header.js
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <Link href="/" style={logoLinkStyle}>
            MyApp
          </Link>
        </div>
        <nav style={navStyle}>
          <Link href="/" style={navLinkStyle}>
            Home
          </Link>
          <Link href="/about" style={navLinkStyle}>
            About
          </Link>
          <Link href="/blog" style={navLinkStyle}>
            Blog
          </Link>
          <Link href="/profile" style={navLinkStyle}>
            Profile
          </Link>
          <Link href="/admin" style={navLinkStyle}>
            Admin
          </Link>
        </nav>
        <div style={authStyle}>
          {/* Display login/logout based on authentication status */}
          <button onClick={handleLogout} style={authButtonStyle}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

// Inline styles for simplicity
const headerStyle = {
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const containerStyle = {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2rem',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const logoLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const navStyle = {
  display: 'flex',
  gap: '1rem',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s',
};

const authStyle = {
  display: 'flex',
  alignItems: 'center',
};

const authButtonStyle = {
  backgroundColor: '#f44336',
  color: '#fff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s',
};

export default Header;
