import GridBoard from './components/Grid/Grid';
import HoverInfo from './components/HoverInfo/HoverInfo';
import Options from './components/Options/Options';

import styles from './index.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <Options />
        <GridBoard />
      </div>
      <HoverInfo />
    </div>
  );
};

export default App;
