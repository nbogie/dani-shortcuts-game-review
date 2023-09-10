import Mousetrap from "mousetrap";
import { useEffect } from "react";
import { LevelsData } from "../components/LevelsData";

function useKeyPressDetection(
    currentLevel: number,
    onLevelChange: (level: number) => void,
    levelsData: LevelsData
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
    }, [currentLevel, onLevelChange, levelsData]); //check
}

export default useKeyPressDetection;
