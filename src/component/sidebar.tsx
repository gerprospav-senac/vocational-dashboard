"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import brandSVG from '@/app/brand.svg'

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link href="/" className="brand-link">
        <Image src={brandSVG} className="brand-image" alt="brand" />
        <span className="brand-text">Vocacional</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-header text-white">Navegação</li>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Perfil Educacional</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/market" className={`nav-link ${pathname === '/market' ? 'active' : ''}`}>
                <i className="nav-icon fa-solid fa-circle-info" />
                <p>Mercado</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/physical-network" className={`nav-link ${pathname === '/physical-network' ? 'active' : ''}`}>
                <i className="nav-icon fa-solid fa-circle-info" />
                <p>Rede Física</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
