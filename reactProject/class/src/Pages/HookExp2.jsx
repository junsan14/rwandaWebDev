
import { useState } from "react";


export default function HookExp2(){

    const [count, setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count+1);
    }
    return(
        <main>
            <h2>This is written in React js</h2>
            <button onClick={handleClick}>Click me</button>
            <p>You clicked me {count} times</p>
        </main>
        
        
    )
    
    
}