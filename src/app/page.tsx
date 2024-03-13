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
    const datatable = new TableBuilder(tableRef.current!.id)
      .reset()
      .setData([{ type: 'XPTO', value: 20, xpto: 0 }])
      .setColumns([
        { title: 'Type', data: 'type' },
        { title: 'Publications', data: 'value' },
        { title: 'XPTO', data: 'xpto' }
      ])
      .build();

    return () => {
      datatable.clear();
      datatable.destroy();
    };
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-12">
              <h1 className="m-0">Perfil Educacional</h1>
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
        </div>
      </div>
    </div>
  )
}
