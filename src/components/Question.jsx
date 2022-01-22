export default function Question({question, showQuestion, setShowQuestion}){

    const toggleQuestion = () => {
        setShowQuestion(prevShowQuestion => !prevShowQuestion);
    }

    return(
        <div>
            <div className="inline"><h2 className="yellowText">Category: </h2><h3>{question.category}</h3></div>
            <div className="inline"><h2 className="yellowText">Points: </h2><h3>{question.value}</h3></div>
            <div className="inline"><h2 className="yellowText">Answer: </h2><h3>{question.question}</h3></div>
            <button onClick={toggleQuestion} className="showButton">{showQuestion ? "Click to Hide Question" : "Click to Reveal Question"}</button>
            {showQuestion && <div className="inline"><h2 className="yellowText">Question: </h2><h3>{question.answer}</h3></div>}
        </div>
    )
}