import { useState } from "react";
import Tile from "./Tile";

const TicTacToe = () => {
	const [status, setStatus] = useState("no winner");
	const [player, setPlayer] = useState("player one");
	const [playerOneTiles, setPlayerOneTiles] = useState([]);
	const [playerTwoTiles, setPlayerTwoTiles] = useState([]);
	const winningBoard = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[2, 4, 6],
		[0, 4, 8],
	];
	const [boardTiles, setBoardTiles] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	]);
	const isValidSubsequence = (array, subsequence) => {
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i] === subsequence[counter]) {
				counter++;
			}
		}
		if (counter < subsequence.length) {
			return false;
		}
		return true;
	};
	const onClick = (e) => {
		let playerOneTilesWithNew = [...playerOneTiles, Number(e)];
		console.log("playerOneTilesWithNew", playerOneTilesWithNew);
		let playerTwoTilesWithNew = [...playerTwoTiles, Number(e)];
		console.log("playerTwoTIleswithnew", playerTwoTilesWithNew);
		console.log("boardTiles", boardTiles);
		console.log("e", e);
		if (boardTiles[e] !== "") {
			alert("Sorry, another player has already played here. Try again.");
		} else {
			if (player === "player one") {
				boardTiles.splice(e, 1, "X");
				setBoardTiles(boardTiles);
				setPlayer("player two");

				setPlayerOneTiles(playerOneTilesWithNew);
			} else {
				boardTiles.splice(e, 1, "O");
				setBoardTiles(boardTiles);
				setPlayer("player one");

				setPlayerTwoTiles(playerTwoTilesWithNew);
			}
			winningBoard.forEach((board) => {
				if (player === "player one") {
					if (isValidSubsequence(playerOneTilesWithNew, board)) {
						console.log("playerOneTilesWIthNew", playerOneTilesWithNew);
						console.log("board", board);
						setStatus(`the winner is player one`);
					}
				} else {
					if (isValidSubsequence(playerTwoTilesWithNew, board)) {
						console.log("playerTwoTilesWIthNew", playerTwoTilesWithNew);
						console.log("board", board);
						setStatus(`the winner is player two`);
					}
				}
			});
		}
	};
	return (
		<div>
			<div>{status}</div>
			<div>{player}</div>
			<div className="board">
				{boardTiles.map((tile, idx) => (
					<Tile tile={tile} onClick={onClick} key={idx} idx={idx} />
				))}
			</div>
		</div>
	);
};

export default TicTacToe;
