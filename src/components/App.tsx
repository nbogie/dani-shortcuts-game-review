import { useState } from "react";
import Keyboard from "./Keyboard";
import "./App.css";

function App() {
    const [currentLevel, setCurrentLevel] = useState<number>(0);
    const [levelOneIsCompleted, setLevelOneIsCompleted] =
        useState<boolean>(false);

    const handleLevelChange = (level: number) => {
        setCurrentLevel(level);

        // Check if level 1 is completed
        if (level === 1) {
            setLevelOneIsCompleted(true);
        }
    };

    return (
        <div className="App">
            <h1>Shortcuts Game</h1>
            <h2>The current level is: {currentLevel}</h2>
            <Keyboard onLevelChange={handleLevelChange} />{" "}
            <p className="description">
                To complete level 1, please use the shortcut which is used to
                comment out the selected line.
            </p>
            {levelOneIsCompleted && <div>Level 1 is completed</div>}
            <p className="description">
                To complete level 2, please use the shortcut which is used to
                add indentation to a selected line.
            </p>
            {/* {levelTwoIsCompleted && <div>Level 2 is completed</div>} */}
        </div>
    );
}

export default App;
