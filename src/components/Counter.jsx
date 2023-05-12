import "./counter.css"

export default function Counter() {
    const handleMinusClick = () => {
        console.log('minus')
    }

    const handlePlusClick = () => {
        console.log('plus')
    }
    
    
    return (
        <div className="counter">
            
            <div className="counter-buttons">
                <h1>0</h1>
                <button className="plus-Btn" onClick={handlePlusClick}>+</button>
                <button className="minus-Btn" onClick={handleMinusClick}>-</button>
            </div>
        </div>
    )
}