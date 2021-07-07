import React, { Component } from 'react'

const baseURL = 'http://localhost:5000/api/v1/';

export default class ShowContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            showForm: false,
            name: '',
            type: '',
            category: '',
            where: ''
        }
    }

    deleteShow(id) {
        fetch(`${baseURL}shows/${this.props.show.id}`, {
          method: 'DELETE'
        }).then(res => {
        this.props.getShow()
          if(res.status === 200) {
            const findIndex = this.props.allShows.findIndex(show => show.id === id)
            const copyShow = [...this.props.allShows]
            copyShow.splice(findIndex, 1)
            this.setState({allShows: copyShow})
          }
        })
    }

    render() {
        return (
            <div className='posts'>
                <h3>Name: {this.props.show.name}</h3>
                <h3>Type: {this.props.show.type}</h3>
                <h3>Category: {this.props.show.category}</h3>
                <h3>Streaming App On: {this.props.show.where}</h3>
                <button onClick={() => this.deleteShow(this.props.show.id)}>&#128465;</button>
                <button>Update</button>
            </div>
        )
    }
}
