"use client"

import './index.scss'

import {useThemeStore} from "@/states/theme";

import ThemeToggleIcon from "@/icons/ThemeSwitcherIcon";

export default function ThemeToggle() {
    const changeTheme = useThemeStore(state => state.changeTheme);

    return (
        <button onClick={changeTheme} className='theme-toggle' id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite">
            <ThemeToggleIcon/>
        </button>
    );
}
