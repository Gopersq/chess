import { Cell } from '../models/Cell'

interface CellProps {
	cell: Cell
}

function CellComponent({ cell }: CellProps) {
	return <div className={`cell ${cell.color}`}></div>
}

export default CellComponent
