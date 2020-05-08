import React, { Component } from "react";
import _ from "../node_modules/lodash";

const Pagination = props => {
  const { count, currentPage, pageSize, handlePageChange } = props;
  const noOfPages = count / pageSize;
  const pages = _.range(1, noOfPages + 1);
  return (
    <div className="paging">
      {/* <!-- left arrow --> */}
      <div className="paging__arrow">
        <i className="fas fa-angle-left"></i>
      </div>
      {/* <!-- page number --> */}
      {pages.map(item => (
        <div
          key={item.id}
          className={
            item === currentPage ? "paging__number active" : "paging__number"
          }
          onClick={() => handlePageChange(item)}
        >
          {item}
        </div>
      ))}
      <div className="paging__arrow">
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
