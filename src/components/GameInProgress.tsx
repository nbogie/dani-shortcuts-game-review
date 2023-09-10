import { useEffect, useMemo, useState } from "react";
import { GameHeading } from "./GameHeading";
import { GameOverView } from "./GameOverView";
import useKeyPressDetection from "../hooks/useKeyPressDetection";
import { getRandomizedLevelsData } from "./LevelsData";
import { LevelsDisplay } from "./LevelsDisplay";
import { PressedKeysView } from "./PressedKeysView";

export type PressedKeys = string[];

export function GameInProgress() {
    const [pressedKeys, setPressedKeys] = useState<PressedKeys>([]);

    const levelsData = useMemo(getRandomizedLevelsData, []);

    const currentLevel = useKeyPressDetection(levelsData);

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
                levelsData={levelsData}
                currentLevel={currentLevel}
            />

            {isGameOver && <GameOverView />}
        </>
    );
}
