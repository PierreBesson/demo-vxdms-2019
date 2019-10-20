import { Size } from 'app/shared/model/enumerations/size.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  size?: Size;
  imageContentType?: string;
  image?: any;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public price?: number,
    public size?: Size,
    public imageContentType?: string,
    public image?: any
  ) {}
}
