export default function Score({score, handleScore, hasQuestion}){
    return(
        <div>
            <div className="inline">
                <h2 className="yellowText">Score: </h2>
                <h3>{score}</h3>
            </div>
            <div>
                <button disabled={!hasQuestion} onClick={() => handleScore({type: "decrease"})} className="decreaseButton">Decrease</button>
                <button disabled={!hasQuestion} onClick={() => handleScore({type: "increase"})} className="increaseButton">Increase</button>
                <button disabled={!hasQuestion} onClick={() => handleScore({type: "reset"})} className="resetButton">Reset</button>
            </div>
        </div>
    )
}