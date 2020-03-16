import React from 'react'
import {BrowserRouter, Route , Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Services from './Services'
import UsersList from './Users'
import UserShow from './UserShow'


function App () {
    return (
        <BrowserRouter>
            <div>
                <h1>Hello React</h1>
                <Link to = '/'>Home</Link> |
                <Link to='/services'>Services</Link>  | 
                <Link to='/contact'>Contact</Link> |
                <Link to='/users'>Users</Link>
                               

                <Route path='/' component={Home} exact={true} />
                <Route path='/services' component={Services}/>
                <Route path='/contact' component={Contact} />
                <Route path='/users' component={UsersList} exact={true} />
                <Route path='/users/:id' component={UserShow} />
                
               

               

            </div>
        </BrowserRouter>
        
    )
}

export default App