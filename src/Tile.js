const Tile = (props) => {
	return (
		<div onClick={() => props.onClick(props.idx)} className="tile">
			{props.tile}
		</div>
	);
};

export default Tile;
