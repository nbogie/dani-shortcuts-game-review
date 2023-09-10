import { useState, useEffect } from "react";
import { PressedKeys } from "../components/GameInProgress";

export function usePressedKeysTracking(): PressedKeys {
    const [pressedKeys, setPressedKeys] = useState<PressedKeys>([]);

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

    return pressedKeys;
}
