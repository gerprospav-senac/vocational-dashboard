"use client"

import { RefObject, useEffect, useRef } from "react";

import ChartPieBuilder from "@/component/visualization/chart/chart-pie.builder";
import ChartTreeBuilder from "@/component/visualization/chart/chart-tree.builder";
import ChartBubbleBuilder from "@/component/visualization/chart/chart-bubble.builder";
import ChartVennBuilder from "@/component/visualization/chart/chart-venn.builder";
import ChartTreeMapBuilder from "@/component/visualization/chart/chart-tree-map.builder";
import TableBuilder from "@/component/visualization/table/table.builder";

import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import 'datatables.net-searchpanes-bs4/css/searchPanes.bootstrap4.min.css';

const bubbleData = [
  {
    "title": "Afghanistan",
    "id": "AF",
    "color": "#eea638",
    "continent": "asia",
    "x": 1349.69694102398,
    "y": 60.524,
    "value": 33397058
  },
  {
    "title": "Albania",
    "id": "AL",
    "color": "#d8854f",
    "continent": "europe",
    "x": 6969.30628256456,
    "y": 77.185,
    "value": 3227373
  },
  {
    "title": "Algeria",
    "id": "DZ",
    "color": "#de4c4f",
    "continent": "africa",
    "x": 6419.12782939372,
    "y": 70.874,
    "value": 36485828
  },
  {
    "title": "Angola",
    "id": "AO",
    "color": "#de4c4f",
    "continent": "africa",
    "x": 5838.15537582502,
    "y": 51.498,
    "value": 20162517
  },
  {
    "title": "Argentina",
    "id": "AR",
    "color": "#86a965",
    "continent": "south_america",
    "x": 15714.1031814398,
    "y": 76.128,
    "value": 41118986
  },
  {
    "title": "Armenia",
    "id": "AM",
    "color": "#d8854f",
    "continent": "europe",
    "x": 5059.0879636443,
    "y": 74.469,
    "value": 3108972
  },
  {
    "title": "Australia",
    "id": "AU",
    "color": "#8aabb0",
    "continent": "australia",
    "x": 36064.7372768548,
    "y": 82.364,
    "value": 22918688
  },
  {
    "title": "Austria",
    "id": "AT",
    "color": "#d8854f",
    "continent": "europe",
    "x": 36731.6287741081,
    "y": 80.965,
    "value": 8428915
  },
  {
    "title": "Azerbaijan",
    "id": "AZ",
    "color": "#d8854f",
    "continent": "europe",
    "x": 9291.02626998762,
    "y": 70.686,
    "value": 9421233
  }
];

const treeData = [
  {
    children: [{
    children: [{
    children: [{
    name: "A0A00",
    value: 91
  }, {
    name: "A0A01",
    value: 87
  }, {
    name: "A0A02",
    value: 65
  }, {
    name: "A0A03",
    value: 46
  }],
    name: "A0A1"
  }, {
    name: "A0B1",
    value: 35
  }],
    name: "A0"
  }, {
    children: [{
    children: [{
    name: "B1A00",
    value: 3
  }, {
    name: "B1A01",
    value: 6
  }, {
    name: "B1A02",
    value: 88
  }],
    name: "B1A1"
  }, {
    name: "B1B1",
    value: 45
  }],
    name: "B0"
  }, {
    children: [{
    children: [{
    name: "C2A00",
    value: 63
  }, {
    name: "C2A01",
    value: 18
  }, {
    name: "C2A02",
    value: 16
  }, {
    name: "C2A03",
    value: 30
  }, {
    name: "C2A04",
    value: 8
  }],
    name: "C2A1"
  }, {
    name: "C2B1",
    value: 44
  }, {
    name: "C2C1",
    value: 75
  }, {
    children: [{
    name: "C2D30",
    value: 70
  }, {
    name: "C2D31",
    value: 99
  }],
    name: "C2D1"
  }],
    name: "C0"
  }, {
    children: [{
    name: "D3A1",
    value: 81
  }, {
    children: [{
    name: "D3B10",
    value: 76
  }, {
    name: "D3B11",
    value: 61
  }, {
    name: "D3B12",
    value: 45
  }, {
    name: "D3B13",
    value: 97
  }],
    name: "D3B1"
  }, {
    children: [{
    name: "D3C20",
    value: 23
  }, {
    name: "D3C21",
    value: 68
  }],
    name: "D3C1"
  }, {
    name: "D3D1",
    value: 48
  }],
    name: "D0"
  }, {
    children: [{
    name: "E4A1",
    value: 36
  }, {
    name: "E4B1",
    value: 80
  }, {
    name: "E4C1",
    value: 73
  }, {
    children: [{
    name: "E4D30",
    value: 77
  }, {
    name: "E4D31",
    value: 98
  }, {
    name: "E4D32",
    value: 38
  }],
    name: "E4D1"
  }],
    name: "E0"
  }],
    name: "Root"
  }
];

