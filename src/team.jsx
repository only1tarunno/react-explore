import { useState } from "react"

export default function Team(){
    const [count, setCount] = useState(0);

    function handleAdd(){
        const newCount = count + 1;
        setCount(newCount);
    }
    return (
        <div>
            <h3>player: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}