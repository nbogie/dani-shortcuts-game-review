import { usePressedKeysTracking } from "../hooks/usePressedKeysTracking";

export function PressedKeysView() {
    const pressedKeys = usePressedKeysTracking();
    return (
        <div className="pressed-key-container">
            <div className="pressed-key">
                Keys_pressed: {pressedKeys.join(", ")}
            </div>
        </div>
    );
}
