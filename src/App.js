import logo from "./logo.svg";
import "./App.css";
import AddressSearch from "./AddressSearch";
import Autocomplete from "./Autocomplete";
import TicTacToe from "./TicTacToe";

function App() {
	return (
		<div className="App">
			<AddressSearch />
			<Autocomplete suggestions={["hi", "hello", "ciao"]} />
			<TicTacToe />
		</div>
	);
}

export default App;
