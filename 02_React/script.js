const h2=<h2>Hello React</h2>
console.log(h2)
// const root= ReactDOM.createRoot(document.querySelector('#root'))
// root.render(h2)

// const container=
// <form>
// <div>
// <label htmlFor="username">Username</label>
// <input type="text" id="username"></input>
// </div>

// <div>
// <label htmlFor="emailId">EmailID</label>
// <input type="email" id="emailId"></input>
// </div>

// <div>
// <label htmlFor="password">Password</label>
// <input type="password" id="password"></input>
// </div>

// <button>Submit</button>
// </form>


const first="Pushpesh";
const last="Rawat"
const h1=<h1>My name is {first} {last} <b>there</b></h1>
const root=ReactDOM.createRoot(document.querySelector('#root'))
root.render(h1)