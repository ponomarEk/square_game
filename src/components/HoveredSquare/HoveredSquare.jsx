import styles from './HoverSquare.module.css';

const HoveredSquare = ({ col, row }) => {
  return (
    <div className={styles.hoveredSquare}>
      Column {col + 1} Row {row + 1}
    </div>
  );
};

export default HoveredSquare;
