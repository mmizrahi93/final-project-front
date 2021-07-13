import React, { Component } from 'react'
import { ThemeColor } from '../context/ThemeColor'

// https://www.youtube.com/watch?v=CGRpfIUURE0 this video helped me with react context
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
