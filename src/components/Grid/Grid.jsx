import { useSelector } from 'react-redux';

import { COLORS } from '../../constants';
import { useActions } from '../../hooks/useActions';

import GridSquare from '../GridSquare/GridSquare';

const { WHITE, BLUE } = COLORS;

const GridBoard = () => {
  const { mode, isGameStarted } = useSelector((state) => state.gameConfig);
  const { addHoveredSquare } = useActions();

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${mode.field}, ${100 / mode.field}%)`,
    gridGap: '0',
    alignSelf: 'flex-start',
    width: '40vw',
    height: '40vw',
    pointerEvents: `${isGameStarted ? 'auto' : 'none'}`,
  };

  const getSquareGrid = () => {
    const grid = [];
    for (let row = 0; row < mode.field; row++) {
      grid.push([]);
      for (let col = 0; col < mode.field; col++) {
        grid[row].push(<GridSquare key={`${col}${row}`} col={col} row={row} />);
      }
    }

    return grid;
  };

  const handleMouseOver = (event) => {
    const { col, row } = event.target.attributes;
    let { background } = event.target.style;

    if (col && row) {
      background === WHITE ? (background = BLUE) : (background = WHITE);
      event.target.style.background = background;

      addHoveredSquare({ col: +col.value, row: +row.value });
    }
  };

  return (
    <div style={gridStyles} onMouseOver={handleMouseOver}>
      {getSquareGrid()}
    </div>
  );
};

export default GridBoard;
