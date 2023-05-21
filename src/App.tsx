import styles from './App.module.scss';
import { Header } from './components/header/header';
import { MafiaImage } from './components/mafia-image/mafia-image';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <MafiaImage />
        </div>
    );
}

export default App;
