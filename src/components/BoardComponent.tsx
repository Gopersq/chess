import React from 'react'
import CellComponent from './CellComponent'
import { Board } from '../models/Board'

interface BoardProps {
	board: Board
	setBoard: (board: Board) => void
}

function BoardComponent({ board, setBoard }: BoardProps) {
	return (
		<div className='board'>
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((cell, index) => (
						<CellComponent key={index} cell={cell} />
					))}
				</React.Fragment>
			))}
		</div>
	)
}

export default BoardComponent
