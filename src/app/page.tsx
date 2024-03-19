"use client"

import { useEffect, useRef } from "react";

import ChartPieBuilder from "@/component/visualization/chart/chart-pie.builder"
import TableBuilder from "@/component/visualization/table/table.builder"

import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css'
import 'datatables.net-searchpanes-bs4/css/searchPanes.bootstrap4.min.css'

export default function Home() {
  const chartRef = useRef<HTMLTableElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

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
    let datatable : any = null;
    
    const _build = async () => {
      const builder = new TableBuilder(tableRef.current!.id)
        .setData([{ type: 'XPTO', value: 20, xpto: 0 }])
        .setColumns([
          { title: 'Type', data: 'type' },
          { title: 'Publications', data: 'value' },
          { title: 'XPTO', data: 'xpto' }
        ]);

      datatable = await builder.build();
    };

    _build();
    return () => {
      datatable?.clear();
      datatable?.destroy();
    };
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
              <table
                id="datatable-geographic-distribution"
                className="table table-striped table-bordered responsive-table datatable-visualization"
                style={{ width: "100%" }}
                ref={tableRef}
                />
              <br />
              <div id="chart-geographic-distribution" className="amcharts-visualization" ref={chartRef}></div>
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
