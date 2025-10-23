import { use, useState } from "react"

export default function App() {
    

    
    const[date,setDate] = useState(new Date())



    setTimeout(() => {
            setDate(new Date())
        
    }, 1000)
    

    


    return (
        <div>
            <p>{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</p>
        </div>
    )
}