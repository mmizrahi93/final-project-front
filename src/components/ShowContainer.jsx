import React, { Component } from 'react'
import Axios from "axios";

const baseURL = 'https://next-flick.herokuapp.com/api/v1/';

export default class ShowContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            showForm: false,
            name: this.props.show.name,
            type: this.props.show.type,
            category: this.props.show.category,
            where: this.props.show.where,
            likes: 0,
            dislikes: 0,
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
      this.setUpState()
    }

    setUpState=() => {
      let name = this.props.show.name
      let type = this.props.show.type
      let category = this.props.show.category
      let where = this.props.show.where
      this.setState({
        name: name,
        type: type,
        category: category,
        where: where
      })
    }

    toggleEdit = () => {
        this.setState(
            { showForm: !this.state.showForm},   
        );
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

    handleUpdateShow = async (event) => {
        event.preventDefault()
        const payLoad = {
          name: this.state.name,
          type: this.state.type,
          category: this.state.category,
          where: this.state.where
        };
        const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        };
        const showId = this.props.show.id;
        console.log(showId)
        await Axios.put(baseURL + `shows/${showId}`, payLoad, { headers: headers })
        .then(
          (res) => {
            console.log(res);
          }
        )
        .then(resJson => {
            this.props.getShow()
            this.toggleEdit()
            this.setState({
              name: '',
              type: '',
              category: '',
              where: ''
            })
        })
    };

    toggleAddLike() {
      const addLike = this.state.likes + 1;
      this.setState({ likes: addLike });
    }

    toggleAddDislike() {
      const addDislike = this.state.dislikes + 1;
      this.setState({ dislikes: addDislike });
    }

    render() {
        return (
            <div className='posts'>
                <h3>Name: {this.props.show.name}</h3>
                <h3>Type: {this.props.show.type}</h3>
                <h3>Category: {this.props.show.category}</h3>
                <h3>Streaming App On: {this.props.show.where}</h3>
                <button onClick={() => this.deleteShow(this.props.show.id)}>&#128465;</button>
                <button onClick={this.toggleEdit}>&#9997;</button>
                <button onClick={() => this.toggleAddLike(this.props.show.id)}> &#128077; {this.state.likes}</button>
                <button onClick={() => this.toggleAddDislike(this.props.show.id)}>&#128078; {this.state.dislikes}</button>
                { this.state.showForm &&
                    <form onSubmit={this.handleUpdateShow}>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="name" onChange={this.handleChange} defaultValue={this.props.show.name}/>
                        <label htmlFor="type"></label>
                        <input type="text" id="type" name="type" onChange={this.handleChange} defaultValue={this.props.show.type}/>
                        <label htmlFor="category"></label>
                        <input type="text" id="category" name="category" onChange={this.handleChange} defaultValue={this.props.show.category} />
                        <label htmlFor="where"></label>
                        <input type="text" id="where" name="where" onChange={this.handleChange} defaultValue={this.props.show.where} />
                        <input type="submit" value="Update Show"/>
                    </form>
                }
                
            </div>
        )
    }
}
