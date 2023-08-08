import { useState } from "react";
import Keyboard from "./Keyboard";
import "./App.css";

function App() {
    const [currentLevel, setCurrentLevel] = useState<number>(0);

    const isGameOver = currentLevel === 8;

    const handleLevelChange = (level: number) => {
        setCurrentLevel(level);
    };

    const levelData = [
        {
            level: 0,
            description:
                "To complete level 1, please use the shortcut which is used to comment out the selected line.",
        },
        {
            level: 1,
            description:
                "To complete level 2, please use the shortcut which is used to add indentation to a selected line.",
        },
        {
            level: 2,
            description:
                "To complete level 3, please use the shortcut which is used to fit the text to your window.",
        },
        {
            level: 3,
            description:
                "To complete level 4, please use the shortcut which is used to toggle the sidebar visibility.",
        },
        // ... four more levels missing here.
    ];

    return (
        <div className="App">
            <h1>The Shortcuts Game</h1>
            <div className="catch-phrase">
                A game to prove your ability with the keyboard!
            </div>
            <div className="game-description">
                <div>This is developed for Linux and Firefox.</div>
                <div>
                    If you're using MacOS, please use Safari browser and Ctrl
                    key, not CMD.
                </div>
            </div>
            <h2>The current level is: {currentLevel}</h2>
            <Keyboard onLevelChange={handleLevelChange} />

            {levelData.map((levelInfo) => (
                <p
                    key={levelInfo.level}
                    className={
                        //maybe extract in separate function
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
                        {" "}
                        🎊 GAME COMPLETED! 🎉{" "}
                    </div>
                    <div className="completed-game">
                        {" "}
                        You're a Keyboard Master!{" "}
                    </div>
                    <div className="clue-caption">The clue is: </div>
                    <div className="clue">BUMFUZZLE</div>
                </div>
            )}
        </div>
    );
}

export default App;
