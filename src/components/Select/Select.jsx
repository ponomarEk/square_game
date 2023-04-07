import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/useActions';
import { useGetGameModeQuery } from '../../store/api/modeApi';

import LoadingSpinner from '../Spinner/Spinner';

import styles from './Select.module.css';

const CustomSelect = ({ disabled }) => {
  const { data: gameModes, isFetching } = useGetGameModeQuery();
  const { setMode } = useActions();
  const { mode } = useSelector((state) => state.gameConfig);

  const handleChange = (event) => {
    setMode(...gameModes.filter((mode) => mode.id === event.target.value));
  };

  return (
    <>
      {isFetching && <LoadingSpinner />}
      <select
        id="game-mode-select"
        disabled={disabled}
        className={styles.select}
        value={mode.id || 0}
        onChange={handleChange}
      >
        {!mode && <option value={0}>Pick mode</option>}
        {gameModes?.map((gameMode) => (
          <option key={gameMode.id} value={gameMode.id}>
            {gameMode.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
