import React, { useState } from "react";
import { ShortcutTester } from "./ShortcutTester";

interface StartPageProps {
    onStart: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
    const [shortcutTested, setShortcutTested] = useState(false);

    return (
        <div className="start-page">
            <h1>Welcome to The Shortcuts Game</h1>
            <p className="catch-phrase">
                Prove your ability with the keyboard!
            </p>
            <div className="game-description">
                <div>
                    ATTENTION: This game was developed for Linux and Firefox.
                </div>
                <div>
                    In MacOS, please use Safari browser and Ctrl key, not CMD.
                </div>
            </div>
            <p className="start-caption">
                Press Ctrl+a to show the start button.
            </p>
            <div className="start-button">
                {shortcutTested && (
                    <button onClick={onStart}>Start Game!</button>
                )}
            </div>
            <ShortcutTester onSuccess={() => setShortcutTested(true)} />
        </div>
    );
};

export default StartPage;
