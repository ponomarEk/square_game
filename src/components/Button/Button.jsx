import styles from './Button.module.css';

const CustomButton = ({ text, disabled, onClick }) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
