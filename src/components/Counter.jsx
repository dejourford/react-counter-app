import React from "react"
import { useState } from "react"
import "./counter.css"



export default function Counter() {
    const [count, setCount] = React.useState(0)

    const add = () => {
        console.log('add')
        setCount(count + 1)
        
    }

    const subtract = () => {
        console.log('minus')
        setCount(count - 1)
    }
    
    

    return (
        <div className="counter">
            
            <div className="counter-buttons">
                <h1>{count}</h1>
                <button className="plus-Btn" onClick={add}>+</button>
                <button className="minus-Btn" onClick={subtract}>-</button>
            </div>
        </div>
    )
}