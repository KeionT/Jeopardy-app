import {useState, useReducer} from "react";
import "./App.css";
import Question from "./src/components/Question";
import Score from "./src/components/Score";

function App() {

	const [question, setQuestion] = useState({
		value: 0,
		category: "",
		question: "",
		answer: "",
	});

	const reducer = (prevScore, action) =>{
		switch (action.type) {
			case 'increase': 
				return prevScore + question.value;
			case 'decrease': 
				return prevScore - question.value;
			case 'reset':
				return 0;	
			default:
				return prevScore;
		}
	}

	const [score, dispatchScore] = useReducer(reducer, 0);
	const [hasQuestion, setHasQuestion] = useState(false);
	const [showQuestion, setShowQuestion] = useState(false);

	const handleGetQuestion = () =>{
		fetch("http://jservice.io/api/random")
			.then((res) => res.json())
			.then((data) => {
        		data=data[0];
				setHasQuestion(true);
				setShowQuestion(false);
				setQuestion({
					value: data.value,
          			category: data.category.title,
          			question: data.question,
          			answer: data.answer,
				});
			})
	}

	return (
    <div className="App">
      <div>
		<h1>Welcome to Jeopardy!</h1>
        <Score score={score} handleScore={dispatchScore} hasQuestion={hasQuestion}/>
		<h2 className="yellowText">Let's Play!</h2>
		<button onClick={handleGetQuestion} className="getButton">Get Question</button>
        {hasQuestion && <Question question={question} showQuestion={showQuestion} setShowQuestion={setShowQuestion}/>}
      </div>
    </div>
  );
}

export default App;
