interface ShowProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image:string;
  }
  
  //data Fetch
  export default async function getProduct(): Promise<ShowProduct[] | undefined> {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products", {});
      if (!res.ok) throw new Error("fail data fetch");
      const data = await res.json();
      return data.products;
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }
