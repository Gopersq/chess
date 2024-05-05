import { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'
import { Cell } from './models/Cell'

function App() {
	const [board, setBoard] = useState(new Board())
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

	useEffect(() => {
		restartGame()
	}, [])

	const restartGame = () => {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setSelectedCell(null)
		setBoard(newBoard)
	}

	return (
		<div className='app'>
			<BoardComponent
				board={board}
				setBoard={setBoard}
				selectedCell={selectedCell}
				setSelectedCell={setSelectedCell}
			/>
			<button onClick={() => restartGame()}>Новая игра</button>
		</div>
	)
}

export default App
