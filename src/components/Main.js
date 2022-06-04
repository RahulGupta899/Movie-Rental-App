import './styles/Main.css'
import Genre from './Genre.js'
import Movies from './Movies.js'
import React from 'react'

function Main(){
    let [genreName,setGenreName] = React.useState("");
    let [numberOfItems, setNumberOfItems] = React.useState("");

    const getGenreName = function(e){
        setGenreName(e.target.innerHTML);
    }

    const updateNumberOfItems = function(items){
        setNumberOfItems(items);
        console.log("From Main Items:"+items); 
        console.log("-------------------------------------");
    }

    const setGenreNameDefault = function(){
        setGenreName("");
        console.log("Genre Name Default");
    }

    return(
        <div className="main">
            <Genre getGenreName={getGenreName}/>
            <Movies genreName={genreName} setGenreNameDefault={setGenreNameDefault} numberOfItems={numberOfItems} updateNumberOfItems={updateNumberOfItems}/>
        </div>
    )
}

export default Main;