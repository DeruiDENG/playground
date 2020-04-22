import React from 'react';
import paginationStyle from './Pagination.module.scss';
import { Link } from 'gatsby';

interface Props {
  current: number; // Start from 0
  total: number;
}

export default function Pagination({ current, total }: Props) {
  if (total <= 1) {
    return null;
  }

  const pageNumbersToDisplay = [
    ...new Set(
      [
        ...[1, 2, 3],
        ...[current - 1, current, current + 1, current + 2, current + 3],
        total,
      ].filter(pageNumber => pageNumber >= 1 && pageNumber <= total)
    ),
  ].sort((a, b) => a - b);

  return (
    <nav className={paginationStyle.pagination}>
      {pageNumbersToDisplay.map((pageNumber, index, pageNumbers) => {
        return (
          <React.Fragment key={pageNumber}>
            {index > 0 && pageNumber - pageNumbers[index - 1] > 1 && (
              <span className={paginationStyle.pagination__separator}>...</span>
            )}
            <Link
              className={`${paginationStyle.pagination__item} ${
                pageNumber === current + 1 ? paginationStyle.active : ''
              }`}
              to={pageNumber === 1 ? '/' : `/page/${pageNumber}`}
            >
              {pageNumber}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
