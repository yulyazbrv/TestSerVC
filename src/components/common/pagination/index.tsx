import React from "react";
import "./style.css";

interface Props {
  currentPage: number;
  pages: number;
  onPageClick: (page: number) => void;
}

const Pagination = (props: Props) => {
  const { currentPage, pages, onPageClick } = props;

  const renderPageItem = (page: number) => (
    <div
      key={page}
      className={`pagination__item ${currentPage === page ? "active" : ""}`}
      onClick={() => onPageClick(page)}
    >
      {page}
    </div>
  );

  const renderPaginationItems = () => {
    const paginationItems: React.ReactNode[] = [];

    for (let i = currentPage - 4; i <= currentPage + 4; i++) {
      if (i > 0 && i <= pages) {
        paginationItems.push(renderPageItem(i));
      }
    }

    return paginationItems;
  };

  return <div className="pagination">{renderPaginationItems()}</div>;
};

export { Pagination };
