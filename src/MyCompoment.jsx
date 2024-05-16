
import React, {useState} from "react"
function MyCompoment (){
        const [count , setCount] = useState(0)

        const decrement = () => {
            setCount(count + 1)
        }
        const increment = () => {
            setCount(count - 1)
        }
        const restart = () => {
            setCount(0)
        }


    return(
    <div className="container" >

            <div className="button-container">

                <p className="count" >{count}</p>

                <button onClick = {decrement} className = "decrement-btn"> decrement</button>

                <button onClick = {restart} className = "restart-btn"> restart</button>

                <button onClick = {increment} className = "increment-btn"> increment</button>

            </div>
    
    </div>
        )
}

export default MyCompoment