const treeMapData = [{
  name: "Root",
  children: [
    {
      name: "First",
      children: [
        {
          name: "A1",
          value: 100
        },
        {
          name: "A2",
          value: 60
        },
        {
          name: "A3",
          value: 30
        }
      ]
    },
    {
      name: "Second",
      children: [
        {
          name: "B1",
          value: 135
        },
        {
          name: "B2",
          value: 98
        },
        {
          name: "B3",
          value: 56
        }
      ]
    },
    {
      name: "Third",
      children: [
        {
          name: "C1",
          value: 335
        },
        {
          name: "C2",
          value: 148
        },
        {
          name: "C3",
          value: 126
        },
        {
          name: "C4",
          value: 26
        }
      ]
    },
    {
      name: "Fourth",
      children: [
        {
          name: "D1",
          value: 415
        },
        {
          name: "D2",
          value: 148
        },
        {
          name: "D3",
          value: 89
        },
        {
          name: "D4",
          value: 64
        },
        {
          name: "D5",
          value: 16
        }
      ]
    },
    {
      name: "Fifth",
      children: [
        {
          name: "E1",
          value: 687
        },
        {
          name: "E2",
          value: 148
        }
      ]
    }
  ]
}];

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

  const chartEnrollmentResourceTreeRef = useRef<HTMLTableElement>(null);
  const chartEnrollmentTypeTreeRef = useRef<HTMLTableElement>(null);

  const chartEnrollmentTitleSegmentBubbleRef = useRef<HTMLTableElement>(null);

  const chartTitleResourceRef = useRef<HTMLTableElement>(null);

  const chartTitleSegmentGeneralRef = useRef<HTMLTableElement>(null);
  const chartTitleSegmentPSGRef = useRef<HTMLTableElement>(null);
  const chartTitleSegmentCommercialRef = useRef<HTMLTableElement>(null);

  const chartTitleTypeGeneralRef = useRef<HTMLTableElement>(null);
  const chartTitleTypePSGRef = useRef<HTMLTableElement>(null);
  const chartTitleTypeCommercialRef = useRef<HTMLTableElement>(null);

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
    const root = new ChartTreeBuilder(chartEnrollmentResourceTreeRef.current!.id)
      .setData(treeData)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeBuilder(chartEnrollmentTypeTreeRef.current!.id)
      .setData(treeData)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartBubbleBuilder(chartEnrollmentTitleSegmentBubbleRef.current!.id)
      .setData(bubbleData)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartVennBuilder(chartTitleResourceRef.current!.id)
      .setData([
        { name: 'Comercial', value: 51 },
        { name: 'PSG', value: 15 },
        { name: 'Geral', value: 11, sets: ['Comercial', 'PSG'] }
      ])
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleSegmentGeneralRef.current!.id)
      .setData(treeMapData)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleSegmentPSGRef.current!.id)
      .setData(treeMapData)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleSegmentCommercialRef.current!.id)
      .setData(treeMapData)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleTypeGeneralRef.current!.id)
      .setData(treeMapData)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleTypePSGRef.current!.id)
      .setData(treeMapData)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleTypeCommercialRef.current!.id)
      .setData(treeMapData)
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
              <div id="chart-enrollment-resource-tree" className="amcharts-visualization" ref={chartEnrollmentResourceTreeRef}></div>
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
              <div id="chart-enrollment-type-tree" className="amcharts-visualization" ref={chartEnrollmentTypeTreeRef}></div>
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
              <div id="chart-enrollment-title-segment-bubble" className="amcharts-visualization" ref={chartEnrollmentTitleSegmentBubbleRef}></div>
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
              <div id="chart-title-resource" className="amcharts-visualization" ref={chartTitleResourceRef}></div>
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
                        <div id="chart-title-segment-general" className="amcharts-visualization amcharts-small" ref={chartTitleSegmentGeneralRef}></div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <div id="chart-title-type-general" className="amcharts-visualization amcharts-small" ref={chartTitleTypeGeneralRef}></div>
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
                        <div id="chart-title-segment-psg" className="amcharts-visualization amcharts-small" ref={chartTitleSegmentPSGRef}></div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <div id="chart-title-type-psg" className="amcharts-visualization amcharts-small" ref={chartTitleTypePSGRef}></div>
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
                        <div id="chart-title-segment-commercial" className="amcharts-visualization amcharts-small" ref={chartTitleSegmentCommercialRef}></div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <div id="chart-title-type-commercial" className="amcharts-visualization amcharts-small" ref={chartTitleTypeCommercialRef}></div>
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
