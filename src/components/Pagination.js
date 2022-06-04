import './styles/Pagination.css'

function Pagination(props){
    let numberOfItemsPerPage = props.numberOfItemsPerPage;
    let contentFromAPI = props.contentFromAPI;
    let updateCurrentPageCall = props.updateCurrentPage;
    let currentPage = props.currentPage;

    const updateCurrentPage = function(page){
        updateCurrentPageCall(page);
    }

    numberOfItemsPerPage= numberOfItemsPerPage=="" ? contentFromAPI.length : numberOfItemsPerPage;
    if(numberOfItemsPerPage == contentFromAPI.length){
        updateCurrentPage(1);
    }
    // console.log("Number of Items:"+ numberOfItemsPerPage);
    // console.log("--------------------------")
    let pages = (contentFromAPI.length/numberOfItemsPerPage);
    pages = Math.ceil(pages);


    let pagesArr = [];
    if(pages >= 1){
        for(let i=1; i<=pages; i++){
            pagesArr.push(i);
        }
    }

    return(
        <div>
            {(numberOfItemsPerPage == "" && pages=="Infinity") 

            ? 
            <button className=" pagination hover:bg-blue-400 border-r outline-1	text-black hover:text-white  py-2 px-4 " key={1} >1</button>

            :
            <div className="pagination">
                {pagesArr.map(function(pageNo,i){
                    let css = (pageNo == currentPage)?
                    "hover:bg-blue-500 border-r page outline-1 text-white hover:text-red   bg-blue-600 py-2 px-4 "
                    :
                    "hover:bg-blue-500 border-r page outline-1 text-black hover:text-white  py-2 px-4 "

                    return <button className={css} onClick={(e)=>{
                        updateCurrentPage(pageNo);
                    }} key={pageNo}>{pageNo}</button>
                })
                }
            </div>
            }
        </div>
    )
}

export default Pagination;
                // <button className="bg-blue-500 hover:bg-blue-700 border-r text-white font-bold py-2 px-4 ">1</button>
                // <button className="hover:bg-blue-400 border-r outline-1	text-black hover:text-white  py-2 px-4 ">3</button>
                // <button className="hover:bg-blue-400 border-r outline-1	text-black hover:text-white  py-2 px-4 ">4</button>