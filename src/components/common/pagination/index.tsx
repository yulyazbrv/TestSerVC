import "./style.css";

interface Props {
  currentPage: number;
  pages: number;
  onPageClick: (page: number) => void;
}

const Pagination = (props: Props) => {
  const { currentPage, pages, onPageClick } = props;

  return (
    <div className="pagination">
      {pages - currentPage < 1 && currentPage - 4 > 0 && (
        <div
          className="pagination__item"
          onClick={() => onPageClick(currentPage - 4)}
        >
          {currentPage - 4}
        </div>
      )}
      {pages - currentPage < 2 && currentPage - 3 > 0 && (
        <div
          className="pagination__item"
          onClick={() => onPageClick(currentPage - 3)}
        >
          {currentPage - 3}
        </div>
      )}
      {pages && currentPage - 2 > 0 && (
        <div
          className="pagination__item"
          onClick={() => onPageClick(currentPage - 2)}
        >
          {currentPage - 2}
        </div>
      )}
      {pages && currentPage - 1 > 0 && (
        <div
          className="pagination__item"
          onClick={() => onPageClick(currentPage - 1)}
        >
          {currentPage - 1}
        </div>
      )}
      <div className="pagination__item--active">{currentPage}</div>
      {currentPage + 1 <= pages && (
        <div
          className="pagination__item"
          onClick={() => onPageClick(currentPage + 1)}
        >
          {currentPage + 1}
        </div>
      )}
      {currentPage + 2 <= pages && (
        <div
          className="pagination__item"
          onClick={() => onPageClick(currentPage + 2)}
        >
          {currentPage + 2}
        </div>
      )}
      {currentPage + 3 <= pages && currentPage < 3 && (
        <div
          className="pagination__item"
          onClick={() => onPageClick(currentPage + 3)}
        >
          {currentPage + 3}
        </div>
      )}
      {currentPage + 4 <= pages && currentPage < 2 && (
        <div
          className="pagination__item"
          onClick={() => onPageClick(currentPage + 4)}
        >
          {currentPage + 4}
        </div>
      )}
    </div>
  );
};

export { Pagination };
