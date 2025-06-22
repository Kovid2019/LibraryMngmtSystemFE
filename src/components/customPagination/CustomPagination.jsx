import React from "react";
import { Pagination } from "react-bootstrap";

export const CustomPagination = ({ active, setActive, pages }) => {
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="mt-3 d-flex justify-content-center">
      <Pagination>{items}</Pagination>
    </div>
  );
};
