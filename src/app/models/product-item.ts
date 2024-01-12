import {skip} from "rxjs";

export class ProductItem {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  disponibilite:boolean;

  constructor(id: number, name: string, imageUrl: string, description: string, price: number,disponibilite:boolean) {
    this.id = id;
    this.title = name;
    this.thumbnail = imageUrl;
    this.description = description;
    this.price = price;
    this.disponibilite=disponibilite;
  }
}

export class ProductResponse{
  private _products:ProductItem[];
  private _total:number;
  private _skip:number;
  private _limit:number;


  constructor(products: ProductItem[], total: number, skip: number, limit: number) {
    this._products = products;
    this._total = total;
    this._skip = skip;
    this._limit = limit;
  }


  get products(): ProductItem[] {
    return this._products;
  }

  set products(value: ProductItem[]) {
    this._products = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get skip(): number {
    return this._skip;
  }

  set skip(value: number) {
    this._skip = value;
  }

  get limit(): number {
    return this._limit;
  }

  set limit(value: number) {
    this._limit = value;
  }
}
