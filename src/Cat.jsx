import { useState,useEffect } from "react"
function Cat()
{
    let [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Value updated");
        //code cleanup
        return (()=>{
            console.log("code updated");
        })

    },[count])
    let[name,setName]=useState("harshini");
    return (
        <div>
            
            <button onClick={()=>setCount(count+1)}>++</button>
            <h1>count:{count}</h1>
            <button onClick={()=>setCount(count-1)}>--</button>
            <br/>
            <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Type a name" 
      />
            
            <h1>name:{name}</h1>

        </div>
        
    )
}
export default Cat