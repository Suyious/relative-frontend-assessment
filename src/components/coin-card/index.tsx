import "./style.css"
import {CoinType} from "../../data/CoinTypes";
import {CoinIcon} from "../coin-icon";

type CoinCardPropsType = {
	coin: CoinType;
}

export const CoinCard = ({coin}: CoinCardPropsType) => {
	return (
		<div className="coin-card container bg-secondary">
			<CoinIcon coin={coin.icon}/>
			<div className="coin-name">
				<h4>{coin.coin}</h4>
			</div>
			<div className="coin-price">
				<div className="coin-price-container container">
					<h3>{coin.price}</h3>
					<span className="coin-price-change">{coin.change}</span>
				</div>
				<h4>Price</h4>
			</div>
			<div className="coin-tvl">
				<div className="coin-tvl-container container">
					<h3>{coin.tvl}</h3>
				</div>
				<h4>TVL</h4>
			</div>
			<div className="coin-pairs">
				<div className="coin-pairs-icons container">
					{coin.pairs.map((pair, i) => (
						<CoinIcon key={i} coin={pair}/>
					))}
				</div>
				<h4>Popular Pairs</h4>
			</div>
		</div>
	)
}
