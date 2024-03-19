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
                <select className="form-control" defaultValue={""}>
                  <option value="" disabled>Estado</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <select className="form-control" defaultValue={""}>
                  <option value="" disabled>Competência</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="info-box">
                <span className="info-box-icon bg-info"><i className="fa-solid fa-building"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Imóveis</span>
                  <span className="info-box-number">15</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="info-box">
                <span className="info-box-icon bg-info"><i className="fa-solid fa-building-un"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Unidades operativas</span>
                  <span className="info-box-number">22</span>
                </div>
              </div>
            </div>
          </div>

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
