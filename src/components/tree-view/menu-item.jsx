import { useState } from "react";
import MenuList from "./menu-list";


export default function Menuitem({item}){
    const [display,setdisplay]=useState({})
    function handletogglechildren(getcurrentlevel){
        setdisplay({
            ...display,
            [getcurrentlevel] : !display[getcurrentlevel],
        })
    }

    return (
        <li>
           <div style={{display:"flex" , gap:"20px"}}>
            <p>{item.label}</p>{
                item && item.children && item.children.length ?(
                <span onClick={()=>handletogglechildren(item.label)}>
                    {
                        display[item.label] ?'-':'+'
                    }
                </span>      
    ): null
            }
           </div>

            {
                item && item.children && item.children.length >0 && display[item.label]
                ? <MenuList list={item.children}/>
                :null
            }
        </li>
    )
}