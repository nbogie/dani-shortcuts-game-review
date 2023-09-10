import { useEffect } from "react";
import Mousetrap from "mousetrap";

export function useShortcutTester(onSuccess: () => void): void {
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
}
