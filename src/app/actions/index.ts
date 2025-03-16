interface ShowProduct {
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
    const res = await fetch("https://fakestoreapi.in/api/products?limit=150", {});
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}
