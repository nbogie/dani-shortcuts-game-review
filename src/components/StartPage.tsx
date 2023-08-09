import React from "react";

interface StartPageProps {
    onStart: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
    return (
        <div className="start-page">
            <h1>Welcome to The Shortcuts Game</h1>
            <p className="catch-phrase">
                Prove your ability with the keyboard!
            </p>
            <div className="start-button">
                <button onClick={onStart}>Start Game!</button>
            </div>
        </div>
    );
};

export default StartPage;
