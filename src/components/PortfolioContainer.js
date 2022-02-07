import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioList, handleDeleteStock }) {
	const portfolio = portfolioList.map((stock) => (
		<Stock key={stock.id} stock={stock} onStockClick={handleDeleteStock} />
	));
	return (
		<div>
			<h2>My Portfolio</h2>
			{portfolio}
		</div>
	);
}

export default PortfolioContainer;
