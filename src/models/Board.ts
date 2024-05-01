import { Colors } from './Colors'
import { Cell } from './Cell'

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
}
