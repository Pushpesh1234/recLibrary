import {createRoot} from "react-dom/client";
import React from "react";
import "./style.css";
import App from '../App.js'
import './style.css'
const root=createRoot(document.querySelector('#root'))

// function box(){
//     (
//         <div>
//             <h2></h2>
//             <p></p>
//             <img></img>
//         </div>
//     )
// }


root.render(<App/>)