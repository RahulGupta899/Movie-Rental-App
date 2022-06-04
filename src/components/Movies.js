import './styles/Movies.css'
import InputBox from './InputBox.js'
import MoviesTable from './MoviesTable.js'
import Pagination from './Pagination.js'
import React from 'react'

function Movies(props){

    let [searchText,setSearchText] = React.useState("");
    let [contentFromAPI,setContentFromAPI] = React.useState([]);
    let [isLoaded,setLoaded] = React.useState(false); // Initially not loaded
    let [currentPage,setCurrentPage] = React.useState(1);
    let genreName = props.genreName;
    let setGenreNameDefault = props.setGenreNameDefault;
    let numberOfItems = props.numberOfItems;
    let updateNumberOfItemsCall = props.updateNumberOfItems;

    React.useEffect(function(){
        (
            async function(){
                let res = await fetch('https://react-backend101.herokuapp.com/movies');
                res =  await res.json();
                
                setContentFromAPI(res.movies);
                setLoaded(true);
            }
        )(); // IFFEE CALL - if Await is used
    },[])


    console.log("Movies: "+genreName);
    const updateSearchText = function(text){
        setSearchText(text);
        updateNumberOfItemsCall(contentFromAPI.length);
        console.log("From Movies Items:"+contentFromAPI.length); 
        console.log("-------------------------------------");
    }

    const updateNumberOfItems = function(num){
        updateNumberOfItemsCall(Number(num));
        console.log("From Movies Items:"+num); 
        console.log("-------------------------------------");
    }

    const UpdateContentAfterDelete = function(updatedContent){
        setContentFromAPI(updatedContent);
    }

    const updateCurrentPage = function(page){
        setCurrentPage(page);
    }

    return(
        <div className="movies">
            <InputBox updateSearchText={updateSearchText} updateNumberOfItems={updateNumberOfItems}/>
            <MoviesTable searchText={searchText} numberOfItems={numberOfItems} updateNumberOfItems={updateNumberOfItems} isLoaded={isLoaded} 
            setGenreNameDefault={setGenreNameDefault}  currentPage={currentPage} contentFromAPI ={contentFromAPI} setContentFromAPIParentCall={UpdateContentAfterDelete} genreName={genreName}/>
            <Pagination currentPage={currentPage} numberOfItemsPerPage={numberOfItems}  contentFromAPI={contentFromAPI} updateCurrentPage={updateCurrentPage}/>
        </div>
    )
}

export default Movies;