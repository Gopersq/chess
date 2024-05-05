import React, { useEffect, useState } from 'react'
import CellComponent from './CellComponent'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell'

interface BoardProps {
	board: Board
	setBoard: (board: Board) => void
	selectedCell: Cell | null
	setSelectedCell: (cell: Cell | null) => void
}

function BoardComponent({
	board,
	setBoard,
	selectedCell,
	setSelectedCell,
}: BoardProps) {
	useEffect(() => {
		availableCells()
	}, [selectedCell])

	const click = (cell: Cell) => {
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell)
			setSelectedCell(null)
		} else {
			setSelectedCell(cell)
		}
	}

	const availableCells = () => {
		board.availableCells(selectedCell)
		updateBoard()
	}

	const updateBoard = () => {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	return (
		<div className='board'>
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((cell, index) => (
						<CellComponent
							click={click}
							key={index}
							cell={cell}
							selected={
								cell.x === selectedCell?.x && cell.y === selectedCell?.y
							}
						/>
					))}
				</React.Fragment>
			))}
		</div>
	)
}

export default BoardComponent
