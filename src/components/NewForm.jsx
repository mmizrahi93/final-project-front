import React, { Component } from 'react'

const baseURL = 'http://localhost:5000/api/v1/';

export default class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          name: '',
          type: '',
          category: '',
          where: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(baseURL + 'shows/', {
          method: 'POST',
          body: JSON.stringify({name: this.state.name, type: this.state.type, category: this.state.category, where: this.state.where}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(resJson => {
            this.props.getShow()
            this.setState({
              name: '',
              type: '',
              category: '',
              where: '',
            })
          }).catch(error => console.log({'Error': error}))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Show Name:"/>
                    <label htmlFor="type"></label>
                    <input type="text" id="type" name="type" onChange={this.handleChange} value={this.state.type} placeholder="TV Show/ Documentary"/>
                    <label htmlFor="category"></label>
                    <input type="text" id="category" name="category" onChange={this.handleChange} value={this.state.category}placeholder="Add a Category:"/>
                    <label htmlFor="where"></label>
                    <input type="text" id="where" name="where" onChange={this.handleChange} value={this.state.where} placeholder="What Streaming app:"/>
                    <input type="submit" value="Add a Show"/>
                </form>
            </div>
        )
    }
}
