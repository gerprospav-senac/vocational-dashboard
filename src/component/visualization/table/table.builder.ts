import { getInstance } from '@/component/visualization/table/datatable';
import AbstractVisualizationBuilder from '../abstract-visualization.builder';

export default class TableBuilder extends AbstractVisualizationBuilder {
  
  private _columns: Array<any>;
  private _columnDefs: Array<any>;
  private _order: Array<any>;
  private _responsive: boolean;
  private _paging: boolean;
  private _dom: string;
  private _buttons: Array<any>;
  private _language: Object;

  constructor(containerId: string) {
    super(containerId);

    this._columns = [];
    this._columnDefs = [];
    this._order = [];
    this._responsive = true;
    this._paging = true;
    this._dom = '<"container-fluid"<"row"<"col"B><"col text-right"f>>>rt<"container-fluid"<"row"<"col"i><"col"p>>>';
    this._buttons = ["copy", "csv", "excel", "pdf", "print", "colvis"];
    this._language = this.getLanguageConfig();
  }

  async build(): Promise<any> {
    const DataTable = await getInstance();
    return new DataTable(`#${this._containerId}`, {
      data: this._data,
      columns: this._columns,
      columnDefs: this._columnDefs,
      order: this._order,
      //@ts-ignore
      responsive: this._responsive,
      paging: this._paging,
      dom: this._dom,
      //@ts-ignore
      buttons: this._buttons,
      language: this._language,
      autoWidth: false,
      serverSide: false,
    });
  }
  
  setColumns(columns: Array<any>): TableBuilder {
    this._columns = columns;
    return this;
  }

  setColumnDefs(columnDefs: Array<any>): TableBuilder {
    this._columnDefs = columnDefs;
    return this;
  }

  setOrder(order: Array<any>): TableBuilder {
    this._order = order;
    return this;
  }

  setResponsive(responsive: boolean): TableBuilder {
    this._responsive = responsive;
    return this;
  }

  setPaging(paging: boolean): TableBuilder {
    this._paging = paging;
    return this;
  }

  setDom(dom: string): TableBuilder {
    this._dom = dom;
    return this;
  }

  setButtons(buttons: Array<any>): TableBuilder {
    this._buttons = buttons;
    return this;
  }

  getLanguageConfig(): Object {
    return {
      'sEmptyTable': 'Nenhum registro encontrado',
      'sInfo': 'Mostrando de _START_ até _END_ de _TOTAL_ registros',
      'sInfoEmpty': 'Mostrando 0 até 0 de 0 registros',
      'sInfoFiltered': '(Filtrados de _MAX_ registros)',
      'sInfoPostFix': '',
      'sInfoThousands': '.',
      'sLengthMenu': '_MENU_ resultados por página',
      'sLoadingRecords': 'Carregando...',
      'sProcessing': 'Processando...',
      'sZeroRecords': 'Nenhum registro encontrado',
      'sSearch': 'Pesquisar',
      'oPaginate': {
        'sNext': 'Próximo',
        'sPrevious': 'Anterior',
        'sFirst': 'Primeiro',
        'sLast': 'Último'
      },
      'oAria': {
        'sSortAscending': ': Ordenar colunas de forma ascendente',
        'sSortDescending': ': Ordenar colunas de forma descendente'
      },
      'select': {
        'rows': {
          '_': 'Selecionado %d linhas',
          '0': 'Nenhuma linha selecionada',
          '1': 'Selecionado 1 linha'
        }
      },
      'thousands': '.',
      'decimal': ',',
      'buttons': {
        'copy': 'Copiar',
        'print': 'Imprimir',
        'colvis': 'Coluna(s)'
      }
    };
  }

}