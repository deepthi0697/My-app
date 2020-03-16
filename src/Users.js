import React from 'react'
import axios from 'axios' // npm install axios
import {Link} from 'react-router-dom'

class UsersList extends React.Component {           
    constructor(){
        console.log('constructor')
        super()
        this.state = {
            users: [],
        }
    }
    
    //After 1st render
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users') // need not parse it, it will automatically parse 
            .then((response)=>{
                console.log(response)
                const users = response.data
                this.setState({users})
            })
            .catch((err) => {
                alert(err)
            })

    }
      
            render(){
                return (
                            <div>
                                <h2>Listing users - {this.state.users.length}</h2>
                                
                                <ul>
                                    {
                                        this.state.users.map(function(user){
                                            return <li key = {user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                                        })
                                    }
                                </ul>
                                
                            </div>
                        )

                
            }
    
}

export default UsersList // we are exporting the component, not the file