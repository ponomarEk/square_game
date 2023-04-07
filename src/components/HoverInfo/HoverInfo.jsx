import { useSelector } from 'react-redux';

import HoveredSquare from '../HoveredSquare/HoveredSquare';

import styles from './HoverInfo.module.css';

const HoverInfo = () => {
  const { hoveredSquares } = useSelector((state) => state.gameConfig);
  return (
    <div className={styles.hoverWrapper}>
      <h2 className={styles.header}>Hover squares</h2>
      <div className={styles.hoverInfo}>
        {[...hoveredSquares].reverse().map((square) => (
          <HoveredSquare
            key={`${square.cols}${square.row}`}
            col={square.col}
            row={square.row}
          />
        ))}
      </div>
    </div>
  );
};

export default HoverInfo;
