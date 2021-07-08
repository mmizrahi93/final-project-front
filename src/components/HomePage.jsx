import React, { Component } from 'react'
import NewForm from './NewForm'
import ShowContainer from './ShowContainer';

// const baseURL = 'http://localhost:5000/api/v1/';
let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1/';
} else {
  baseURL = 'https://next-flick.herokuapp.com/';
};
console.log(process.env.NODE_ENV)
console.log(baseURL)

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

    render() {
        return (
            <div>
            <div className='newform'>
            <NewForm getShow={this.getShow} handleAddShow={this.handleAddShow}/>
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
