import './App.css'
import { ReactComponent as Activity } from "./assets/activity.svg";
import {CoinCard} from './components/coin-card';
import { trends } from "./data/trends"

function App() {

	return (
		<div className="app">
			<div className="trending-assets container">
				<div className="icon-text">
					<Activity/>
					<h3>Trending Assets</h3>
				</div>
				<div className="cards-list container flex br-10 gap-2">
					{trends.map((coin, i) => (
						<CoinCard coin={coin} key={i}/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
