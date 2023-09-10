import { useEffect, useState } from "react";
import Mousetrap from "mousetrap";

export function useShortcutTester(): boolean {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        Mousetrap.bind("ctrl+a", (e) => {
            e.preventDefault();
            setSuccess(true);
        });

        //Prevent section.
        Mousetrap.bind("ctrl+[", (e) => {
            e.preventDefault();
        });

        return () => {
            Mousetrap.reset();
        };
    });
    return success;
}
