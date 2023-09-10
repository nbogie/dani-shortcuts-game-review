import { useEffect } from "react";
import Mousetrap from "mousetrap";
import { getLevelsData } from "./LevelsData";

interface KeyPressDetectionProps {
    currentLevel: number;
    onLevelChange: (level: number) => void;
}
const KeyPressDetection = ({
    currentLevel,
    onLevelChange,
}: KeyPressDetectionProps) => {
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
        const levelsData = getLevelsData();
        levelsData.forEach((levelInfo) => {
            handleLevelShortcut(levelInfo.shortcut, levelInfo.level);
        });

        //Prevent function that groups al the prevents that we need.
        //This is needed to prevent the browser default behaviour.

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

export default KeyPressDetection;
