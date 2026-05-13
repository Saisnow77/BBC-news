import React from "react";
import { useLocation } from "react-router-dom";
export default function Nav(){
    let sai=useLocation();
    console.log(sai)
    return(

        <div>
            <h1>NAv bar</h1>
        </div>
    )
}