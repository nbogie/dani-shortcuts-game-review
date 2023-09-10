import { useMemo, useState } from "react";
import useKeyPressDetection from "../hooks/useKeyPressDetection";
import { GameHeading } from "./GameHeading";
import { GameOverView } from "./GameOverView";
import { getRandomizedLevelsData } from "./LevelsData";
import { LevelsDisplay } from "./LevelsDisplay";
import { PressedKeysView } from "./PressedKeysView";

export type PressedKeys = string[];

export function GameInProgress() {
    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const handleLevelChange = (level: number) => {
        setCurrentLevel(level + 1);
    };
    const levelsData = useMemo(getRandomizedLevelsData, []);

    useKeyPressDetection(currentLevel, handleLevelChange, levelsData);

    const isGameOver = currentLevel === 9;

    return (
        <>
            <GameHeading />

            <h2>Current level: {currentLevel}</h2>
            <PressedKeysView />

            <LevelsDisplay
                levelsData={levelsData}
                currentLevel={currentLevel}
            />

            {isGameOver && <GameOverView />}
        </>
    );
}
