"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
interface ShowProduct {
  id: number;
  title: string;
  price: number;
  description: string;
}

//data Fetch
async function getProduct(): Promise<ShowProduct[] | undefined> {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products", {});
    if (!res.ok) throw new Error("fail data fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

// state for sort
function ProductList() {
  const [sortField, setSortField] = useState<"price" | "title" | "default">(
    "default"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  //useQuery for fetch data
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
    staleTime: 86400 * 1000,
  });

  //sortDataFunction
  const handleSort = (field: "price" | "title" | "default") => {
    const newOrder =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newOrder);
  };

  //sortData
  const sortedProducts = products
    ? [...products].sort((a, b) => {
        if (sortField === "price") {
          return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        }
        if (sortField === "title") {
          return sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
        return 0; //default sort
      })
    : [];

  //rendered
  if (isLoading)
    return (
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <Skeleton className="h-[200px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  
  if (error) return <div>error for Loading product</div>;

  return (
    <div className="container mt-6 mx-auto gap-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold bg-amber-400">sort By</h1>
      <div className="flex gap-2">
        <span
          className={`${
            sortField === "default"
              ? "cursor-pointer p-2 bg-gray-800 text-amber-50 dark:text-amber-50 rounded-full transition-all ease-in-out duration-500"
              : "cursor-pointer p-2  text-black rounded"
          }`}
          onClick={() => handleSort("default")}
        >
          All {sortField === "price" && sortOrder === "asc"}
        </span>
        <span
          className={`${
            sortField === "price"
              ? "cursor-pointer p-2 bg-gray-800 text-amber-50 rounded-full transition-all ease-in-out duration-500"
              : "cursor-pointer p-2  text-black rounded"
          }`}
          onClick={() => handleSort("price")}
        >
          Price {sortField === "price" && sortOrder === "asc"}
        </span>
        <span
          className={`${
            sortField === "title"
              ? "cursor-pointer p-2 bg-gray-800 text-amber-50 rounded-full transition-all ease-in-out duration-500"
              : "cursor-pointer p-2  text-black rounded"
          }`}
          onClick={() => handleSort("title")}
        >
          Title {sortField === "title" && sortOrder === "asc"}
        </span>
      </div>
      {sortedProducts.map((product) => (
        <div className="flex items-center ml-l" key={product.id}>
          {product.title} - ${product.price}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return <ProductList />;
}
