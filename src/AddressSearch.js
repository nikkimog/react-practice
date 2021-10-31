import { useState, useEffect } from "react";

const AddressSearch = () => {
	const [zipcode, setZipcode] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");
	const [test, setTest] = useState("");

	useEffect(
		() =>
			async function getAutocomplete() {
				try {
					const response = await fetch(`http://ZiptasticAPI.com/${zipcode}`);
					const json = await response.json();
					setCity(json.city);
					setState(json.state);
					setCountry(json.country);
				} catch (error) {
					console.log("error", error);
				}
			},
		[zipcode]
	);

	return (
		<div>
			<h1>Enter Zip</h1>
			<input value={test} onChange={(e) => setTest(e.target.value)} />
			<input
				value={zipcode}
				onChange={(e) => setZipcode(e.target.value)}
				placeholder="Ex: 28025"
			/>
			<div>Your Address:</div>
			<div>{zipcode}</div>
			<div>City, State, Country</div>
			<div>
				{city}, {state}, {country}
			</div>
		</div>
	);
};

export default AddressSearch;
