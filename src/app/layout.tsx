"use client"

import { Inter } from 'next/font/google'
import Script from 'next/script'
import Footer from '@/component/footer'
import Sidebar from '@/component/sidebar'
import Header from '@/component/header'

import './layout.scss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`sidebar-mini ${inter.className}`}>
        <div className="wrapper">
          <Header />
          <Sidebar />
          {children}
          <Footer />
          <div id="sidebar-overlay" />
        </div>

        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js" strategy='beforeInteractive' />
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" strategy='lazyOnload' />
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js" strategy='lazyOnload' />
        <Script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" strategy='lazyOnload' />
      </body>
    </html>
  )
}
