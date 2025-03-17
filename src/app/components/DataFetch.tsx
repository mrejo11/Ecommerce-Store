"use client";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import getProduct from "../actions";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { setSort, setCurrentPage } from "@/store/sortSlice";
import { RootState, AppDispatch } from "@/store/store";
import { SortField } from "@/type";
import Pagination from "./Pagination";
import { openModal } from "@/store/modalSlice";
import { Product } from "@/type";
import ProductModalWindow from "./ProductModalWindow";

function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const { sortField, sortOrder, currentPage } = useSelector(
    (state: RootState) => state.productFilters
  );

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(setSort({ field: "default", order: "asc" }));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Fetch data with useQuery
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
    staleTime: 86400 * 1000,
  });

  // Sort handler with page reset
  const handleSort = (field: SortField) => {
    const newOrder =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";
    dispatch(setSort({ field, order: newOrder }));
  };

  // Sort the products
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
        return 0; // Default sort
      })
    : [];

    // handle click on product
  const handleProductClick = (product: Product) => {
    dispatch(openModal(product));  //show open modal window
  };
  // Pagination logic
  const itemsPerPage = 20;
  const totalPage = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex); // Remove unnecessary ?.

  // Pagination handlers
  const handlePrevious = () => {
    if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
  };
  const handleNext = () => {
    if (currentPage < totalPage) dispatch(setCurrentPage(currentPage + 1));
  };

  // Loading state
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

  if (error) return <div>Error for Loading Product</div>;

  // Render
  return (
    <div className="container mt-6 mx-auto gap-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold bg-amber-400">Sorted By</h1>
      <div className="flex gap-2">
        <span
          className={`${
            sortField === "default"
              ? "cursor-pointer p-2 bg-gray-800 text-amber-50 rounded-full transition-all ease-in-out duration-500"
              : "cursor-pointer p-2 text-black dark:text-amber-50 rounded"
          }`}
          onClick={() => handleSort("default")}
        >
          All
        </span>
        <span
          className={`${
            sortField === "price"
              ? "cursor-pointer p-2 bg-gray-800 text-amber-50 rounded-full transition-all ease-in-out duration-500"
              : "cursor-pointer p-2 text-black rounded"
          }`}
          onClick={() => handleSort("price")}
        >
          Price {sortField === "price" && sortOrder === "asc" ? "↓" : "↑"}
        </span>
        <span
          className={`${
            sortField === "title"
              ? "cursor-pointer p-2 bg-gray-800 text-amber-50 rounded-full transition-all ease-in-out duration-500"
              : "cursor-pointer p-2 text-black rounded"
          }`}
          onClick={() => handleSort("title")}
        >
          Title {sortField === "title" && sortOrder === "asc" ? "↑" : "↓"}
        </span>
      </div>

      {/* Product list */}
      <div className="container mx-auto grid grid-cols-1 w-full md:grid-cols-4 mt-4 gap-4 cursor-pointer">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="flex flex-col border rounded-2xl shadow-gray-800 items-center space-y-4"
          >
            <Image
              src={product.image}
              alt="Product Image"
              width={150}
              height={100}
              className="hover:scale-110 mt-4 transition-all ease-in-out duration-300"
            />
            <div className="w-32 truncate md:w-42 ">{product.title}</div>
            <div className="text-2xl before:content-['$'] before:text-green-500">
              {product.price}
            </div>
          </div>
        ))}
      </div>

      {/* open madoalWindow component */}
      <ProductModalWindow />

      {/* Pagination with page numbers */}
      <div className="container mt-4 flex items-center justify-center gap-4">
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          dispatch={dispatch}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  return <ProductList />;
}
