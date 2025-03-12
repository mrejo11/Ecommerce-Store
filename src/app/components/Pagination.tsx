import React from "react";
import { setCurrentPage } from "../../store/slice"; // مسیر Redux خودت رو بذار
import { Button } from "@/components/ui/button";


// تعریف نوع پراپس‌ها
interface PaginationProps {
  currentPage: number;
  totalPage: number;
  dispatch: (action:unknown) => void; // نوع دقیق‌تر برای Redux dispatch بذار اگه نیازه
  handlePrevious: () => void;
  handleNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  dispatch,
  handlePrevious,
  handleNext,
}) => {
  const getPaginationItems = () => {
    const pages: (number | string)[] = []; // نوع آرایه مشخص شده

    if (totalPage <= 4) {
      return Array.from({ length: totalPage }, (_, index) => index + 1);
    }

    pages.push(1); // صفحه اول



    if (currentPage > 1 && currentPage < totalPage) {
      pages.push(currentPage);
    }

    if (currentPage < totalPage - 1) {
      pages.push("...");
    }

    pages.push(totalPage); // صفحه آخر

    return pages;
  };

  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="cursor-pointer"
      >
        previous
      </Button>

      <div className="flex gap-2">
        {getPaginationItems().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && dispatch(setCurrentPage(page))}
            className={`cursor-pointer px-3 py-1 rounded ${
              currentPage === page
                ? "font-bold bg-gray-800 text-white"
                : typeof page === "number"
                ? "bg-gray-200 text-black hover:bg-gray-300"
                : "text-gray-500 cursor-default"
            }`}
            disabled={typeof page !== "number"}
          >
            {page}
          </button>
        ))}
      </div>

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        className="cursor-pointer"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;