import { useEffect } from "react";
import Mousetrap from "mousetrap";

interface ShortcutTesterProps {
    onSuccess: () => void;
}
export function ShortcutTester({
    onSuccess,
}: ShortcutTesterProps): JSX.Element {
    useEffect(() => {
        Mousetrap.bind("ctrl+a", (e) => {
            e.preventDefault();
            onSuccess();
        });

        //Prevent section.
        Mousetrap.bind("ctrl+[", (e) => {
            e.preventDefault();
        });

        return () => {
            Mousetrap.reset();
        };
    }, [onSuccess]);

    return <div></div>;
}
