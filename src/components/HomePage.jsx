import React, { Component } from 'react'
import NewForm from './NewForm'
import ShowContainer from './ShowContainer';
import ThemeToggle from './ThemeToggle';
import { ThemeColor } from '../context/ThemeColor';

const baseURL = 'https://next-flick.herokuapp.com/api/v1/';

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          shows: [],
          name: '',
          type: '',
          category: '',
          where: '',
        }
        this.getShow = this.getShow.bind(this)
        this.handleAddShow = this.handleAddShow.bind(this)
    }
    
    componentDidMount(){
        this.getShow()
    }
    
    getShow() {
        fetch(baseURL + 'shows/')
          .then(data => { 
            
              return data.json()}, 
              err => console.log(err),
              
          )
          
          .then(parsedData => {
            console.log(parsedData)
              this.setState({shows: parsedData.data})}, err => console.log(err))
    }
    
    handleAddShow(show) {
        const copyShow = [...this.state.show]
        copyShow.unshift(show)
        this.setState({
          show: copyShow,
          name: '',
          type: '',
          category: '',
          where: '', 
        })
    }
    static contextType = ThemeColor
    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div style={{background: theme.background, color: theme.text}}>
            <div className='newform' >
            <NewForm getShow={this.getShow} handleAddShow={this.handleAddShow}/>
            <ThemeToggle />
            </div>
            <div className='allshows'>
            {
                this.state.shows.map(show => {
                return <ShowContainer getShow={this.getShow} allShows={this.state.shows} show={show} key={show.id}/>
                })
            }
            </div>
            </div>
        )
    }
}
