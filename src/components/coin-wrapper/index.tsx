import "./style.css"
import {CoinType} from "../../data/CoinTypes";
import {CoinIcon} from "../coin-icon"

type CoinWrapperPropsType = {
	children: React.ReactNode;
	coin: CoinType;
}

export const CoinWrapper = ({children, coin}: CoinWrapperPropsType) => {
	return (
		<div className="coin-wrapper container relative">
			<div className="coin-icon">
				<CoinIcon coin={coin.icon}/>
			</div>
			<div className="coin-subwrapper relative">
				<div className="coin-card-background">
				</div>
				<div className="coin-wrapper-content">{children}</div>
			</div>
		</div>
	)
}
