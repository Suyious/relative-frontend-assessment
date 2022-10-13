import {CoinType} from "./CoinTypes";

export const trends: CoinType[] = [{
	icon: "bitcoin",
	coin: "Bitcoin (BTC)",
	price: "$31,812.80",
	change: +10,
	tvl: "$60,000",
	pairs: ["solana", "ethereum", "binance"]
}, {
	icon: "solana",
	coin: "Solana (SOL)",
	price: "$32.83",
	change: -12.32,
	tvl: "$60,000",
	pairs: ["bitcoin", "ethereum", "binance"]
}, {
	icon: "ethereum",
	coin: "Ethereum (ETH)",
	price: "$1,466.45",
	change: -11.93,
	tvl: "$60,000",
	pairs: ["solana", "bitcoin", "binance"]
}, {
	icon: "binance",
	coin: "Binance USD (BUSD)",
	price: "$1.00",
	change: +0.26,
	tvl: "$60,000",
	pairs: ["bitcoin", "solana", "binance"]
}, {
	icon: "shibainu",
	coin: "Shiba Inu (SHIB)",
	price: "$0.00000001948",
	change: -8.1,
	tvl: "$60,000",
	pairs: ["bitcoin", "solana", "binance"]
}]
