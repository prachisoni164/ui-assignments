"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import '../styles/nav.styles.css'; 

const NavBar = () => {
  const pathname = usePathname(); // Get current route

  return (
    <nav>
      <h1 className="logo cursor-pointer">
        <Link href="/">next-app</Link>
      </h1>
      <ul className="nav-list">
        <li className={`nav-item ${pathname.includes('/products') ? 'active' : ''}`}>
          <Link href="/products">products</Link>
        </li>
        <li className={`nav-item ${pathname.includes('/services') ? 'active' : ''}`}>
          <Link href="/services">services</Link>
        </li>
        <li className={`nav-item ${pathname.includes('/posts') ? 'active' : ''}`}>
          <Link href="/posts">posts</Link>
        </li>
        <li className={`nav-item ${pathname.includes('/about') ? 'active' : ''}`}>
          <Link href="/about">about</Link>
        </li>
        <li className={`nav-item ${pathname.includes('/contact') ? 'active' : ''}`}>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
