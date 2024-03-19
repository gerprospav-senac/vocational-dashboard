"use client"

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Mercado | Vocacional';
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-6">
              <h1 className="m-0">Mercado</h1>
            </div>
            <div className="col-3">
              <div className="form-group">
                <select className="form-control" defaultValue={""}>
                  <option value="" disabled>Unidade</option>
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
            <div className="col-3">
              <div className="info-box">
                <span className="info-box-icon bg-info"><i className="fa-solid fa-circle-user"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Matrículas efetivas</span>
                  <span className="info-box-number">1.003 (100%)</span>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="info-box">
                <span className="info-box-icon bg-success"><i className="fa-solid fa-circle-check"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Matrículas aprovadas</span>
                  <span className="info-box-number">848 (84,5%)</span>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="info-box">
                <span className="info-box-icon bg-danger"><i className="fa-solid fa-circle-xmark"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Matrículas reprovadas</span>
                  <span className="info-box-number">93 (9,3%)</span>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="info-box">
                <span className="info-box-icon bg-secondary"><i className="fa-solid fa-circle-exclamation"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Matrículas evadidas</span>
                  <span className="info-box-number">62 (6,2%)</span>
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
