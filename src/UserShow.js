import React from 'react'
import { Link , Route} from 'react-router-dom'
import axios from 'axios'
import UsersList from './Users'

class UserShow extends React.Component {
    constructor(){
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const user = response.data
            this.setState({user})
        })
    }

    render(){
        return (
            <div>
                <h1>User Show page - {this.props.match.params.id}</h1>
                <p>{this.state.user.name} - {this.state.user.email}</p>
                <Link to='/users'>back</Link>
                
                
            </div>
        )
    }
}

export default UserShow