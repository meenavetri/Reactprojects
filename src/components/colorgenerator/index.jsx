import { useEffect, useState } from "react"
export default function RandomColor(){
    const [typeofcolor,setTypeodcolor]=useState('hex')
    const [color,setcolor]=useState('#000000')
    function randomColorUtility(length){
        return  Math.floor(Math.random()*length)  
    }
    function handleRandomHexcolor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexcolor="#"
        for (let i=0;i<6;i++){
            
            hexcolor += hex[randomColorUtility(hex.length)]
            
        }
        setcolor(hexcolor);
    }
    function handleRandomrgbColor(){
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setcolor(`rgb(${r},${g},${b})`)
    }
    useEffect(()=>{
        if(typeofcolor==='rgb')handleRandomrgbColor()
        else handleRandomHexcolor()
    },typeofcolor)
    return(
    <div style={{
            width:"100vw", 
            height:"100vh",
            background:color
        }}>
            <button onClick={()=>setTypeodcolor('hex')}>create hex color</button>
            <button onClick={()=>setTypeodcolor('rgb')}>create rgb color</button>
            <button onClick={typeofcolor === 'hex'?handleRandomHexcolor: handleRandomrgbColor}>Generate random color</button>
            <div style={{
                display:"flex",
                flexDirection:'column',
                gap:'20px',
                justifyContent:"center",
                alignItems:"center",
                color:"white",
                fontSize:"30px",
                marginTop:"50px"
            }}>
            <h3>{typeofcolor==='rgb'?'RGB color':'hex color'}</h3>
            <h1>{color}</h1>
            </div>
    </div>
    )
}
