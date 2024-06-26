import { Cell } from '../models/Cell'

interface CellProps {
	cell: Cell
	selected: boolean
	click: (cell: Cell) => void
}

function CellComponent({ cell, selected, click }: CellProps) {
	return (
		<div
			onClick={() => click(cell)}
			className={`cell ${cell.color} ${selected ? 'selected' : ''}`}
		>
			{cell.available && !cell.figure && <div className='available' />}
			{cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
		</div>
	)
}

export default CellComponent
