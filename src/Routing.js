
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom'



// Components for different ROUTES
//--------------------------------

function HomePage(){
    return (
        <div>Homepage</div>
    )
}

function HomeDashBoard(){
    return (
        <div>HomeDashBoard</div>
    )
}


// MAIN
//------------------------------

function Routing(){

    return (
        <>
            <h1>Routing Examples</h1>
            <Switch>
                <Route path="/home" exact>
                    <HomePage/>
                </Route>

                <Route path="/home/dashboard">
                    <HomeDashBoard/>
                </Route>
                <Redirect from="/" to="/home">

                </Redirect>

                
                <Route>
                    <h1> This is default it will always run</h1> 
                </Route>

                
            </Switch>
            
        </>
    )
}

export default Routing;


            
