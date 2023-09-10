import { useState, useEffect } from "react";
import KeyPressDetection from "./KeyPressDetection";
import { GameOverView } from "./GameOverView";
import { GameHeading } from "./GameHeading";
import { PressedKeysView } from "./PressedKeysView";
import { getLevelsData } from "./LevelsData";
import { LevelsDisplay } from "./LevelsDisplay";

export type PressedKeys = string[];
export function GameInProgress() {
    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [pressedKeys, setPressedKeys] = useState<PressedKeys>([]);

    const isGameOver = currentLevel === 9;

    const handleLevelChange = (level: number) => {
        setCurrentLevel(level + 1);
    };

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

            <KeyPressDetection
                currentLevel={currentLevel}
                onLevelChange={handleLevelChange}
            />
            <LevelsDisplay
                levelsData={getLevelsData()}
                currentLevel={currentLevel}
            />

            {isGameOver && <GameOverView />}
        </>
    );
}

