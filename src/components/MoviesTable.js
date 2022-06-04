import React from 'react';
import './styles/MoviesTable.css';


function MoviesTable(props){
    
    let contentFromAPI = props.contentFromAPI;
    let isLoaded = props.isLoaded;
    let searchText = props.searchText.toLowerCase();
    let numberOfItems = props.numberOfItems;
    let updateNumberOfItemsCall = props.updateNumberOfItems;
    let genreName = props.genreName;
    let setGenreNameDefaultCall = props.setGenreNameDefault;
    let currentPage = props.currentPage;
    console.log("MoviesTable");
    console.log("--------------------");
    console.log("current Page:" +currentPage);
    console.log("Number of Items: "+numberOfItems);
    console.log("--------------------");


    const setContentFromAPIParent = function(updatedContent){
      props.setContentFromAPIParentCall(updatedContent);
    }

    const updateNumberOfItems = function(items){
      updateNumberOfItemsCall(items);
    }

    genreName = genreName.trim();
    searchText = searchText.trim();
    numberOfItems= (numberOfItems=="" || numberOfItems==0) ? contentFromAPI.length : numberOfItems;

    let filteredContent = [...contentFromAPI];
    
    /******* Pagination : Print based on current Page number (part 2) ********/
    if(isLoaded){
      let sidx = (currentPage-1) * numberOfItems;
      let eidx = Number(sidx+numberOfItems);
      filteredContent = (numberOfItems == "") ? filteredContent.slice(0)  : filteredContent.slice(sidx,eidx);
    }
    
    
    // Filter through Genre Name - GROUPING
    console.log("******* "+genreName+" ***********");
    if(genreName!="" && genreName=="All Genre"){
      filteredContent = [...contentFromAPI];
      if(numberOfItems != contentFromAPI.length){
        updateNumberOfItems(contentFromAPI.length);
        setGenreNameDefaultCall();
      }
    }
    else if(genreName!=""){
      filteredContent = filteredContent.filter((movie)=>{
        let genreType = movie.genre.name;
        return (genreType == genreName);
      })
      console.log(filteredContent);
      if(numberOfItems != contentFromAPI.length){
        updateNumberOfItems(contentFromAPI.length);
        setGenreNameDefaultCall();
      }
      
    }

    // Filter Through Title- MATCHING
    if(searchText != ""){
      filteredContent = filteredContent.filter(function(movie){
        let title = movie.title.trim().toLowerCase();
        console.log("Input: "+searchText+ "API: "+title);
        return title.includes(searchText);
      });
      console.log(filteredContent);
    }

    // Filter through Number of Items to Print - PAGINATION part 1

    filteredContent = filteredContent.slice(0,numberOfItems); 


    /***** DELETE MOVIE ********/
    const deleteMovie = function(movieId){
      let updatedContent = [...contentFromAPI];
      updatedContent = updatedContent.filter((movie)=>{
        return movie._id != movieId;
      })
      console.log(updatedContent);
      setContentFromAPIParent(updatedContent);
    }    

    console.log(filteredContent);
    
    
    return (
        <div className='movies-table'>
            {isLoaded==false? <h1>Loading...</h1>: <table className="w-full  text-center text-gray-500 dark:text-gray-400">

                <thead  className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th  className="px-6 py-3">#</th>
                    <th  className="px-6 py-3">Title</th>
                    <th  className="px-6 py-3">Stock</th>
                    <th  className="px-6 py-3">Rate  $</th>
                  </tr>
                </thead>
                  
                <tbody>

                  {
                    filteredContent.map(function(item,idx){
                      return(
                        <tr key={item._id} className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
                          <td>{idx+1}</td>
                          <td>{item.title}</td>
                          <td>{item.numberInStock}</td>
                          <td>{item.dailyRentalRate}</td>
                          <td><button className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 py-2 px-4 rounded" 
                              onClick={function(){
                                deleteMovie(item._id);
                              }}>Delete</button></td>
                        </tr>
                      )
                    })
                  }

                </tbody>

            </table>
            }
        </div>
    )
}

export default MoviesTable
                  