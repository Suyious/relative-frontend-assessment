import "./style.css"
import {CoinNameType} from "../../data/CoinTypes";
import {CoinIcon} from "../coin-icon"
import {ReactComponent as Background} from "../../assets/back.svg"

type CoinWrapperPropsType = {
	children: React.ReactNode;
	coin: CoinNameType;
}

export const CoinWrapper = ({children, coin}: CoinWrapperPropsType) => {
	return (
		<div className="coin-wrapper container relative">
			<div className="coin-icon">
				<CoinIcon coin={coin}/>
			</div>
			<div className="coin-subwrapper relative">
				<div className="coin-card-background">
					<Background/>
				</div>
				<div className="coin-wrapper-content">{children}</div>
			</div>
		</div>
	)
}
