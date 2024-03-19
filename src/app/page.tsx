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
      .setData([{ name: 'Lorem Ipsum', type: 'XPTO', segment: 'XPTO', value: 20 }])
      .setColumns([
        { title: 'Título', data: 'name' },
        { title: 'Tipo', data: 'type' },
        { title: 'Segmento', data: 'segment' },
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
  const chartEnrollmentResourceRef = useRef<HTMLTableElement>(null);
  const chartEnrollmentVocationalRef = useRef<HTMLTableElement>(null);

  const tableGeneralRef = useRef<HTMLTableElement>(null);
  const tablePSGRef = useRef<HTMLTableElement>(null);
  const tableCommercialRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    document.title = 'Perfil Educacional | Vocacional';
  }, []);

  useEffect(() => {
    const root = new ChartPieBuilder(chartEnrollmentResourceRef.current!.id)
      .setData([
        { category: 'Comercial', value: 2423 },
        { category: 'PSG', value: 1564 }
      ])
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartPieBuilder(chartEnrollmentVocationalRef.current!.id)
      .setData([
        { category: 'OCUPAÇÃO', value: 2806 },
        { category: 'LIVRE', value: 1181 }
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
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Matrícula por Recurso</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
                  </div>
                </div>
                <div className="card-body">
                  <div id="chart-enrollment-resource" className="amcharts-visualization amcharts-small" ref={chartEnrollmentResourceRef}></div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Matrícula por Vocacional</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
                  </div>
                </div>
                <div className="card-body">
                <div id="chart-enrollment-vocational" className="amcharts-visualization amcharts-small" ref={chartEnrollmentVocationalRef}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Distribuição de Matrícula nos Recursos</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
              </div>
            </div>
            <div className="card-body">
              <div className="amcharts-visualization amcharts-small">Force-Directed Tree</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Distribuição de Matrícula nos Tipos de Curso</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
              </div>
            </div>
            <div className="card-body">
              <div className="row justify-content-md-center">
                <div className="col-6">
                  <div className="form-group">
                    <select className="form-control" defaultValue={""}>
                      <option value="" disabled>Tipo de curso</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="amcharts-visualization amcharts-small">Force-Directed Tree</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Relação entre Matrícula e Título por Segmento</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
              </div>
            </div>
            <div className="card-body">
              <div className="amcharts-visualization amcharts-small">Zoomable Bubble Chart</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Título por Recurso</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
              </div>
            </div>
            <div className="card-body">
              <div className="amcharts-visualization amcharts-small">Venn Diagram</div>
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
                      <div className="mt-4">
                        <p className="subsection-title">Segmento dos principais títulos</p>
                        <div className="amcharts-visualization amcharts-small">Simple Treemap</div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <div className="amcharts-visualization amcharts-small">Simple Treemap</div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="highlight-titles-psg" aria-labelledby="highlight-titles-psg-tab" role="tabpanel">
                      <table
                        id="datatable-highlight-title-psg"
                        className="table table-striped table-bordered responsive-table datatable-visualization"
                        style={{ width: "100%" }}
                        ref={tablePSGRef}
                        />
                      <div className="mt-4">
                        <p className="subsection-title">Segmento dos principais títulos</p>
                        <div className="amcharts-visualization amcharts-small">Simple Treemap</div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <div className="amcharts-visualization amcharts-small">Simple Treemap</div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="highlight-titles-commercial" aria-labelledby="highlight-titles-commercial-tab" role="tabpanel">
                      <table
                        id="datatable-highlight-title-commercial"
                        className="table table-striped table-bordered responsive-table datatable-visualization"
                        style={{ width: "100%" }}
                        ref={tableCommercialRef}
                        />
                      <div className="mt-4">
                        <p className="subsection-title">Segmento dos principais títulos</p>
                        <div className="amcharts-visualization amcharts-small">Simple Treemap</div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <div className="amcharts-visualization amcharts-small">Simple Treemap</div>
                      </div>
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
