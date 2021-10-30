import { useState } from "react";

const Autocomplete = ({ suggestions }) => {
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [input, setInput] = useState("");

	const onChange = (e) => {
		const userInput = e.target.value;

		const unLinked = suggestions.filter((suggestion) =>
			suggestion.toLowerCase().includes(userInput.toLowerCase())
		);

		setInput(e.target.value);
		setFilteredSuggestions(unLinked);
		setActiveSuggestionIndex(0);
		setShowSuggestions(true);
	};
	const onClick = (e) => {
		setFilteredSuggestions([]);
		setInput(e.target.innerText);
		setActiveSuggestionIndex(0);
		setShowSuggestions(false);
	};
	const SuggestionsList = () => {
		return filteredSuggestions.length ? (
			<ul class="suggestions">
				{filteredSuggestions.map((suggestion, index) => {
					let className = "";
					if (index === activeSuggestionIndex) {
						className = "suggestion-active";
					}
					return (
						<li className={className} key={suggestion} onClick={onClick}>
							{suggestion}
						</li>
					);
				})}
			</ul>
		) : (
			<div>No suggestions, you are on your own</div>
		);
	};
	return (
		<div>
			<input type="text" value={input} onChange={onChange} />
			{showSuggestions && input && <SuggestionsList />}
		</div>
	);
};

export default Autocomplete;
