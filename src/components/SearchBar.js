import React from "react";

function SearchBar({ sortStocks, onChangeSort, filterStocks, onFilter }) {

  function handleSortChange(e){
    onChangeSort(e.target.value)
  }

  function handleFilterSort(e){
    const filterType = e.target.value
    onFilter(filterType)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortStocks === 'Alphabetically'}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortStocks === 'Price'}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterSort}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
