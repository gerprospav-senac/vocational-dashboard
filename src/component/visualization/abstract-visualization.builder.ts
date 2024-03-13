export default abstract class AbstractVisualizationBuilder {

  protected _containerId: string;
  protected _data: any;

  constructor(containerId: string) {
    this._containerId = containerId;
    this._data = [];
  }

  abstract build(): any;

  setData(data: any): any {
    this._data = data;
    return this;
  }

}
