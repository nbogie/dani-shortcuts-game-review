import { useMemo } from "react";
import useKeyPressDetection from "../hooks/useKeyPressDetection";
import { GameHeading } from "./GameHeading";
import { GameOverView } from "./GameOverView";
import { getRandomizedLevelsData } from "./LevelsData";
import { LevelsDisplay } from "./LevelsDisplay";
import { PressedKeysView } from "./PressedKeysView";

export function GameInProgress() {
    const levelsData = useMemo(getRandomizedLevelsData, []);

    const currentLevel = useKeyPressDetection(levelsData);

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
