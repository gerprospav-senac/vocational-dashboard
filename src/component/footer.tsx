"use client"

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-inline">Copyright © {year}</div>
      <strong>Vocacional @ 1.0.0</strong>
    </footer>
  )
}
