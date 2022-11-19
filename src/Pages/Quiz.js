import "./Quiz.css"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, child, DataSnapshot } from "firebase/database";
import usePromise from "react-promise";


let form = {}
let quizAnswers = {}
let userName = ""
let score = 0;


function handleChange(e) {
	const { id, value } = e.target

	form[id] = value;
}

function saveUserData() {
	const uid = getAuth().currentUser.uid;
	const db = getDatabase()
	set(
		ref(db, `QuizData/${uid}/answers/`),
		quizAnswers
	);
	set(
		ref(db, `QuizData/${uid}/quizScore/`),
		{
			"score": score
		}
	);

	set(
		ref(db, `Users/${uid}/`),
		{
			"name": userName
		}
	);

}

window.addEventListener("change ", () => {



})

function Quiz() {

	let currentQuiz = 0;

	// console.log(getAuth().currentUser.uid)""

	let currentQuestion = "Current questions"
	// const uid = getAuth().currentUser.uid;


	const dbRef = ref(getDatabase())


	const [error, setError] = useState(false)
	const [state, setState] = useState('');
	const [score, setScore] = useState('');


	useEffect(() => {
		setState("loading")
		get(child(dbRef, `QuizData/9Y8uVMeU2EYZN82pZoaeTnoVcRF3/quizScore/`))
			.then((snapshot) => {
				if (snapshot.val() !== null) {
					setState('user exists')
					setScore(snapshot.val().score)
				} else {
					setState('success');
				}
			})
			.catch((err) => {
				console.error('Error:', err);
				setState('error');
				setError(err);
			})
	}, []);


	if (state === "error") {
		return (<p>Error</p>);
	} else {
		if (state === 'user exists') {
			return (<p>You already completed a quiz, your previous score was {score}</p>);
		} else {
			const questionQuiz = [
				{
					question: "How do you ensure that your financial affairs are in order should you pass?",
					a: "Budget",
					b: "Estate Planning",
					c: "Financial advisor",
					d: "Wealth management",
					correct: "a",
				},

				{

					question: "How do we prepare ourselves for a time when we can no longer work?",
					a: "Risk management",
					b: "Retirement plan",
					c: "Estate Planning",
					d: "Wealth management",
					correct: "b",

				},


			];

			const currentQuizData = questionQuiz[0]

			currentQuestion = currentQuizData.question
			let a_text = currentQuizData.a
			const b_text = currentQuizData.b
			const c_text = currentQuizData.c
			const d_text = currentQuizData.d

			function loadQuiz(question) {

				const currentQuizData = questionQuiz[currentQuiz]
				const a_text = document.getElementById('a_text')
				const b_text = document.getElementById('b_text')
				const c_text = document.getElementById('c_text')
				const d_text = document.getElementById('d_text')



				question.innerText = currentQuizData['question']

				a_text.innerText = currentQuizData.a
				b_text.innerText = currentQuizData.b
				c_text.innerText = currentQuizData.c
				d_text.innerText = currentQuizData.d


			}

			function deselectAnswers(answers) {
				answers.forEach(answers => answers.checked = false)
			}

			function getSelected(answers) {
				let answer
				answers.forEach(answers => {
					if (answers.checked) {
						answer = answers.id
					}
				})
				return answer
			}

			function event(e) {

				e.preventDefault();
				const answers = document.querySelectorAll('.answer')
				const questionS = document.getElementById('question')
				const quiz = document.getElementById('quiz')
				const userNameElemnt = document.getElementById('name')

				userNameElemnt.hidden = true;

				if (currentQuiz === 0) {
					userName = userNameElemnt.innerText
				}


				const answer = getSelected(answers)
				if (answer) {
					quizAnswers[questionS.innerText] = answer
					console.log(quizAnswers)
					if (answer === questionQuiz[currentQuiz].correct) {
						score++
					}
					currentQuiz++
					if (currentQuiz < questionQuiz.length) {
						loadQuiz(questionS)
					} else {
						saveUserData();
						quiz.innerHTML = `
					<h2>You answerd ${score} /${questionQuiz.length} questions correctly!</h2>`

					}

				}

				deselectAnswers(answers)

			}


			return (
				<div class="container" >
					<div class="main-content" id="quiz">
						<h1>Quiz</h1>
						<input type="text" placeholder="Please enter your name" id="name"></input>
						<p id="question">{currentQuestion}</p>
						<form action="" onSubmit={event}>
							<ul>
								<li>
									<input type="radio" name="answer" id="a" class="answer" required onChange={handleChange}></input>
									<label htmlFor="a" id="a_text">{a_text}</label>
								</li>

								<li>
									<input type="radio" name="answer" id="b" class="answer" required onChange={handleChange}></input>
									<label htmlFor="b" id="b_text">{b_text}</label>
								</li>

								<li>
									<input type="radio" name="answer" id="c" class="answer" required onChange={handleChange}></input>
									<label htmlFor="c" id="c_text">{c_text}</label>
								</li>

								<li>
									<input type="radio" name="answer" id="d" class="answer" required onChange={handleChange}></input>
									<label htmlFor="d" id="d_text">{d_text}</label>
								</li>

							</ul>
							<button id="submit" >Submit</button>
						</form>
					</div>
				</div>
			);
		}
	}

}


export default Quiz;

