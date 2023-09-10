import { useState } from "react";
import "./App.css";
import StartPage from "./StartPage";
import { GameInProgress } from "./GameInProgress";

function App() {
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div className="App">
            {gameStarted ? (
                <GameInProgress />
            ) : (
                <StartPage onStart={() => setGameStarted(true)} />
            )}
        </div>
    );
}

export default App;
