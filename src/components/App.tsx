import { useState } from "react";
import Keyboard from "./Keyboard";
import "./App.css";
import StartPage from "./StartPage";

function App() {
    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [gameStarted, setGameStarted] = useState(false);

    const isGameOver = currentLevel === 9;

    const handleLevelChange = (level: number) => {
        setCurrentLevel(level + 1);
    };

    const startGame = () => {
        setGameStarted(true);
    };

    const levelData = [
        {
            level: 1,
            description:
                "Please use the shortcut which is used to comment out the selected line.",
        },
        {
            level: 2,
            description:
                "Please use the shortcut which is used to add indentation to a selected line.",
        },
        {
            level: 3,
            description:
                "Please use the shortcut which is used to fit the text to your window.",
        },
        {
            level: 4,
            description:
                "Please use the shortcut which is used to toggle the sidebar visibility.",
        },
        {
            level: 5,
            description:
                "Please use the shortcut which is used to quickly open or go to a file.",
        },
        {
            level: 6,
            description:
                "Please use the shortcut which is used to clear your console.",
        },
        {
            level: 7,
            description:
                "Please use the shortcut which is used to open the terminal pane.",
        },
        {
            level: 8,
            description:
                "Please use the shortcut that moves you to the following square bracket. (3 keys combo!)",
        },
    ];

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
                    <Keyboard
                        currentLevel={currentLevel}
                        onLevelChange={handleLevelChange}
                    />

                    {levelData.map((levelInfo) => (
                        <p
                            key={levelInfo.level}
                            className={
                                currentLevel === levelInfo.level
                                    ? "enable"
                                    : currentLevel > levelInfo.level
                                    ? "used"
                                    : "description"
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
