import React, {createContext, Component} from 'react';


export const ThemeColor = createContext();


export default class ThemeColorProvider extends Component {
    state = {
        isLightTheme: true,
        light: { text: '#555', background: '#ddd'},
        dark: { text: '#ddd', background: '#333'}
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme})
    }

    render() {
        return (
            <ThemeColor.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeColor.Provider>
        )
    }
}
