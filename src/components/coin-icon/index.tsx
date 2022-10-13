import "./style.css"
import {BinanceIcon, BitcoinIcon, EthereumIcon, ShibaInuIcon, SolanaIcon} from "../../assets/coins"
import {CoinNameType} from "../../data/CoinTypes";

type CoinIconPropsType = {
	coin: CoinNameType;
}

export const CoinIcon = ({coin}: CoinIconPropsType) => {
	switch(coin) {
		case "bitcoin":
			return <BitcoinIcon/>
		case "solana":
			return <SolanaIcon/>
		case "ethereum":
			return <EthereumIcon/>
		case "binance":
			return <BinanceIcon/>
		case "shibainu":
			return <ShibaInuIcon/>
	}
}
