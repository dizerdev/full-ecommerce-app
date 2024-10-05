import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justfy-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            Full
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
