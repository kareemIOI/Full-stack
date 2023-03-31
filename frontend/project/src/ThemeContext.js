import React, { createContext, useState } from 'react'
export const ThemeContext = createContext()

let Themes = [
    {
        name: "purple",
        navBar: "#6A0DAD",
        sideBar: "#8F00FF",
        miniSideBar:"#8F00FF",
        iconBackground: "#9932CC",
        iconColor: "#D473D4",
        text: "#6F456E",
        chartsColor: "#C9A0FF"
    },
    {
        name: "blue",
        navBar: "#00308F",
        sideBar: "#004F98",
        miniSideBar:"#004F98",
        iconBackground: "#4682B4",
        iconColor: "#6CA0DC",
        text: "#0066B2",
        chartsColor: "#318CE7"
    }
    ,
    {
        name: "green",
        navBar: "#00A86B",
        sideBar: "#2E8B57",
        miniSideBar:"#2E8B57",
        iconBackground: " #0BDA51",
        iconColor: "#5EDC1F",
        text: "#138808",
        chartsColor: "#39FF14"
    }
]

function ThemeProvider(props) {

    const [Theme, setTheme] = useState(Themes[0])

    function toggleTheme(value) {
        setTheme(value)
    }


// we provide an object that is has ....
// Themes Array ... used in seetings control
// Theme .... The chossen one ...used within the componets
// toggleTheme .... used to change the theme 
    return (
        <ThemeContext.Provider value={{ Themes , Theme, toggleTheme }} >
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider

