export type CoinNameType = "bitcoin" | "solana" | "ethereum" | "binance" | "shibainu";

export type CoinType = {
	icon: CoinNameType;
	coin: string;
	price: string,
	change: string,
	tvl: string;
	pairs: CoinNameType[];
}
