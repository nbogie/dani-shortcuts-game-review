import levelsDataRaw from "../data/levelData.json";
export type Level = number;

export type LevelsData = LevelData[];
interface LevelData {
    level: Level;
    shortcut: string;
    description: string;
}

export function getLevelsData(): LevelsData {
    //TODO: validate with zod so that a change in file doesn't propagate
    //a change in type without you being in control of it
    return levelsDataRaw;
}

export function getRandomizedLevelsData(): LevelsData {
    return reassignLevelNumbers(shuffle(levelsDataRaw));
}

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => (Math.random() < 0.5 ? -1 : 1));
}

function reassignLevelNumbers(levels: LevelsData): LevelsData {
    return levels.map((level, ix) => ({
        ...level,
        level: ix + 1,
    }));
}
