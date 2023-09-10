import Mousetrap from "mousetrap";
import { useEffect, useState } from "react";
import { LevelNumber, LevelsData } from "../components/LevelsData";

function useKeyPressDetection(levelsData: LevelsData): LevelNumber {
    const [levelNumber, setLevelNumber] = useState(1);
    useEffect(() => {
        const registerLevelShortcutHandler = (
            shortcut: string,
            level: number
        ) => {
            Mousetrap.bind(shortcut, (e) => {
                e.preventDefault();
                if (levelNumber === level) {
                    setLevelNumber((prev) => prev + 1);
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
    }, [levelNumber, levelsData]); //check

    return levelNumber;
}

export default useKeyPressDetection;
