export default abstract class AbstractVisualizationBuilder {

  protected _containerId: string;
  protected _data: any = undefined;

  constructor(containerId: string) {
    this._containerId = containerId;

    this.reset();
  }

  abstract build(): any;

  reset(): any {
    this._data = undefined;
    return this;
  }

  setData(data: any): any {
    this._data = data;
    return this;
  }

}
