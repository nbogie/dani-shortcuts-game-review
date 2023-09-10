import { Level, LevelsData } from "./LevelsData";

interface LevelsDisplayProps {
    levelsData: LevelsData;
    currentLevel: Level;
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
