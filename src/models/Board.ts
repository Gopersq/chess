import { Colors } from './Colors'
import { Cell } from './Cell'
import { Queen } from './figures/Queen'
import { Pawn } from './figures/Pawn'
import { king } from './figures/King'
import { Rook } from './figures/Rook'
import { Knight } from './figures/Knight'
import { Bishop } from './figures/Bishop'

export class Board {
	cells: Cell[][] = []

	initCells() {
		for (let i = 0; i < 8; i++) {
			const row: Cell[] = []
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2) {
					row.push(new Cell(i, j, Colors.BLACK, null, this))
				} else {
					row.push(new Cell(i, j, Colors.WHITE, null, this))
				}
			}
			this.cells.push(row)
		}
	}

	getCell(x: number, y: number) {
		return this.cells[y][x]
	}

	private addQueens() {
		new Queen(Colors.BLACK, this.getCell(3, 0))
		new Queen(Colors.WHITE, this.getCell(3, 7))
	}

	private addBishops() {
		for (let i = 2; i < 6; i += 3) {
			new Bishop(Colors.BLACK, this.getCell(i, 0))
			new Bishop(Colors.WHITE, this.getCell(i, 7))
		}
	}

	private addKings() {
		new king(Colors.BLACK, this.getCell(4, 0))
		new king(Colors.WHITE, this.getCell(4, 7))
	}

	private addKnights() {
		for (let i = 1; i < 7; i += 5) {
			new Knight(Colors.BLACK, this.getCell(i, 0))
			new Knight(Colors.WHITE, this.getCell(i, 7))
		}
	}

	private addRooks() {
		for (let i = 0; i < 8; i += 7) {
			new Rook(Colors.BLACK, this.getCell(i, 0))
			new Rook(Colors.WHITE, this.getCell(i, 7))
		}
	}

	private addPawns() {
		for (let i = 0; i < 8; i++) {
			new Pawn(Colors.BLACK, this.getCell(i, 1))
			new Pawn(Colors.WHITE, this.getCell(i, 6))
		}
	}

	// addFisherFigures() {} шахматы фишера, фигуры стоят на разных местах, дописать позже

	addFigures() {
		this.addQueens()
		this.addBishops()
		this.addKings()
		this.addKnights()
		this.addRooks()
		this.addPawns()
	}

	availableCells(selectedCell: Cell | null) {
		for (let i = 0; i < this.cells.length; i++) {
			const row = this.cells[i]
			for (let j = 0; j < row.length; j++) {
				const target = row[j]
				target.available = !!selectedCell?.figure?.canMove(target)
			}
		}
	}

	getCopyBoard(): Board {
		const newBoard = new Board()
		newBoard.cells = this.cells
		return newBoard
	}
}
