import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

export default function Rating({noofstars=5}){
    const[rating,setrating]=useState(0);
    const[hover,setHover]=useState(0);

    function handleClick(getCurrentIndex){
        //console.log(getCurrentIndex)
        setrating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex){
        //console.log(getCurrentIndex)
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex){
        //console.log(getCurrentIndex)
        setHover(rating)
    }

    return(<div className="star-rating">
        {
          [...Array(noofstars)].map((_,index)=>{
            index+=1
           
           return<FaStar
           key={index}
           className={index <= (hover || rating)?'active':'inactive'}
           size={40}
           onClick={()=>handleClick(index)}
           onMouseMove={()=>handleMouseEnter(index)}
           onMouseLeave={()=>handleMouseLeave()}/>
          
        })}
    </div>
    )
}