"use client"

import { RefObject, useEffect, useRef } from "react";

import ChartPieBuilder from "@/component/visualization/chart/chart-pie.builder";
import ChartPackedCircleBuilder from "@/component/visualization/chart/chart-packed-circle.builder";
import ChartTreeBuilder from "@/component/visualization/chart/chart-tree.builder";
import ChartForceDirectedTreeBuilder from "@/component/visualization/chart/chart-force-directed-tree.builder";
import ChartBubbleBuilder from "@/component/visualization/chart/chart-bubble.builder";
import ChartVennBuilder from "@/component/visualization/chart/chart-venn.builder";
import ChartTreeMapBuilder from "@/component/visualization/chart/chart-tree-map.builder";
import TableBuilder from "@/component/visualization/table/table.builder";

import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import 'datatables.net-searchpanes-bs4/css/searchPanes.bootstrap4.min.css';

const packedCircleData = [{
  "name": "Geral",
  "children": [
    {
      "name": "Comercial",
      "children": [
        {
          "name": "Qualificação Profissional",
          "value": 963
        },
        {
          "name": "Aperfeiçoamento",
          "value": 474
        },
        {
          "name": "Programas Instrumentais",
          "value": 450
        },
        {
          "name": "Programas Socioprofissionais",
          "value": 221
        },
        {
          "name": "Habilitação Profissional Técnica de Nível Médio",
          "value": 196
        },
        {
          "name": "Outros",
          "value": 119
        }
      ]
    },
    {
      "name": "PSG",
      "children": [
        {
          "name": "Aprendizagem Profissional de Qualificação",
          "value": 861
        },
        {
          "name": "Qualificação Profissional",
          "value": 354
        },
        {
          "name": "Habilitação Profissional Técnica de Nível Médio",
          "value": 349
        },
        {
          "name": "Outros",
          "value": 0
        }
      ]
    }
  ]
}];

const treeData = [{
  "name": "Geral",
  "children": [
    {
      "name": "Comercial",
      "children": [
        {
          "name": "Qualificação Profissional",
          "value": 963
        },
        {
          "name": "Aperfeiçoamento",
          "value": 474
        },
        {
          "name": "Programas Instrumentais",
          "value": 450
        },
        {
          "name": "Programas Socioprofissionais",
          "value": 221
        },
        {
          "name": "Habilitação Profissional Técnica de Nível Médio",
          "value": 196
        },
        {
          "name": "Outros",
          "value": 119
        }
      ]
    },
    {
      "name": "PSG",
      "children": [
        {
          "name": "Aprendizagem Profissional de Qualificação",
          "value": 861
        },
        {
          "name": "Qualificação Profissional",
          "value": 354
        },
        {
          "name": "Habilitação Profissional Técnica de Nível Médio",
          "value": 349
        },
        {
          "name": "Outros",
          "value": 0
        }
      ]
    }
  ]
}];

const forceDirectedTreeData1 = [
  {
    name: 'Geral',
    children: [
      {
        name: 'Comercial',
        children: [
          {
            "name": "Qualificação Profissional",
            "value": 963
          },
          {
            "name": "Aperfeiçoamento",
            "value": 474
          },
          {
            "name": "Programas Instrumentais",
            "value": 450
          },
          {
            "name": "Programas Socioprofissionais",
            "value": 221
          },
          {
            "name": "Habilitação Profissional Técnica de Nível Médio",
            "value": 196
          },
          {
            "name": "Outros",
            "value": 119
          }
        ]
      },
      {
        name: 'PSG',
        children: [
          {
            "name": "Aprendizagem Profissional de Qualificação",
            "value": 861
          },
          {
            "name": "Qualificação Profissional",
            "value": 354
          },
          {
            "name": "Habilitação Profissional Técnica de Nível Médio",
            "value": 349
          },
          {
            "name": "Outros",
            "value": 0
          }
        ]
      }
    ]
  }
];

