import {Route,Switch,Redirect} from 'react-router-dom'
import HomePage from './Routes/HomePage';
import Login from './Routes/Login';
import PageNotFound from './Routes/PageNotFound';
import NewMovies from './Routes/NewMovie';
import Navbar from './components/Navbar';

function App(){
    return(
        <>
            <Navbar/>
            
            <Switch>
                <Route path="/home">
                    <HomePage/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path='/new'>
                    <NewMovies/>
                </Route>

                <Redirect from='/' exact to='/home'>

                </Redirect>

                <Route>
                    <PageNotFound/>
                </Route>

            </Switch>
        </>
    )
}

export default App;