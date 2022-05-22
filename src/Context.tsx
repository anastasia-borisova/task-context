import { ReactElement, useContext } from 'react';
import React from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = React.createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const theme: Theme = useContext(ThemeContext);
    return theme;
}
