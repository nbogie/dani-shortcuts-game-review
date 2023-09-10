import { LevelNumber, LevelsData } from "./LevelsData";

interface LevelsDisplayProps {
    levelsData: LevelsData;
    currentLevel: LevelNumber;
}
export function LevelsDisplay({
    levelsData,
    currentLevel,
}: LevelsDisplayProps): JSX.Element {
    function classNameForLevel(levelNum: number) {
        return currentLevel === levelNum
            ? "active"
            : currentLevel > levelNum
            ? "completed"
            : "upcoming";
    }

    return (
        <>
            {levelsData.map((levelData) => (
                <p
                    key={levelData.level}
                    className={classNameForLevel(levelData.level)}
                >
                    {levelData.description}
                </p>
            ))}
        </>
    );
}
