import { useState } from "react";
import Keyboard from "./Keyboard";
import "./App.css";

function App() {
    const [currentLevel, setCurrentLevel] = useState<number>(0);
    const [levelOneIsCompleted, setLevelOneIsCompleted] =
        useState<boolean>(false);
    const [levelTwoIsCompleted, setLevelTwoIsCompleted] =
        useState<boolean>(false);
    const [levelThreeIsCompleted, setLevelThreeIsCompleted] =
        useState<boolean>(false);

    const handleLevelChange = (level: number) => {
        setCurrentLevel(level);

        // Check if level 1 is completed
        if (level === 1) {
            setLevelOneIsCompleted(true);
        }
        if (level === 2) {
            setLevelTwoIsCompleted(true);
        }
        if (level === 3) {
            setLevelThreeIsCompleted(true);
        }
    };

    function levelOneClass(): string {
        let classes = "description";
        if (currentLevel === 0) classes = "enable";
        if (currentLevel > 0) classes = "used";
        return classes;
    }

    function levelTwoClass(): string {
        let classes = "description";
        if (currentLevel === 1) classes = "enable";
        if (currentLevel > 1) classes = "used";
        return classes;
    }

    function levelThreeClass(): string {
        let classes = "description";
        if (currentLevel === 2) classes = "enable";
        if (currentLevel > 2) classes = "used";
        return classes;
    }

    return (
        <div className="App">
            <h1>The Shortcuts Game</h1>
            <h2>The current level is: {currentLevel}</h2>
            <Keyboard onLevelChange={handleLevelChange} />{" "}
            <p className={levelOneClass()}>
                To complete level 1, please use the shortcut which is used to
                comment out the selected line.
            </p>
            {levelOneIsCompleted && <div>Level 1 is completed!</div>}
            <p className={levelTwoClass()}>
                To complete level 2, please use the shortcut which is used to
                add indentation to a selected line.
            </p>
            {levelTwoIsCompleted && <div>Level 2 is completed!</div>}
            <p className={levelThreeClass()}>
                To complete level 3, please use the shortcut which is used to
                fit the text to your window.
            </p>
            {levelThreeIsCompleted && (
                <div className="completed-game-container">
                    <div className="completed-game">
                        {" "}
                        🎊 GAME COMPLETED! 🎉{" "}
                    </div>
                    <div className="completed-game">
                        You're a Keyboard Master!
                    </div>
                    <div className="clue-caption">The clue is: </div>
                    <div className="clue">BUMFUZZLE</div>
                </div>
            )}
        </div>
    );
}

export default App;
