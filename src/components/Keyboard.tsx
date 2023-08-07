import { useEffect, useState } from "react";
import Mousetrap from "mousetrap";

interface KeyboardProps {
    onLevelChange: (level: number) => void;
}

const Keyboard = ({ onLevelChange }: KeyboardProps) => {
    const [currentLevel, setCurrentLevel] = useState<number>(0);

    useEffect(() => {
        Mousetrap.bind("ctrl+/", (e) => {
            e.preventDefault();
            if (currentLevel === 0) {
                const newLevel = currentLevel + 1;
                setCurrentLevel(newLevel);
                onLevelChange(newLevel); // to update the parent component.
            }
        });

        Mousetrap.bind("ctrl+]", (e) => {
            e.preventDefault();
            if (currentLevel === 1) {
                const newLevel = currentLevel + 1;
                setCurrentLevel(newLevel);
                onLevelChange(newLevel);
            }
        });

        Mousetrap.bind("ctrl+z", () => {
            if (currentLevel === 2) {
                const newLevel = currentLevel + 1;
                setCurrentLevel(newLevel);
                onLevelChange(newLevel);
            }
        });

        return () => {
            Mousetrap.reset();
        };
    }, [currentLevel, onLevelChange]);

    return <div>A game to prove your ability with the keyboard!</div>;
};

export default Keyboard;
