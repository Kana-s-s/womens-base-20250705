import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <span className="netflix-icon">N</span>
        <span>Netflix</span>
      </div>
      <nav className="nav">
        <a href="#">ホーム</a>
        <a href="#">映画</a>
        <a href="#">TV</a>
        <a href="#">新着・人気</a>
        <a href="#">マイリスト</a>
      </nav>
      <div className="nav-icons">
        <span className="icon">🔍</span>
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
}

export default Header; 