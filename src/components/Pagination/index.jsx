import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ pagination, onPageChange }) => {
  const { _page: currentPage, _limit: limit, _totalRows: totalRows } = pagination
  const totalPages = Math.ceil(totalRows / limit)
  const lastPage = totalPages

  const handleButtonClick = (newPage, action) => {
    if (onPageChange) {
      switch (action) {
        case 'previous': onPageChange(newPage - 1)
          break;
        case 'next': onPageChange(newPage + 1)
          break;
        default: return action
      }
    }
  }
  return (
    <div>
      <button disabled={currentPage <= 1} onClick={() => handleButtonClick(currentPage, 'previous')}>{`<<`}</button>
      <button disabled={currentPage >= lastPage} onClick={() => handleButtonClick(currentPage, 'next')}>{`>>`}</button>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func
}

export default Pagination