import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureName } from './Figure'
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class king extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
		this.name = FigureName.KING
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		return true
	}
}
