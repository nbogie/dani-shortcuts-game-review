import React, { useState, useEffect } from "react";
import Mousetrap from "mousetrap";

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
            <p className="start-caption">
                Press Ctrl+a to show the start button.
            </p>
            <div className="start-button">
                {shortcutTested && (
                    <button onClick={onStart}>Start Game!</button>
                )}
            </div>
            <Tests setShortcutTested={setShortcutTested} />
        </div>
    );
};

interface TestsProps {
    setShortcutTested: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tests: React.FC<TestsProps> = ({ setShortcutTested }) => {
    useEffect(() => {
        Mousetrap.bind("ctrl+a", (e) => {
            e.preventDefault();
            setShortcutTested(true);
        });

        return () => {
            Mousetrap.reset();
        };
    }, [setShortcutTested]);

    return <div></div>;
};

export default StartPage;
