import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class NavBar extends Component {
    
    render() {
        return (
            <div className='navbar'>
            <h1>Welcome to NextFlick</h1>
            <div className='navbuttons'>
                <Link to='/'>
                <h3>Home</h3>
                </Link>
                <Link to='/popularapp'>
                <h3>Popular Apps</h3>
                </Link>
            </div>
            </div>
        )
    }
}
