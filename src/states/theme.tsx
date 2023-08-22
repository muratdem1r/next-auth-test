import { create } from 'zustand'

enum ThemeTypes {
    Light = 'light',
    Dark = 'dark',
}

interface ThemeState {
    theme: ThemeTypes
    changeTheme: () => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
    theme: ThemeTypes.Dark,
    changeTheme: () => set((state) => ({
        theme: state.theme === ThemeTypes.Light ? ThemeTypes.Dark : ThemeTypes.Light
    })),
}))

