

export default function StateExp(){

    let count = 0;
    const handleClick = ()=>{
        count = count + 1;
        console.log(count);
    }

    return(
        <main>
            <h2>This is written in JavaScript Native</h2>
             <button onClick={handleClick}>Click me</button>
             <p>You clicked me {count} times</p>
        </main>
    )
}