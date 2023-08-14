import { useEffect } from "react";
import Mousetrap from "mousetrap";

interface KeyboardProps {
    currentLevel: number;
    onLevelChange: (level: number) => void;
}

const Keyboard = ({ currentLevel, onLevelChange }: KeyboardProps) => {
    useEffect(() => {
        const handleLevelShortcut = (shortcut: string, level: number) => {
            Mousetrap.bind(shortcut, (e) => {
                e.preventDefault();
                if (currentLevel === level) {
                    onLevelChange(level);
                }
            });
        };

        //Event listeners.

        handleLevelShortcut("ctrl+/", 1);
        handleLevelShortcut("ctrl+]", 2);
        handleLevelShortcut("alt+z", 3);
        handleLevelShortcut("ctrl+b", 4);
        handleLevelShortcut("ctrl+p", 5);
        handleLevelShortcut("ctrl+l", 6);
        handleLevelShortcut("ctrl+`", 7);
        handleLevelShortcut("ctrl+shift+\\", 8);

        //Prevent section.

        handleLevelShortcut("ctrl+[", NaN);
        handleLevelShortcut("ctrl+a", NaN);
        handleLevelShortcut("ctrl+z", NaN);
        handleLevelShortcut("ctrl+f", NaN);
        handleLevelShortcut("ctrl+[", NaN);

        return () => {
            Mousetrap.reset();
        };
    }, [currentLevel, onLevelChange]); //check

    return <></>;
};

export default Keyboard;
