"use client";

import { useTheme } from "next-themes";
import {createContext, ReactNode, useContext, useEffect, useMemo} from "react";

import { useLocalStorage } from "@/website/hooks/use-local-storage";

export type IConfig = {
    theme: {
        mode: "light" | "dark" | "system";
        base: "neutral" | "gray" | "slate" | "zinc";
        primary: "blue" | "purple" | "green" | "teal" | "orange" | "rose";
    };
};

const defaultConfig: IConfig = {
    theme: {
        mode: "system",
        base: "neutral",
        primary: "blue",
    },
};

const useHook = () => {
    const [state, setState] = useLocalStorage<IConfig>("__PACE_UI_CONFIG__", defaultConfig);
    const { setTheme } = useTheme();

    const htmlRef = useMemo(() => typeof window !== "undefined" && document.documentElement, []);

    const isDark = () => {
        if (state.theme.mode == "system" && typeof window !== "undefined")
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        return state.theme.mode == "dark";
    };

    useEffect(() => {
        const onChangePreferColorScheme = () => {
            setTheme(isDark() ? "dark" : "light");
        };

        if (state.theme.mode == "system") {
            onChangePreferColorScheme();
            const media = window.matchMedia("(prefers-color-scheme: dark)");
            media.addEventListener("change", onChangePreferColorScheme);
            return () => media.removeEventListener("change", onChangePreferColorScheme);
        } else {
            setTheme(isDark() ? "dark" : "light");
        }
    }, [state.theme.mode]);

    useEffect(() => {
        if (htmlRef) htmlRef.setAttribute("data-theme-base", state.theme.base);
    }, [htmlRef, state.theme.base]);

    useEffect(() => {
        if (htmlRef) htmlRef.setAttribute("data-theme-primary", state.theme.primary);
    }, [htmlRef, state.theme.primary]);

    const updateState = (newState: Partial<IConfig>) => {
        setState({ ...state, ...newState });
    };

    const updateTheme = (newState: Partial<IConfig["theme"]>) => {
        updateState({ theme: { ...state.theme, ...newState } });
    };

    const changeThemeMode = (mode: IConfig["theme"]["mode"]) => {
        updateTheme({
            mode,
        });
    };

    const changeThemeBase = (base: IConfig["theme"]["base"]) => {
        updateTheme({
            base,
        });
    };

    const changeThemePrimary = (primary: IConfig["theme"]["primary"]) => {
        updateTheme({
            primary,
        });
    };

    const reset = () => {
        setState(defaultConfig);
    };

    return {
        state,
        reset,
        changeThemeMode,
        changeThemeBase,
        changeThemePrimary,
    };
};

const ConfigContext = createContext({} as ReturnType<typeof useHook>);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
    return <ConfigContext value={useHook()}>{children}</ConfigContext>;
};

export const useConfig = () => {
    return useContext(ConfigContext);
};
