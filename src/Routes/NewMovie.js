import React from 'react';
import {Link} from 'react-router-dom';


function NewMovie(){
    let [tName,setTitleName] = React.useState("");
    let [stock,setStock] = React.useState("");
    let [rate,setRate]   = React.useState("");

    const updateTitleName = function(e){
        setTitleName(e.target.value);
    }
    const updateStock = function(e){
        setStock(e.target.value);
    }
    const updateRate = function(e){
        setRate(e.target.value);
    }

    const addMovie = function(){
    
    }

    return(
        <div>
        <div className=" mt-32 ml-96 w-1/3 p-4 shadow-inner border">
            <input type="text" value={tName}className="mx-auto block px-4 py-2 text-xl font-normal my-4 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full" placeholder="Title Name" onChange={updateTitleName}/>
            <input type="text" value={stock} className="mx-auto block px-4 py-2 text-xl font-normal my-4 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full " placeholder="Stock"  onChange={updateStock}/>
            <input type="text" value={rate} className="mx-auto block px-4 py-2 text-xl font-normal my-4 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full" placeholder="Rate" onChange={updateRate}/>
            <button className="mx-auto block px-7 py-3 bg-blue-600 text-white my-2 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" onClick={addMovie}>
                <Link to="/fjkfd">Submit</Link>
            </button>
        </div>   
        </div> 
    )
}

export default NewMovie;