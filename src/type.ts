export interface Product {
    id:number;
    title:string
    price:number;
    image:string;
}

export type SortField="price"|"title"|"default"
export type SortOrder="asc"|"desc"