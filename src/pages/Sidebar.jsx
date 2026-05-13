import React from "react";
import { Link } from "react-router-dom";
export default function App(){
    let name="Sai Chandra"
    return(
        <div>
            <h1>Sidebar</h1>
            <Link to ="/n"  state={{name}}> NAv bar
         </Link>        </div>
    )
}