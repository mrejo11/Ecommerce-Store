export interface ShowProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;

  name: string;
  brand: string;
  model: string;
  color: string;
}

//data Fetch
export default async function getProduct(): Promise<ShowProduct[] | undefined> {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products?limit=150", {
      cache:"force-cache"
    });
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    console.log(data)
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}



export async function getTv(): Promise<ShowProduct[] | undefined> {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products/category?type=tv", {});
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}


export async function getAudio(): Promise<ShowProduct[] | undefined> {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products/category?type=audio", {});
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}


export async function getAppliances(): Promise<ShowProduct[] | undefined> {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products/category?type=appliances", {});
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

export async function getMobile(): Promise<ShowProduct[] | undefined> {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products/category?type=mobile", {});
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

export async function getGaming(): Promise<ShowProduct[] | undefined> {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products/category?type=gaming", {});
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}


export async function getLaptop(): Promise<ShowProduct[] | undefined> {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products/category?type=laptop", {});
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

