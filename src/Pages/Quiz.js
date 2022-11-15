import "./Quiz.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function Quiz() {
	const questions = [
		{
			questionText: 'Who can help you make sure that your financial affairs are in order when you die?',
			answerOptions: [
				{ answerText: 'Budget', isCorrect: false },
				{ answerText: 'Estate Planning', isCorrect: false },
				{ answerText: 'Financial Advisor', isCorrect: true },
				{ answerText: 'Wealth Management', isCorrect: false },
			],
		},
		{
			questionText: 'Preparing ourselves for that time when we no longer want to work',
			answerOptions: [
				{ answerText: 'Risk Management', isCorrect: false },
				{ answerText: 'Retirement Planning', isCorrect: true },
				{ answerText: 'Estate Planning', isCorrect: false },
				{ answerText: 'Wealth Manangement', isCorrect: false },
			],
		},
		{
			questionText: 'The things that you own',
			answerOptions: [
				{ answerText: 'Assets', isCorrect: true },
				{ answerText: 'Budget', isCorrect: false },
				{ answerText: 'Gold', isCorrect: false },
				{ answerText: 'Investments', isCorrect: false },
			],
		},
		{
			questionText: 'Put your money to work for you',
			answerOptions: [
				{ answerText: 'Gold', isCorrect: false },
				{ answerText: 'Budget', isCorrect: false },
				{ answerText: 'Financial Plan', isCorrect: false },
				{ answerText: 'Investments', isCorrect: true },
			],
		},
        {
			questionText: 'An individual that advices clients on investment matters',
			answerOptions: [
				{ answerText: 'Banker', isCorrect: false },
				{ answerText: 'Insurance Agent', isCorrect: false },
				{ answerText: 'Investment Advisor', isCorrect: false },
				{ answerText: 'Financial Advisor', isCorrect: true },
			],
		},
        {
			questionText: 'A detailed plan of income and expenses expected over a certain period of time',
			answerOptions: [
				{ answerText: 'Budget', isCorrect: false },
				{ answerText: 'Financial Plan', isCorrect: true},
				{ answerText: 'Taxonomy', isCorrect: false },
				{ answerText: 'Investments', isCorrect: false },
			],
		},
        {
			questionText: 'Who is the person that analyzes clients overall financial situations?',
			answerOptions: [
				{ answerText: 'Insurance Agent', isCorrect: false },
				{ answerText: 'Budget Analyst', isCorrect: false },
				{ answerText: 'Wealth Manager', isCorrect: false },
				{ answerText: 'Financial Planner', isCorrect: true },
			],
		},
        {
			questionText: 'The financial planning process consist of ___ steps',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: true },
				{ answerText: '7', isCorrect: false },
			],
		},
        {
			questionText: 'A list of assets and liabilities at a specific point of time',
			answerOptions: [
				{ answerText: 'Balance Sheet', isCorrect: true },
				{ answerText: 'Cash Flow', isCorrect: false },
				{ answerText: 'CPJ/CRJ', isCorrect: false },
				{ answerText: 'Petty Cash', isCorrect: false },
			],
		},
        {
			questionText: 'Where can financial advisors store data?',
			answerOptions: [
				{ answerText: 'Word', isCorrect: false },
				{ answerText: 'Database', isCorrect: true },
				{ answerText: 'Excel', isCorrect: false },
				{ answerText: 'PowerPoint', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    const navigate = useNavigate();

	return (
        <><div className='app_'>

            {showScore ? (
                <div className='score-section'>
                    {<br />}
                    {<br />}
                    You scored {score} out of {questions.length}
                    {<br />}
                    {<br />}

                    You have completed the Quiz
                    {<br />}
                    {<br />}



                </div>

            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button className="answer_" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
            
        </div><button className="answered" onClick={() => {navigate("/");}}>Submit the Quiz</button></>
        
	);
}
export default Quiz;