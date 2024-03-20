//single selection
// multipleg

import { useState } from "react"
import Data from "./Data"
import './styles.css'

export default function Accordian(){
    const [selected,setSelected]=useState(null)
    const [enableMultiSelection,setenableMultiSelection]=useState(false)
    const [multiple,setMultiple]=useState([])
    function handleSingleselection(getCurrentid){
        //console.log(selected)
        setSelected(getCurrentid === selected?null:getCurrentid)
        //console.log(selected)
    }
    function handleMulti(getCurrentid){
        let cpymultiple=[...multiple]
        //console.log(cpymultiple)
        const findindexofCurrentid= cpymultiple.indexOf(getCurrentid)
       // console.log(findindexofCurrentid)
        if(findindexofCurrentid== -1) cpymultiple.push(getCurrentid)
        else cpymultiple.splice(findindexofCurrentid,1)
    setMultiple(cpymultiple)
   // console.log(cpymultiple)
    }
    return <div className="wrapper">
        <h1>Top Skin care tips</h1>
        <button onClick={()=>setenableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
        <div className="accordian">
            {
                Data && Data.length >0 ? 
                Data.map(dataitem=><div className="item">
                    <div className="title" onClick={
                        enableMultiSelection
                        ?()=>handleMulti(dataitem.id)
                        :()=>handleSingleselection(dataitem.id)}>
                        <h3>{dataitem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection?
                        multiple.indexOf(dataitem.id)!==-1 &&
                        <div className="content">{dataitem.answer}</div>:
                        selected == dataitem.id && <div className="content">{dataitem.answer}</div>
                    }
                    
                    </div>                    
                )   
               
               :(
               <div>No data found</div>
           ) }
        </div>
        
     </div>
}