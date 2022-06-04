import './styles/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className="navbar bg-black p-3">
            <span className=" text-2xl cursor-pointer text-white p-5 mr-5">
                <Link to="/home">IMDB</Link>
            </span>

            <span className="text-blue-400 cursor-pointer ">
                <Link to="/login">Login</Link>
            </span>
        </nav>
    )
}

export default Navbar;
