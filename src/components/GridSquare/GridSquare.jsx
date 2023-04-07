import styles from './GridSquare.module.css';

const GridSquare = ({ col, row }) => {
  return (
    <div
      col={col}
      row={row}
      className={styles.gridSquare}
      style={{ background: 'white' }}
    />
  );
};

export default GridSquare;
