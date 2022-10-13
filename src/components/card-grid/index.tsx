import "./style.css"
import {trends} from "../../data/trends";
import {CoinCard} from "../coin-card";

export const CoinGrid = () => {
	return (
		<div className="cards-list container flex br-10 justify-space-between">
			{trends.map((coin, i) => (
				<CoinCard coin={coin} key={i}/>
			))}
		</div>
	)
}
