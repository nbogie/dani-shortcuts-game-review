import { useEffect, useState } from "react";
import Mousetrap from "mousetrap";

interface KeyboardProps {
    onLevelChange: (level: number) => void;
}

const Keyboard = ({ onLevelChange }: KeyboardProps) => {
    const [currentLevel, setCurrentLevel] = useState<number>(0);

    // Here is possible to define a function called handleLevelShortcut
    // and pass different props for each level to avoid repetition.

    useEffect(() => {
        const handleLevelShortcut = (shortcut: string, level: number) => {
            Mousetrap.bind(shortcut, (e) => {
                e.preventDefault();
                if (currentLevel === level - 1) {
                    const newLevel = level;
                    setCurrentLevel(newLevel);
                    onLevelChange(newLevel);
                }
            });
        };

        handleLevelShortcut("ctrl+[", -1);
        handleLevelShortcut("ctrl+/", 1);
        handleLevelShortcut("ctrl+]", 2);
        handleLevelShortcut("alt+z", 3);
        handleLevelShortcut("ctrl+b", 4);

        return () => {
            Mousetrap.reset();
        };
    }, [currentLevel, onLevelChange]);

    return <div>A game to prove your ability with the keyboard!</div>;
};

export default Keyboard;
