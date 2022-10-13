import './App.css'
import { ReactComponent as Activity } from "./assets/activity.svg";
import {CoinGrid} from './components/card-grid';

function App() {

	return (
		<div className="app">
			<div className="trending-assets container">
				<div className="icon-text">
					<Activity/>
					<h3>Trending Assets</h3>
				</div>
				<CoinGrid/>
			</div>
		</div>
	)
}

export default App
