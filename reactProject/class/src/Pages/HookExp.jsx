
import { useState } from "react";


export default function HookExp(){

    const [name, setName] = useState('');
    console.log(name);
    const handleClick = ()=>{
        let inputName = document.getElementById('name').value;
        //console.log(inputName)
        setName(inputName);
    }
        return(
        <main className="main">
            <label htmlFor="name">NAME</label> <br />
            <input type="text" id="name" /><br /><br />
            <button onClick={handleClick}>Set myname</button>

            <p>This is your input name.</p>
            <p>{name}</p>
        </main>
    )
}