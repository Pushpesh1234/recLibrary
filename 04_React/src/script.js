// import  anon,{user} from './data'
import React from 'react' // optional
import {createRoot} from 'react-dom/client' // compulasory


// anon()
console.log(React)
// console.log(user.userName)

if(module.hot){           // code to add for hot module Replacement
    module.hot.accept()
}

const h1=<h1>Welcome to React with bundler!!!</h1>
const root =createRoot(document.querySelector("#root"))
root.render(h1)
console.log("hello")
