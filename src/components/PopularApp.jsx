import React, { Component } from 'react'
import ThemeToggle from './ThemeToggle';
import { ThemeColor } from '../context/ThemeColor';

export default class PopularApp extends Component {
    static contextType = ThemeColor
    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div style={{background: theme.background, color: theme.text}}>
                <ThemeToggle />
                <h3>Popular Streaming Apps Used</h3>
                <h4>Click on the Logos to Login or Signup</h4>
                <a href="https://www.netflix.com/"><img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8" alt="Netflix"></img></a>
                <a href="https://www.hbomax.com/"><img src="https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png" alt="HBO Max"></img></a>
                <a href="https://www.primevideo.com/"><img src="https://www.telesurenglish.net/mrf4u/statics/i/ps/www.telesurtv.net/__export/1584731358366/sites/telesur/img/2020/03/20/amazon_2.jpg?width=1200&enable=upscale" alt="AmazonPrime Video"></img></a>
                <a href="https://www.disneyplus.com/"><img src="https://media.comicbook.com/2018/11/disney-plus-logo-1143358.jpeg" alt="DisneyPlus"></img></a>
                <a href="https://www.hulu.com/welcome"><img src="https://media.comicbook.com/2019/11/hulu-logo-1197973-1280x0.jpeg" alt="Hulu"></img></a>
                <a href="https://www.peacocktv.com/"><img src="https://www.newscaststudio.com/wp-content/uploads/2019/09/peacock-logo.jpg" alt="Peacock"></img></a>
                <a href="https://www.starz.com/us/en/"><img src="https://www.soda.com/wp-content/uploads/2020/03/starz.jpg" alt="Starz"></img></a>
                <a href="https://tv.apple.com/"><img src="https://www.apple.com/v/apple-tv-plus/t/images/meta/og__bgttn9piew1u.png?202107010834" alt="Starz"></img></a>
            </div>
        )
    }
}
