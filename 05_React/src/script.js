  import {createRoot} from 'react-dom/client'
  import  "./style.css"
//   const h=<h1>Render Multiples Element in React!!!</h1>
//   const card=
//   <div className='card'>
//   <img src="https://www.capesindia.com/cdn/shop/files/iphone-13-case_c55c48ab-5ad2-4093-bc73-fa213e6f9d8d.png?v=1748351126&width=2048"></img>
// <div>
//    <h3>I-Phone 13</h3>
//   <p>$1,299.99</p>
// </div>
//   </div>
 
//  console.log(card)
//  function Card(id,title,image,price,brand){
//   return(
//   <div className='card' key={id}>
//   <img src={image}></img>
// <div>
//   <h2>{brand}</h2>
//    <h3>{title}</h3>
//   <p> ${price}</p>
// </div>
//   </div>
//   )
//  }
 const root=createRoot(document.querySelector("#root"))
  // const container=<div className='cards' >{[Card(1),Card(2),Card(3),Card(4),Card(5)]}</div>
  fetch("https://dummyjson.com/products")
  .then(response=>{ 
    // console.log(response.json())
    return response.json()
  })
   .then((data)=>{
    console.log(data)
    // data.products.map((val)=>{
//       return Card(val.id,val.title,val.images,val.price,val.brand)})
//       return (
//   <div className='card' key={val.id}>
//   <img src={val.thumbnail}></img>
// <div>
//   <h2>{val.brand}</h2>
//    <h3>{val.title}</h3>
//   <p> ${val.price}</p>
// </div>
//   </div>
//   )
    root.render(<div className='container'>
     {data.products.map((val)=>{
      return (<div className='card' key={val.id}>
  <img src={val.thumbnail}></img>
<div>
  <h2>{val.brand}</h2>
   <h3>{val.title}</h3>
  <p> ${val.price}</p>
</div>
  </div>)
     })}
       
  </div>)

 console.log(products)
     })
   

//   const root=createRoot(document.querySelector("#root"))
// root.render(container)

// const promise=new Promise((resolve,reject)=>{
//   const value=true;
//   if(value){

//   setTimeout(() =>{
//     resolve("Promise Resolved")
//   },1000)
//   }
//    else{
//     reject("promis rejected")
//    }
// }
// )

// promise.then((data)=>{
//   return data.json()
// }).then((data)=>{
//   console.log(data)
// })