import {Link} from 'react-router-dom';

function PageNotFound(){
    return(
        <div class="px-40 py-20 bg-white rounded-md shadow-xl mt-28">
                <div class="flex flex-col items-center">
                <h1 class="font-bold text-blue-600 text-9xl mb-10">404</h1>

                <h6 class="mb-6 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                    <span class="text-red-500">Oops!</span> Page not found
                </h6>

                <p class="mb-8 text-center text-gray-500 md:text-lg">
                    The page you’re looking for doesn’t exist.
                </p>

                <a href="#" class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100" >
                <Link to='/home'> Go home  </Link>
                </a>
            </div>
            </div>
    )
}

export default PageNotFound;