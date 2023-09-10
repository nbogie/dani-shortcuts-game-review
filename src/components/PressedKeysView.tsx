import { PressedKeys } from "./GameInProgress";

export function PressedKeysView({ pressedKeys }: { pressedKeys: PressedKeys }) {
    return (
        <div className="pressed-key-container">
            <div className="pressed-key">
                Keys_pressed: {pressedKeys.join(", ")}
            </div>
        </div>
    );
}
