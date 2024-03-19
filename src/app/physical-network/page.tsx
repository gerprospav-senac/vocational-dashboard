"use client"

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Rede Física | Vocacional';
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-6">
              <h1 className="m-0">Rede Física</h1>
            </div>
            <div className="col-3">
              <div className="form-group">
                <select className="form-control">
                  <option value="" disabled selected>Estado</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <select className="form-control">
                  <option value="" disabled selected>Competência</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Container</h3>
            </div>
            <div className="card-body">
              Page content
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
