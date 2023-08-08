import { useState } from "react";
import Keyboard from "./Keyboard";
import "./App.css";

function App() {
    const [currentLevel, setCurrentLevel] = useState<number>(0);

    //Really don't need this state, because I can do the conditional rendering using the level state.

    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const handleLevelChange = (level: number) => {
        setCurrentLevel(level);

        if (level === 8) {
            setIsGameOver(true);
        }
    };

    //This section is repetitive. Should be refactored to a single function.

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

    function levelFourClass(): string {
        let classes = "description";
        if (currentLevel === 3) classes = "enable";
        if (currentLevel > 3) classes = "used";
        return classes;
    }

    // I could extract the level data to an external array and use map() to display it all.

    return (
        <div className="App">
            <h1>The Shortcuts Game</h1>
            <h2>The current level is: {currentLevel}</h2>
            <Keyboard onLevelChange={handleLevelChange} />{" "}
            <p className={levelOneClass()}>
                To complete level 1, please use the shortcut which is used to
                comment out the selected line.
            </p>
            <p className={levelTwoClass()}>
                To complete level 2, please use the shortcut which is used to
                add indentation to a selected line.
            </p>
            <p className={levelThreeClass()}>
                To complete level 3, please use the shortcut which is used to
                fit the text to your window.
            </p>
            <p className={levelFourClass()}>
                To complete level 4, please use the shortcut which is used to
                toggle the sidebar visibility.
            </p>
            {isGameOver && (
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
