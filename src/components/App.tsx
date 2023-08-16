import { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import "./App.css";
import StartPage from "./StartPage";
import levelData from "../data/levelData.json";

function App() {
    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [gameStarted, setGameStarted] = useState(false);
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);

    const isGameOver = currentLevel === 9;

    const handleLevelChange = (level: number) => {
        setCurrentLevel(level + 1);
    };

    const startGame = () => {
        setGameStarted(true);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key;
            if (!pressedKeys.includes(key)) {
                setPressedKeys((prevPressedKeys) => [...prevPressedKeys, key]);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            const key = event.key;
            setPressedKeys((prevPressedKeys) =>
                prevPressedKeys.filter((k) => k !== key)
            );
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [pressedKeys]);

    return (
        <div className="App">
            {gameStarted ? (
                <>
                    <h1>The Shortcuts Game</h1>
                    <p className="i">DO NOT CHEAT!</p>
                    <div className="catch-phrase">
                        A game to prove your ability with the keyboard.
                    </div>
                    <div className="warning">
                        Don't forget to use Ctrl and not CMD key!
                    </div>
                    <h2>Current level: {currentLevel}</h2>
                    <div className="pressed-key-container">
                        <div className="pressed-key">
                            Keys_pressed: {pressedKeys.join(", ")}
                        </div>
                    </div>

                    <Keyboard
                        currentLevel={currentLevel}
                        onLevelChange={handleLevelChange}
                    />

                    {levelData.map((levelInfo) => (
                        <p
                            key={levelInfo.level}
                            className={
                                currentLevel === levelInfo.level
                                    ? "active"
                                    : currentLevel > levelInfo.level
                                    ? "completed"
                                    : "upcoming"
                            }
                        >
                            {levelInfo.description}
                        </p>
                    ))}

                    {isGameOver && (
                        <div className="completed-game-container">
                            <div className="completed-game">
                                🎊 GAME COMPLETED! 🎉
                            </div>
                            <div className="completed-game">
                                You're a Keyboard Master!
                            </div>
                            <div className="clue-caption">The clue is:</div>
                            <div className="clue">ADA LOVELACE</div>
                        </div>
                    )}
                </>
            ) : (
                <StartPage onStart={startGame} />
            )}
        </div>
    );
}

export default App;
