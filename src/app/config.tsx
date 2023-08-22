"use client"
import React from "react";
import {useThemeStore} from "@/states/theme";


interface PropTypes {
    children: React.ReactNode
}
export default function Config({ children }: PropTypes) {

    const theme = useThemeStore(state => state.theme);

    return (
        <html lang="en" className={theme}>
            {children}
        </html>
    );
}
