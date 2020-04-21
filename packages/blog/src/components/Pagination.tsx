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
  ];

  return (
    <div className={paginationStyle.pagination}>
      {pageNumbersToDisplay.map((pageNumber, index, pageNumbers) => (
        <Link
          className={paginationStyle.pagination__item}
          key={pageNumber}
          to={pageNumber === 1 ? '/' : `/page/${pageNumber}`}
        >
          {pageNumber}
        </Link>
      ))}
    </div>
  );
}
