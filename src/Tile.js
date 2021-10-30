const Tile = (props) => {
	const background = () => {
		if (props.tile === "X") {
			return "tile playerOne";
		} else if (props.tile === "O") {
			return "tile playerTwo";
		} else return "tile";
	};
	return (
		<div onClick={() => props.onClick(props.idx)} className={background()}>
			<div className="tileText">{props.tile}</div>
		</div>
	);
};

export default Tile;