const forceDirectedTreeData2 = [
  {
    name: 'Qualificação Profissional',
    children: [
      {
        name: 'Beleza',
        children: [
          {
            "name": "Comercial",
            "value": 38
          },
          {
            "name": "PSG",
            "value": 168
          }
        ]
      },
      {
        name: 'Comércio',
        children: [
          {
            "name": "Comercial",
            "value": 49
          },
          {
            "name": "PSG",
            "value": 22
          }
        ]
      },
      {
        name: 'Design',
        children: [
          {
            "name": "Comercial",
            "value": 40
          },
          {
            "name": "PSG",
            "value": 0
          }
        ]
      },
      {
        name: 'Gastronomia',
        children: [
          {
            "name": "Comercial",
            "value": 91
          },
          {
            "name": "PSG",
            "value": 0
          }
        ]
      },
      {
        name: 'Gestão',
        children: [
          {
            "name": "Comercial",
            "value": 259
          },
          {
            "name": "PSG",
            "value": 208
          }
        ]
      },
      {
        name: 'Hospedagem',
        children: [
          {
            "name": "Comercial",
            "value": 48
          },
          {
            "name": "PSG",
            "value": 0
          }
        ]
      },
      {
        name: 'Instalação, Manutenção e Reparação',
        children: [
          {
            "name": "Comercial",
            "value": 111
          },
          {
            "name": "PSG",
            "value": 0
          }
        ]
      },
      {
        name: 'Moda',
        children: [
          {
            "name": "Comercial",
            "value": 66
          },
          {
            "name": "PSG",
            "value": 57
          }
        ]
      },
      {
        name: 'Saúde',
        children: [
          {
            "name": "Comercial",
            "value": 99
          },
          {
            "name": "PSG",
            "value": 2
          }
        ]
      },
      {
        name: 'T.I.',
        children: [
          {
            "name": "Comercial",
            "value": 48
          },
          {
            "name": "PSG",
            "value": 0
          }
        ]
      },
      {
        name: 'Asseio, Conservação e Zeladoria',
        children: [
          {
            "name": "Comercial",
            "value": 39
          },
          {
            "name": "PSG",
            "value": 0
          }
        ]
      }
    ]
  }
];

const bubbleData = [
  {
    "title": "Beleza",
    "settings": {
      "fill": "#CEFF7A",
      "stroke": "#CEFF7A",
    },
    "x": 100,
    "y": 200,
    "value": 100
  },
  {
    "title": "Comércio",
    "settings": {
      "fill": "#FF8080",
      "stroke": "#FF8080",
    },
    "x": 80,
    "y": 160,
    "value": 80
  },
  {
    "title": "Design",
    "settings": {
      "fill": "#B457C4",
      "stroke": "#B457C4",
    },
    "x": 60,
    "y": 120,
    "value": 60
  },
  {
    "title": "Gastronomia",
    "settings": {
      "fill": "#D2C2A6",
      "stroke": "#D2C2A6",
    },
    "x": 40,
    "y": 80,
    "value": 40
  },
  {
    "title": "Gestão",
    "settings": {
      "fill": "#F0F0F3",
      "stroke": "#F0F0F3",
    },
    "x": 20,
    "y": 40,
    "value": 20
  },
];

const treeMapData1 = [{
  name: "Root",
  children: [
    {
      name: "Saúde",
      value: 3
    },
    {
      name: "Comércio",
      value: 2
    },
    {
      name: "Gestão",
      value: 2
    },
    {
      name: "Beleza",
      value: 1
    },
    {
      name: "Instalação, Manutenção e Reparação",
      value: 1
    },
    {
      name: "Moda",
      value: 1
    }
  ]
}];

const treeMapData2 = [{
  name: "Root",
  children: [
    {
      name: "Qualificação profissional",
      value: 5
    },
    {
      name: "Aprendizagem Profissional de Qualificação",
      value: 3
    },
    {
      name: "Habilitação Profissional Técnica de Nível Médio",
      value: 2
    }
  ]
}];

