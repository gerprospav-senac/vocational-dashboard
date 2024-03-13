"use client"

import Link from 'next/link'

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/" className="nav-link" data-widget="pushmenu" role="button">
            <i className="fas fa-bars" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
