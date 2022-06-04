import React from 'react'
import './styles/InputBox.css'
import {Link} from 'react-router-dom'

function InputBox(props){


    let [searchText,setSearchText] = React.useState("");
    let [numberOfItems, setNumberItems] = React.useState("");

    let parentSearchTextFunction = props.updateSearchText;
    let parentNumberOfItemsFunction = props.updateNumberOfItems;

    const handleSearchText = function(e){
        setSearchText(e.target.value);
        parentSearchTextFunction(e.target.value);
    }

    const handleNumberOfItems = function(e){
        setNumberItems(e.target.value);
        console.log("From Inputbox Items:"+e.target.value); 
        console.log("-------------------------------------");
        parentNumberOfItemsFunction(e.target.value);
    }

    return(
        <div className="input-box">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded">
                <Link to="/new">New </Link> 
            </button>
            <input type="text" placeholder='Search...' value={searchText} onChange={handleSearchText} className=" mx-3 shadow appearance-none border border-black rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 " />
            <input type="number" placeholder='Number of items...' value={numberOfItems} onChange={handleNumberOfItems} className=" mx-3 shadow appearance-none border border-black rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48" />
        </div>
    )
}

export default InputBox