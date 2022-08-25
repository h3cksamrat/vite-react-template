import { useMemo } from 'react';
import { DOTS, usePagination } from '@hooks/usePagination';
import { classNames } from '@utils/react.util';
import '@styles/pagination.css';

interface IPaginationProps {
  onPageChange: (arg: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
  totalPages: number;
}

function Pagination({
  totalPages,
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: IPaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    totalPages,
  });

  const lastPage = useMemo(() => {
    if (!paginationRange || paginationRange.length === 0) return null;
    return paginationRange[paginationRange.length - 1];
  }, [paginationRange]);

  if (!paginationRange || paginationRange.length === 0 || currentPage <= 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    /* eslint-disable react/no-array-index-key */
    <ul className={classNames('pagination-container', className || '')}>
      <button type="button" onClick={onPrevious}>
        <li className={classNames('pagination-item', currentPage === 1 ? 'disabled' : '')}>
          <div className="arrow left" />
        </li>
      </button>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <button
            key={index}
            type="button"
            onClick={() => {
              if (typeof pageNumber === 'string') return;
              onPageChange(pageNumber);
            }}
          >
            <li className={classNames('pagination-item', pageNumber === currentPage ? 'selected' : '')}>{pageNumber}</li>
          </button>
        );
      })}
      <button type="button" onClick={onNext}>
        <li className={classNames('pagination-item', currentPage === lastPage ? 'disabled' : '')}>
          <div className="arrow right" />
        </li>
      </button>
    </ul>
  );
}

export default Pagination;
