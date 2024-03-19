"use client"

import { RefObject, useEffect, useRef } from "react";

import ChartPieBuilder from "@/component/visualization/chart/chart-pie.builder"
import TableBuilder from "@/component/visualization/table/table.builder"

import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css'
import 'datatables.net-searchpanes-bs4/css/searchPanes.bootstrap4.min.css'

const _table = (reference : RefObject<HTMLTableElement>) => {
  let datatableGeneral : any = null;
  const _build = async () => {
    const builder = new TableBuilder(reference.current!.id)
      .setData([{ name: 'Lorem Ipsum', type: 'XPTO', value: 20 }])
      .setColumns([
        { title: 'Título', data: 'name' },
        { title: 'Tipo', data: 'type' },
        { title: 'Nº de matrículas', data: 'value' }
      ]);

    datatableGeneral = await builder.build();
  };
  _build();
  return () => {
    datatableGeneral?.clear();
    datatableGeneral?.destroy();
  };
};

export default function Home() {
  const chartRef = useRef<HTMLTableElement>(null);
  const tableGeneralRef = useRef<HTMLTableElement>(null);
  const tablePSGRef = useRef<HTMLTableElement>(null);
  const tableCommercialRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    document.title = 'Perfil Educacional | Vocacional';
  }, []);

  useEffect(() => {
    const root = new ChartPieBuilder(chartRef.current!.id)
      .setData([
        { category: 'XPTO', value: 50 },
        { category: 'Lorem', value: 30 }
      ])
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    return _table(tableGeneralRef);
  }, []);

  useEffect(() => {
    return _table(tablePSGRef);
  }, []);

  useEffect(() => {
    return _table(tableCommercialRef);
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-6">
              <h1 className="m-0">Perfil Educacional</h1>
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
            <div className="col-6">
              <div className="info-box">
                <span className="info-box-icon bg-info"><i className="fa-solid fa-user"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Total de matrículas</span>
                  <span className="info-box-number">3.987</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="info-box">
                <span className="info-box-icon bg-success"><i className="fa-solid fa-user-graduate"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Total de títulos</span>
                  <span className="info-box-number">77</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Container</h3>
            </div>
            <div className="card-body">
              <div id="chart-geographic-distribution" className="amcharts-visualization" ref={chartRef}></div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Principais Títulos</h3>
              <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i>
              </button>
              </div>
            </div>
            <div className="card-body">
              <div className="card card-primary card-tabs">
                <div className="card-header p-0 pt-1">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="pill" id="highlight-titles-general-tab" href="#highlight-titles-general" aria-controls="highlight-titles-general" aria-selected="true" role="tab">Geral</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" id="highlight-titles-psg-tab" href="#highlight-titles-psg" aria-controls="highlight-titles-psg" aria-selected="false" role="tab">PSG</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" id="highlight-titles-commercial-tab" href="#highlight-titles-commercial" aria-controls="highlight-titles-commercial" aria-selected="false" role="tab">Comercial</a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="highlight-titles-general" aria-labelledby="highlight-titles-general-tab" role="tabpanel">
                    <table
                      id="datatable-highlight-title-general"
                      className="table table-striped table-bordered responsive-table datatable-visualization"
                      style={{ width: "100%" }}
                      ref={tableGeneralRef}
                      />
                    </div>
                    <div className="tab-pane fade" id="highlight-titles-psg" aria-labelledby="highlight-titles-psg-tab" role="tabpanel">
                    <table
                      id="datatable-highlight-title-psg"
                      className="table table-striped table-bordered responsive-table datatable-visualization"
                      style={{ width: "100%" }}
                      ref={tablePSGRef}
                      />
                    </div>
                    <div className="tab-pane fade" id="highlight-titles-commercial" aria-labelledby="highlight-titles-commercial-tab" role="tabpanel">
                    <table
                      id="datatable-highlight-title-commercial"
                      className="table table-striped table-bordered responsive-table datatable-visualization"
                      style={{ width: "100%" }}
                      ref={tableCommercialRef}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
