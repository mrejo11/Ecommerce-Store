export interface Product {
    id:number;
    title:string
    price:number;
    image:string;
    brand:string;
    model:string
    color:string
    description:string;
    quantity?:number
}

export type SortField="price"|"title"|"default"
export type SortOrder="asc"|"desc"