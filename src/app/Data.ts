import { Fields } from "./Fields";

export class Data {
    constructor(
      public model: string,
      public pk: number,
      public fields: Fields,
    ) { }
}
