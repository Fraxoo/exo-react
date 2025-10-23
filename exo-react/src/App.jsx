import { useState } from "react"

export default function App(){

    const [nbClick,setNbClick] = useState(0);
    

    
    return (
        <div>
            <p>{nbClick}</p>
            <button onClick={()=> setNbClick(nbClick + 1)}>START</button>
        </div>
    )
}