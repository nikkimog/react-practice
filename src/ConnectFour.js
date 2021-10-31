import { useState, useEffect } from "react";

const ConnectFour = () => {
	let [board, setBoard] = useState([]);
	let [player, setPlayer] = useState(1);
	let [winner, setWinner] = useState("none");
	let [reset, setReset] = useState(false);

	useEffect(() => {
		let rows = 7;
		let columns = 6;
		let board = [];
		for (let i = 0; i < rows; i++) {
			let row = [];
			board.push(row);
			console.log("row", row);
			for (let j = 0; j < columns; j++) {
				row.push("");
			}
		}
		console.log("board", board);
		setBoard(board);
		// return board;
	}, [reset]);
	const resetGame = () => {
		setReset(!reset);
		setWinner("none");
		setPlayer(1);
		// setReset(false);
	};
	const tileStyle = (item) => {
		if (item === 1) {
			return "connectFourTile playerOne";
		}
		if (item === 2) {
			return "connectFourTile playerTwo";
		} else {
			return "connectFourTile";
		}
	};
	const onClick = (e) => {
		let rowidx = Number(e.target.dataset.rowidx);
		let idx = Number(e.target.dataset.idx);
		let newBoard = [...board];
		if (winner !== "none") {
			alert("there is already a winner. please press reset to play a new game");
			return;
		}
		console.log("rowidx", rowidx);
		if (Number(rowidx) !== 6 && board[rowidx + 1][idx] === "") {
			alert("you cannot build on an empty tile");
			return;
		}

		if (player === 1) {
			newBoard[rowidx][idx] = 1;
			setBoard(newBoard);
			setPlayer(2);
		}
		if (player === 2) {
			newBoard[rowidx][idx] = 2;
			setBoard(newBoard);
			setPlayer(1);
		}
		// horizontal check
		for (let row = 0; row < 7; row++) {
			for (let col = 0; col < 4; col++) {
				if (
					newBoard[row][col] !== "" &&
					newBoard[row][col] === newBoard[row][col + 1] &&
					newBoard[row][col] === newBoard[row][col + 2] &&
					newBoard[row][col] === newBoard[row][col + 3]
				) {
					setWinner(player);
				}
			}
		}
		// vertical check
		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 6; col++) {
				if (
					newBoard[row][col] !== "" &&
					newBoard[row][col] === newBoard[row + 1][col] &&
					newBoard[row][col] === newBoard[row + 2][col] &&
					newBoard[row][col] === newBoard[row + 3][col]
				) {
					setWinner(player);
				}
			}
		}
		//check diagonal
		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 3; col++) {
				if (
					newBoard[row][col] !== "" &&
					newBoard[row][col] === newBoard[row + 1][col + 1] &&
					newBoard[row][col] === newBoard[row + 2][col + 2] &&
					newBoard[row][col] === newBoard[row + 3][col + 3]
				) {
					setWinner(player);
				}
			}
		}
		for (let row = 6; row > 3; row--) {
			for (let col = 0; col < 4; col++) {
				if (
					newBoard[row][col] !== "" &&
					newBoard[row][col] === newBoard[row - 1][col + 1] &&
					newBoard[row][col] === newBoard[row - 2][col + 2] &&
					newBoard[row][col] === newBoard[row - 3][col + 3]
				) {
					setWinner(player);
				}
			}
		}
	};
	return (
		<div>
			<div>winner: {winner}</div>
			<div>player: {player}</div>
			<button onClick={resetGame}>reset</button>
			<div className="connectFourBoard">
				{board.map((row, rowIdx) => {
					return row.map((item, idx) => (
						<div
							className={tileStyle(item)}
							onClick={onClick}
							data-rowidx={rowIdx}
							data-idx={idx}
						>
							item {item} idx {idx} rowIdx {rowIdx}
						</div>
					));
				})}
			</div>
		</div>
	);
};

export default ConnectFour;
