import React, { Component } from 'react'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import PopularApp from './components/PopularApp';
import ThemeColorProvider from './context/ThemeColor';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     shows: [],
  //     name: '',
  //     type: '',
  //     category: '',
  //     where: '',
  //   }
    
  // }

  render() {
    return (
      
      <Router> 
        <NavBar />
        <Switch>
        <ThemeColorProvider>
          <Route path="/" exact component={HomePage}/>
          <Route path="/popularapp" component={PopularApp}/>
        </ThemeColorProvider>
        </Switch>
      </Router>
      
    )
  }
}

