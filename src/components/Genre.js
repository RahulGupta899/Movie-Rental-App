import React from 'react'
import './styles/Genre.css'

function Genre(props){
    let [isLoaded,setLoaded] = React.useState(false);
    let [contentFromAPI, setContent] = React.useState([]);

    React.useEffect( function(){
        (async function(){
            let res = await fetch('https://react-backend101.herokuapp.com/genres')
            res = await res.json()
    
            setLoaded(true);
            setContent(res.genres);
        })();
    },[])


    let parentCall = props.getGenreName;
    const sendGenreToParent = function(e){
        parentCall(e);
    }



    return(
        <div className="genre">
            {
                (isLoaded===false)
                ? 
                <h1 className="font-bold uppercase">Loading...</h1> 
                :
                <div>
                    <div className="py-2 bg-gray-300 customBorder font-semibold text-center " onClick={sendGenreToParent} > All Genre </div>
                    {
                        contentFromAPI.map(function(genre,idx){
                            return (
                                 <div className="border-b customBorder py-2 text-center " key={genre._id} onClick={sendGenreToParent}> {genre.name} </div> 
                            )
                        })
                    }
                </div>

            }
        </div>
    )
}

export default Genre;
