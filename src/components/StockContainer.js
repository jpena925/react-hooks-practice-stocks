import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleAddToPort}) {
  
  const stockMap = stocks.map((stock) => <Stock key={stock.id} stock={stock} onStockClick={handleAddToPort} />)


	return (
		<div>
			<h2>Stocks</h2>
			{stockMap}
		</div>
	);
}

export default StockContainer;
