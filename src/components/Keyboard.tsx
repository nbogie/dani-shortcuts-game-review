import { useEffect } from "react";
import Mousetrap from "mousetrap";
import levelData from "../data/levelData.json";

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

        //Adding event listeners based on the leveData.

        levelData.forEach((levelInfo) => {
            handleLevelShortcut(levelInfo.shortcut, levelInfo.level);
        });

        //Prevent function that groups al the prevents that we need. This is needed to prevent the browser default behaviour.

        function preventDefaultShortcuts(...shortcuts: string[]) {
            shortcuts.forEach((shortcut) => {
                handleLevelShortcut(shortcut, NaN);
            });
        }

        preventDefaultShortcuts(
            "ctrl+[",
            "ctrl+a",
            "ctrl+z",
            "ctrl+f",
            "ctrl+[",
            "/",
            "tab"
        );

        return () => {
            Mousetrap.reset();
        };
    }, [currentLevel, onLevelChange]); //check

    return <></>;
};

export default Keyboard;