const _table = (reference : RefObject<HTMLTableElement>) => {
  let datatableGeneral : any = null;
  const _build = async () => {
    const builder = new TableBuilder(reference.current!.id)
      .setData([
        { name: 'Aprendizagem Profissional de Qualificação em Serviços Administrativos', segment: 'Saúde', type: 'Qualificação profissional', value: 516 },
        { name: 'Assistente Administrativo', segment: 'Saúde', type: 'Qualificação profissional', value: 311 },
        { name: 'Informática Básica - Sistema Operacional Windows e Pacote Office', segment: 'Saúde', type: 'Qualificação profissional', value: 144 },
        { name: 'Lógica de Programação', segment: 'Comércio', type: 'Qualificação profissional', value: 144 },
        { name: 'Eletricista Instalador Predial de Baixa Tensão', segment: 'Comércio', type: 'Qualificação profissional', value: 111 },
        { name: 'Maquiador', segment: 'Gestão', type: 'Aprendizagem Profissional de Qualificação', value: 98 },
        { name: 'Técnico em Enfermagem', segment: 'Gestão', type: 'Aprendizagem Profissional de Qualificação', value: 97 },
        { name: 'Técnico em Óptica', segment: 'Beleza', type: 'Aprendizagem Profissional de Qualificação', value: 94 },
        { name: 'Aprendizagem Profissional de Qualificação em Serviços Comerciais', segment: 'Instalação, Manutenção e Reparação', type: 'Habilitação Profissional Técnica de Nível Médio', value: 89 },
        { name: 'Cuidador de Idoso', segment: 'Moda', type: 'Habilitação Profissional Técnica de Nível Médio', value: 88 },
      ])
      .setColumns([
        { title: 'Título', data: 'name' },
        { title: 'Segmento', data: 'segment' },
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
  const chartEnrollmentResourceRef = useRef<HTMLTableElement>(null);
  const chartEnrollmentVocationalRef = useRef<HTMLTableElement>(null);

  const chartEnrollmentResourcePackedCircleRef = useRef<HTMLTableElement>(null);
  const chartEnrollmentResourceTreeRef = useRef<HTMLTableElement>(null);
  const chartEnrollmentResourceForceDirectedTreeRef = useRef<HTMLTableElement>(null);
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
        { sliceSettings: { fill: '#408BFC', stroke: '#408BFC' }, category: 'Comercial', value: 2423 },
        { sliceSettings: { fill: '#23209C', stroke: '#23209C' }, category: 'PSG', value: 1564 }
      ])
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartPieBuilder(chartEnrollmentVocationalRef.current!.id)
      .setData([
        { sliceSettings: { fill: '#DE6A73', stroke: '#DE6A73' }, category: 'Ocupação específica', value: 2806 },
        { sliceSettings: { fill: '#6B2328', stroke: '#6B2328' }, category: 'Livre oferta', value: 1181 }
      ])
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartPackedCircleBuilder(chartEnrollmentResourcePackedCircleRef.current!.id)
      .setData(packedCircleData)
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
    const root = new ChartForceDirectedTreeBuilder(chartEnrollmentResourceForceDirectedTreeRef.current!.id)
      .setData(forceDirectedTreeData1)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartForceDirectedTreeBuilder(chartEnrollmentTypeTreeRef.current!.id)
      .setData(forceDirectedTreeData2)
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
      .setData(treeMapData1)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleSegmentPSGRef.current!.id)
      .setData(treeMapData2)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleSegmentCommercialRef.current!.id)
      .setData(treeMapData1)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleTypeGeneralRef.current!.id)
      .setData(treeMapData2)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleTypePSGRef.current!.id)
      .setData(treeMapData1)
      .build();

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    const root = new ChartTreeMapBuilder(chartTitleTypeCommercialRef.current!.id)
      .setData(treeMapData2)
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
          <blockquote className="highlight">
            <p>Na competência <strong>Mês/Ano</strong>, o regional <strong>DR</strong> conta com um total de <strong>000</strong> matrículas e <strong>000</strong> títulos ofertados na unidade <strong>NOMEUNID</strong>.</p>
          </blockquote>
          <div className="row">
            <div className="col-6">
              <div className="info-box">
                <span className="info-box-icon bg-info"><i className="fa-solid fa-user"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Matrículas totais na unidade</span>
                  <span className="info-box-number">3.987</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="info-box">
                <span className="info-box-icon bg-success"><i className="fa-solid fa-user-graduate"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Títulos ofertados na unidade</span>
                  <span className="info-box-number">77</span>
                </div>
              </div>
            </div>
          </div>
          <blockquote className="highlight">
            <p>Em relação as principais características da oferta, de acordo com o total de matrículas na unidade <strong>NOMEUNID</strong> do regional <strong>DR</strong>, a modalidade de recurso mais representativa é o <strong>RECURSO</strong> e o direcionamento vocacional está associado a cursos <strong>DE LIVRE OFERTA/QUE FORMAM PARA UMA OCUPAÇÃO</strong>.</p>
          </blockquote>
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Matrículas totais segundo modalidade de recurso</h3>
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
                  <h3 className="card-title">Matrículas totais segundo tendência educacional</h3>
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
          <blockquote className="highlight">
            <p>A análise das modalidades de recurso ofertadas pelo regional <strong>DR</strong> na unidade <strong>NOMEUNID</strong> por tipo curso, traz um total de <strong>000</strong> matrículas no recurso <strong>PSG</strong> distribuídas pelos três principais tipos de curso em ordem de prioridade: <strong>TIP1</strong>, <strong>TIP2</strong> e <strong>TIP3</strong>. Por outro lado, no recurso <strong>COMERCIAL</strong>, o total de <strong>000</strong> matrículas se divide entre: <strong>TIP1</strong>, <strong>TIP2</strong> e <strong>TIP3</strong>.</p>
          </blockquote>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Tipos de cursos ofertados por modalidade de recurso 1</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
              </div>
            </div>
            <div className="card-body">
              <div id="chart-enrollment-resource-packed-circle" className="amcharts-visualization" ref={chartEnrollmentResourcePackedCircleRef}></div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Tipos de cursos ofertados por modalidade de recurso 2</h3>
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
              <h3 className="card-title">Tipos de cursos ofertados por modalidade de recurso 3</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
              </div>
            </div>
            <div className="card-body">
              <div id="chart-enrollment-resource-force-directed-tree" className="amcharts-visualization" ref={chartEnrollmentResourceForceDirectedTreeRef}></div>
            </div>
          </div>
          <blockquote className="highlight">
            <p>Os tipos <strong>TIP1, TIP2 (simultâneos)</strong> ofertados pelo regional <strong>DR</strong> na unidade <strong>NOMEUNID</strong> possuem matrículas nas duas modalidades de recurso. Quando observado o detalhamento em nível de segmento, o tipo <strong>TIP1</strong> tem mais representatividade no segmento <strong>SEG</strong> e no recurso <strong>REC</strong>. Em contrapartida, o segmento <strong>SEG2</strong> e no recurso <strong>REC2</strong> tem menor representatividade.</p>
          </blockquote>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Tipo de curso por segmento educacional e modalidade de recurso</h3>
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
          <blockquote className="highlight">
            <p>O tópico a seguir explora associação entre o número de matrículas e a quantidade de títulos ofertados pela unidade <strong>NOMEUNID</strong> do regional <strong>DR</strong> para indicar a intensidade dessa relação, de acordo com a categoria escolhida.</p>
            <p>O segmento educacional <strong>SEG1</strong> do eixo tecnológico <strong>EX1</strong> se destaca pelo maior número de matrículas e títulos ofertados. Em contraste, com o <strong>SEG2</strong> da modalidade de ensino <strong>SEG2</strong> que traz uma relação de menor intensidade entre matrículas e títulos ofertados pela unidade <strong>NOMEUNID</strong> do regional <strong>DR</strong>.</p>
          </blockquote>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Relação entre matrículas totais e títulos ofertados por segmento</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
              </div>
            </div>
            <div className="card-body">
              <div id="chart-enrollment-title-segment-bubble" className="amcharts-visualization" ref={chartEnrollmentTitleSegmentBubbleRef}></div>
            </div>
          </div>
          <blockquote className="highlight">
            <p>O recorte por títulos ofertados na unidade <strong>NOMEUNID</strong> do regional <strong>DR</strong> traz como quantitativo o total de <strong>QDT_TIT-PSG</strong> ofertados somente na modalidade de recurso <strong>PSG</strong>, <strong>QTD-TIT-Comercial</strong> títulos restritos apenas a modalidade comercial e <strong>QTD-Comum</strong> comum as duas modalidades de recurso.</p>
          </blockquote>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Quantidade de títulos ofertados segundo modalidade de recurso</h3>
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
              <h3 className="card-title">Distribuição dos títulos ofertados segundo modalidade de recurso</h3>
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
                      <blockquote className="highlight">
                        <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os títulos: <strong>TIT1</strong>, <strong>TIT2</strong>, <strong>TIT3</strong> com maior volume de matriculas.</p>
                      </blockquote>
                      <table
                        id="datatable-highlight-title-general"
                        className="table table-striped table-bordered responsive-table datatable-visualization"
                        style={{ width: "100%" }}
                        ref={tableGeneralRef}
                        />
                      <div className="mt-4">
                        <p className="subsection-title">Segmento dos principais títulos</p>
                        <blockquote className="highlight">
                          <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os segmentos: <strong>SEG1</strong>, <strong>SEG2</strong>, <strong>SEG3</strong> com maior volume de matrículas.</p>
                        </blockquote>
                        <div id="chart-title-segment-general" className="amcharts-visualization amcharts-small" ref={chartTitleSegmentGeneralRef}></div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <blockquote className="highlight">
                          <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os tipos de Curso: <strong>TP1</strong>, <strong>TP2</strong>, <strong>TP3</strong> com maior volume de matrículas.</p>
                        </blockquote>
                        <div id="chart-title-type-general" className="amcharts-visualization amcharts-small" ref={chartTitleTypeGeneralRef}></div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="highlight-titles-psg" aria-labelledby="highlight-titles-psg-tab" role="tabpanel">
                      <blockquote className="highlight">
                        <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os títulos: <strong>TIT1</strong>, <strong>TIT2</strong>, <strong>TIT3</strong> com maior volume de matriculas.</p>
                      </blockquote>
                      <table
                        id="datatable-highlight-title-psg"
                        className="table table-striped table-bordered responsive-table datatable-visualization"
                        style={{ width: "100%" }}
                        ref={tablePSGRef}
                        />
                      <div className="mt-4">
                        <p className="subsection-title">Segmento dos principais títulos</p>
                        <blockquote className="highlight">
                          <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os segmentos: <strong>SEG1</strong>, <strong>SEG2</strong>, <strong>SEG3</strong> com maior volume de matrículas.</p>
                        </blockquote>
                        <div id="chart-title-segment-psg" className="amcharts-visualization amcharts-small" ref={chartTitleSegmentPSGRef}></div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <blockquote className="highlight">
                          <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os tipos de Curso: <strong>TP1</strong>, <strong>TP2</strong>, <strong>TP3</strong> com maior volume de matrículas.</p>
                        </blockquote>
                        <div id="chart-title-type-psg" className="amcharts-visualization amcharts-small" ref={chartTitleTypePSGRef}></div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="highlight-titles-commercial" aria-labelledby="highlight-titles-commercial-tab" role="tabpanel">
                      <blockquote className="highlight">
                        <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os títulos: <strong>TIT1</strong>, <strong>TIT2</strong>, <strong>TIT3</strong> com maior volume de matriculas.</p>
                      </blockquote>
                      <table
                        id="datatable-highlight-title-commercial"
                        className="table table-striped table-bordered responsive-table datatable-visualization"
                        style={{ width: "100%" }}
                        ref={tableCommercialRef}
                        />
                      <div className="mt-4">
                        <p className="subsection-title">Segmento dos principais títulos</p>
                        <blockquote className="highlight">
                          <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os segmentos: <strong>SEG1</strong>, <strong>SEG2</strong>, <strong>SEG3</strong> com maior volume de matrículas.</p>
                        </blockquote>
                        <div id="chart-title-segment-commercial" className="amcharts-visualization amcharts-small" ref={chartTitleSegmentCommercialRef}></div>
                      </div>
                      <div className="mt-4">
                        <p className="subsection-title">Tipo de curso dos principais títulos</p>
                        <blockquote className="highlight">
                          <p>Entre os <strong>QTD-Comum</strong> comum, destacam-se os tipos de Curso: <strong>TP1</strong>, <strong>TP2</strong>, <strong>TP3</strong> com maior volume de matrículas.</p>
                        </blockquote>
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
