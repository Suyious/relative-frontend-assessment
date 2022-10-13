import "./style.css"
import {CoinType} from "../../data/CoinTypes";
import {CoinIcon} from "../coin-icon";
import {CoinWrapper} from "../coin-wrapper";

type CoinCardPropsType = {
	coin: CoinType;
}

export const CoinCard = ({coin}: CoinCardPropsType) => {
	return (
		<CoinWrapper coin={coin.icon}>
			<div className="coin-name padding-1-2 fg-primary-gray relative">
				<h4>{coin.coin}</h4>
			</div>
			<div className="coin-price relative">
				<div className="coin-price-container container padding-p5 bg-accent-dark-blue width-90pc margini-auto br-50 relative">
					<h3>{coin.price}</h3>
					{(coin.change)> 0 ? 
						<span className="coin-price-change padding-p5 fg-accent-green absolute-top-right">+{coin.change}%</span>:	
						<span className="coin-price-change padding-p5 fg-accent-red absolute-top-right">{coin.change}%</span> }
				</div>
				<h4 className="fg-secondary-gray padding-1-2">Price</h4>
			</div>
			<div className="coin-tvl relative">
				<div className="coin-tvl-container container padding-p5 bg-accent-dark-blue width-90pc margini-auto br-50">
					<h3>{coin.tvl}</h3>
				</div>
				<h4 className="fg-secondary-gray padding-1-2">TVL</h4>
			</div>
			<div className="coin-pairs flex-col align-center relative">
				<div className="coin-pairs-icons container flex justify-center gap-1 br-50">
					{coin.pairs.map((pair, i) => (
						<CoinIcon key={i} coin={pair}/>
					))}
				</div>
				<h4 className="fg-secondary-gray padding-1-2">Popular Pairs</h4>
			</div>
		</CoinWrapper>
	)
}
