"use client";
// this component receives data from server component as 
//  props to render on the client side
//for improving initial load time and SEO
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { setSort, setCurrentPage } from "@/store/sortSlice";
import { RootState, AppDispatch } from "@/store/store";
import { SortField } from "@/type";
import Pagination from "./Pagination";
import { openModal } from "@/store/modalSlice";
import { Product } from "@/type";
import ProductModalWindow from "./ProductModalWindow";
import SearchBar from "./SearchBar";
import { ShowProduct } from "../actions";
import { useMemo } from "react";

interface ProductListProps {
  products: ShowProduct[]; // data passed as props for ssr
}

export default function ProductList({products}:ProductListProps) {
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


  // Sort handler with page reset
  const handleSort = (field: SortField) => {
    const newOrder =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";
    dispatch(setSort({ field, order: newOrder }));
  };

  // Sort the products
  const sortedProducts =useMemo(()=>{
    if(!products) return [];
    return [...products].sort((a, b) => {
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
},[products,sortField,sortOrder])

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


  // Render
  return (
    <div className="container mt-6 mx-auto gap-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold bg-gary-400"><SearchBar /></h1>
      <div className="flex gap-2 ml-2">
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


