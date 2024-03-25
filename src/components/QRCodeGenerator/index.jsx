import { useState } from "react"
import QRCode from "react-qr-code"
import "./style.css";

export default function QRCodeGenertator(){
    const [qrcode,setqrcode]=useState("")
    const [input,setinput]=useState("")
    function handleGenerateqrCode(){
        setqrcode(input)
        setinput('')
    }
    return(
        <div className="maindiv">
            <h1>QR code generator</h1>
            <div>
                <input
                    onChange={(e)=>setinput(e.target.value)}
                    type="text" 
                    name="qrcode"
                    value={input}
                    placeholder="enter your value"
                    />
                <button 
                    disabled={input && input.trim() !==" "?false:true} 
                    onClick={handleGenerateqrCode}>
                    Generate</button>
            </div>
            <div>
                <QRCode
                id="qrcodevalue"
                value={qrcode} size={400} bgColor="white"/>
            </div>
        </div>
    )
}