import { useEffect } from "react";
import Mousetrap from "mousetrap";
import { getLevelsData } from "./LevelsData";

function useKeyPressDetection(
    currentLevel: number,
    onLevelChange: (level: number) => void
) {
    useEffect(() => {
        const registerLevelShortcutHandler = (
            shortcut: string,
            level: number
        ) => {
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
            registerLevelShortcutHandler(levelInfo.shortcut, levelInfo.level);
        });

        //Prevent function that groups al the prevents that we need.
        //This is needed to prevent the browser default behaviour.

        function preventDefaultShortcuts(...shortcuts: string[]) {
            shortcuts.forEach((shortcut) => {
                registerLevelShortcutHandler(shortcut, NaN);
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
}

export default useKeyPressDetection;
