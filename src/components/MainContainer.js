import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
	const [stockList, setStockList] = useState([]);
	const [portfolioList, setPortfolioList] = useState([]);
  const [sortStocks, setSortStocks] = useState('') // string either alphabetic or numeric
  const [filterStocks, setFilterStocks] = useState('') // string of which filter type


	useEffect(
		() =>
			fetch("http://localhost:3001/stocks")
				.then((res) => res.json())
				.then((data) => setStockList(data)),
		[]
	);

	function handleAddToPort(stock) {
		if (stock in portfolioList) {
			return;
		} else {
			setPortfolioList([...portfolioList, stock]);
		}
	}

	function handleDeleteStock(stock) {
		setPortfolioList(portfolioList.filter(item => item.id !== stock.id))
	}

	const handleStockSort = [...stockList].sort((a,b) => {
		if(sortStocks === 'Alphabetically'){
			return a.name < b.name ? -1 : 1
		} else {
			return a.price < b.price ? -1 : 1
		}
	})
	

	const sortedAndFiltered = [...handleStockSort].filter(stock => stock.type === filterStocks)
	console.log(sortedAndFiltered)

	return (
		<div>
			<SearchBar onChangeSort={setSortStocks} onFilter={setFilterStocks} sortStocks={sortStocks} filterStocks={filterStocks}/>
			<div className="row">
				<div className="col-8">
					<StockContainer
						stocks={sortedAndFiltered.length === 0 ? stockList : sortedAndFiltered}
						handleAddToPort={handleAddToPort}
					/>
				</div>
				<div className="col-4">
					<PortfolioContainer
						portfolioList={portfolioList}
						handleDeleteStock={handleDeleteStock}
					/>
				</div>
			</div>
		</div>
	);
}

export default MainContainer;
