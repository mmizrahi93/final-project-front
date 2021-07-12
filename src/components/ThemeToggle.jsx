import React, { Component } from 'react'
import { ThemeColor } from '../context/ThemeColor'

export default class ThemeToggle extends Component {
    static contextType = ThemeColor;
    render() {
        const {toggleTheme} = this.context;
        return (
            <div>
                <button className='themecolor' onClick={toggleTheme}>Dark Mode</button>
            </div>
        )
    }
}
