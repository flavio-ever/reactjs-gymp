import React from 'react';

import { Container } from './styles';

export default function Pagination({ page, totalPage, setPage }) {
  const perLabel = 4;
  const _totalPage = totalPage + 1;

  let maxLabel = page < _totalPage - perLabel ? page + perLabel : _totalPage;

  let perPage = page > _totalPage - perLabel ? _totalPage - perLabel : page;

  if (perLabel >= _totalPage) {
    maxLabel = _totalPage;
    perPage = 1;
  }

  const allPages = () => {
    const pages = [];
    for (let i = perPage; i < maxLabel; i++) {
      pages.push(
        <button
          onClick={() => setPage(i)}
          type="button"
          key={i}
          onKeyDown={() => setPage(i)}
        >
          {i},
        </button>
      );
    }
    return pages;
  };

  return (
    <div>
      <button onClick={() => setPage(page > 1 ? page - 1 : page)} type="button">
        Anterior
      </button>
      {allPages()}
      <button
        onClick={() => setPage(page < totalPage ? page + 1 : page)}
        type="button"
      >
        Próximo
      </button>
    </div>
  );
}
