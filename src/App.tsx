import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/layout/layout';
import { HomeMain } from './components/home-main/home-main';
import { LeaderBoard } from './components/leader-board/leader-board';

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<HomeMain />} />
                    <Route path="leaderboard" element={<LeaderBoard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
