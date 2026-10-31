import React from "react";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) return null;

  const maxButtons = 5;
  let start = Math.max(1, page - Math.floor(maxButtons / 2));
  let end = Math.min(totalPages, start + maxButtons - 1);
  if (end - start < maxButtons - 1) start = Math.max(1, end - maxButtons + 1);

  const buttons = [];
  for (let i = start; i <= end; i++) buttons.push(i);

  return (
    <nav className="pagination-wrapper" aria-label="Blog pagination">
      <ul className="pagination-list">
        <li
          className={`page-item ${page === 1 ? "disabled" : ""}`}
          onClick={() => page > 1 && onPageChange(page - 1)}
        >
          <button className="page-btn">Prev</button>
        </li>

        {start > 1 && (
          <>
            <li className="page-item" onClick={() => onPageChange(1)}>
              <button className="page-btn">1</button>
            </li>
            {start > 2 && <li className="dots">...</li>}
          </>
        )}

        {buttons.map((p) => (
          <li
            key={p}
            className={`page-item ${p === page ? "active" : ""}`}
            onClick={() => onPageChange(p)}
          >
            <button className="page-btn">{p}</button>
          </li>
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && <li className="dots">...</li>}
            <li className="page-item" onClick={() => onPageChange(totalPages)}>
              <button className="page-btn">{totalPages}</button>
            </li>
          </>
        )}

        <li
          className={`page-item ${page === totalPages ? "disabled" : ""}`}
          onClick={() => page < totalPages && onPageChange(page + 1)}
        >
          <button className="page-btn">Next</button>
        </li>
      </ul>
    </nav>
  );
}
