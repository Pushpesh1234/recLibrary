// const h2 = React.createElement(
//   "h2",
//   { className: "subHeading" },
//   "This is the main Heading"
// );

// const root = ReactDOM.CreateRoot(document.querySelector("#root"))
// root.render(h2)
// root.render({
//     $$typeof: Symbol.for("react.element"),
//     ref: null,
//     type: 'h2',
//     props: {
//         children: {
//             $$typeof: Symbol.for("react.element"),
//             ref: null,
//             type: 'span',
//             props: {
//                 children: {
//                     $$typeof: Symbol.for("react.element"),
//                     ref: null,
//                     type: 'b',
//                     props: {
//                         children: "Hello React"

//                     }
//                 }
//             }
//         }
//     }
// })

// root.render({
//     $$typeof: Symbol.for("react.element"),
//     ref: null,
//     type: "h2",
//     props: {
//         children: [{
//             $$typeof: Symbol.for("react.element"),
//             ref: null,
//             type: 'i',
//             props: {
//                 children: {
//                     $$typeof: Symbol.for("react.element"),
//                     ref: null,
//                     type: 'button',
//                     props: {
//                         children:"Button1"

//                     }

//                 }
//             }
//         }, {
//             $$typeof: Symbol.for("react.element"),
//             ref: null,
//             type: 'button',
//             props: {
//                 children: "Button-2"
//             }
//         }, {
//             $$typeof: Symbol.for("react.element"),
//             ref: null,
//             type: 'b',
//             props: {
//                 children: "this is bold"
//             }
//         }, {
//             $$typeof: Symbol.for("react.element"),
//             ref: null,
//             type: 'span',
//             props: {
//                 children: "this is span"
//             }
//         }]

//     }
// })

// const root=document.querySelector("#root").append(h2)
// console.log(root)
// console.dir(root)
// console.dir(h2)

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// console.log(root)
// const container = React.createElement(
//   "div",
//   { className: "container", id: "box-2" },

//     React.createElement("section", { className: "sections", id: "section-1"},
//       React.createElement(
//         "p",
//         { className: "paraTag", id: "para-2" },
//         "this is a text of warning for overeating"
//       )

// ))

//  const div= React.createElement("div", { className: "container", id: "div-1"},
//      [React.createElement("div",{},[React.createElement('p',{},)])
//      ,
//  [React.createElement('div',{},"hello2")],
//  React.createElement("div",{},"hello3")

// )

// fitting an image tag in previous codes

// const div = React.createElement(
//   "div",
//   {},
//   // React.createElement("section", { style: {} }, [
//   // React.createElement("p", { key: 1 }, "this is a paragraph elment"),
//   // React.createElement("img", {
//   //   src: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
//   //   style: { width: "150px", height: "100px", borderRadius: "9px", backgroundColor:"black"},
//   //   key: 2,
//   // }),
//   // ]),
//   React.createElement(
//     "section",
//     {},
//     React.createElement("form", {}, 
//       //#1

//       React.createElement("div", { className: "Input-group" }, 
//         React.createElement(
//           "label",
//           {  htmlFor: "username" },
//           "Username:"
//         ),  
//         React.createElement("input", {
          
//           placeholder:"John Doe",
//           id: "username",
//           type: "text",
//           style: {},
//         })   
//       ), 
//          //#2

//       React.createElement("div", { className: "Input-group" }, 
//         React.createElement("label", { key: 3 ,htmlFor:"email"}, "Email:"),
//         React.createElement("input", {
//           type: "text",
//            id:"email" ,
//            placeholder:"John@gamil.com" ,
//           style: {},
//         })
//       ),
//             //#3

//       React.createElement("div", { className: "Input-group" }, 
//         React.createElement("label", { htmlFor:"password" }, "Password:"),
//         React.createElement("input", {id:"password", autofocus:"true",placeholder:"*********", type: "password", style: {} })
//       ),
//             //#4

//       React.createElement(
//         "div",
//         { className: "Input-group" },
//         React.createElement("button", { value: "Submit" }, "Submit")
//       )


//     )
//   )
// );

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(div);
