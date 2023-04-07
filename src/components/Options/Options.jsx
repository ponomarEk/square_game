import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/useActions';

import Button from '../Button/Button';
import Select from '../Select/Select';

import styles from './Options.module.css';

const Options = () => {
  const { isGameStarted, mode } = useSelector((state) => state.gameConfig);
  const { setIsStarted, resetGameOptions } = useActions();

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const handleResetClick = () => {
    setIsStarted(false);
    resetGameOptions();
  };

  return (
    <div className={styles.options}>
      <Select disabled={isGameStarted} />
      <Button
        text="Start"
        disabled={isGameStarted || !mode}
        onClick={handleStartClick}
      />
      <Button
        text="Reset"
        disabled={!isGameStarted}
        onClick={handleResetClick}
      />
    </div>
  );
};

export default Options;
