import { useEffect, useState } from "react";
import { GameHeading } from "./GameHeading";
import { GameOverView } from "./GameOverView";
import useKeyPressDetection from "./KeyPressDetection";
import { getLevelsData } from "./LevelsData";
import { LevelsDisplay } from "./LevelsDisplay";
import { PressedKeysView } from "./PressedKeysView";

export type PressedKeys = string[];
export function GameInProgress() {
    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [pressedKeys, setPressedKeys] = useState<PressedKeys>([]);
    const handleLevelChange = (level: number) => {
        setCurrentLevel(level + 1);
    };
    useKeyPressDetection(currentLevel, handleLevelChange);

    const isGameOver = currentLevel === 9;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key;
            if (!pressedKeys.includes(key)) {
                setPressedKeys((prevPressedKeys) => [...prevPressedKeys, key]);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            const key = event.key;
            setPressedKeys((prevPressedKeys) =>
                prevPressedKeys.filter((k) => k !== key)
            );
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [pressedKeys]);

    return (
        <>
            <GameHeading />

            <h2>Current level: {currentLevel}</h2>
            <PressedKeysView pressedKeys={pressedKeys} />

            <LevelsDisplay
                levelsData={getLevelsData()}
                currentLevel={currentLevel}
            />

            {isGameOver && <GameOverView />}
        </>
    );
}