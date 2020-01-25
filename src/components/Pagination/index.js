import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Pagination({
  page,
  total,
  totalPage,
  perPage,
  setPage,
}) {
  let start = 0;
  let end = 0;

  function getPageStart(pageSize, pageNr) {
    return pageSize * pageNr;
  }

  function getPageLabel(pageSizeAll, pageSize, pageNr) {
    start = Math.max(getPageStart(pageSize, pageNr), 0) + 1;
    end = Math.min(getPageStart(pageSize, pageNr + 1), pageSizeAll);

    return `${start} - ${end} de ${total}`;
  }

  return (
    <Container>
      <button
        className="btn btn--secondary"
        onClick={() => setPage(start >= end ? page - 1 : totalPage)}
        type="button"
      >
        <IoIosArrowBack size={20} />
      </button>

      <span>{getPageLabel(total, perPage, page - 1)}</span>

      <button
        className="btn btn--secondary"
        onClick={() => setPage(start < end && start !== end ? page + 1 : 1)}
        type="button"
      >
        <IoIosArrowForward size={20} />
      </button>
    </Container>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  total: PropTypes.number,
  totalPage: PropTypes.number,
  perPage: PropTypes.number,
  setPage: PropTypes.func,
};

Pagination.defaultProps = {
  page: 0,
  total: 0,
  totalPage: 0,
  perPage: 0,
  setPage: Function,
};
