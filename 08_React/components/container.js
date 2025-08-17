import Button from "./Button.js"
import Apple from './Apple.js'
import LeftArrow from 'url:../assets/images/left-arrow.png'
import RightArrow from 'url:../assets/images/right-arrow.png'

export default function Basket(){
// return <div className="basket">
//     <div className="reuseComp1">
//     {one}
//     {two}
//     </div>
//     <div className="reuseComp2">
//     {three}
//     {four}
//     </div>
// </div>

return(
<div className="basket">
<div className="reuseComp1" ><Apple apple="Basket-1 Apple" num="10" />
<Button imageURL={LeftArrow}/>
</div>
<div className="reuseComp2">
    <Button imageURL={RightArrow}/>
<Apple apple="Basket-2 Apple" num="0"/>
</div>

</div>)
}

