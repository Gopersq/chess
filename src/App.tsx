import { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'

function App() {
	const [board, setBoard] = useState(new Board())

	useEffect(() => {
		restartGame()
	}, [])

	function restartGame() {
		const newBoard = new Board()
		newBoard.initCells()
		setBoard(newBoard)
	}

	return (
		<div className='app'>
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	)
}

export default App
