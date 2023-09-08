import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const hanldeAdd = ()=>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = ()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={hanldeAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )

}