import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter}  from 'react-router-dom';
import App from './App.js'


ReactDOM.render(

<BrowserRouter>
<App/>
</BrowserRouter>
,
document.querySelector("#root"));


// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// )
