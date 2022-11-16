import './App.css';
import React from 'react'
import { Navigate } from "react-router-dom";

function Home (){
  const [goToQuiz, setGoToQuiz] = React.useState(false);

  if (goToQuiz){
    return <Navigate to="/quiz"/>;
  }
  
  return(
    <div className="App">
    
        <img src={require('./images/2.png')}  />
    
      <p><b>Financial success</b> is within your control </p>
      <p>Our financial advisers provide you with sound financial advice you can trust to help you on your personal journey and to make informed decisions about your money - so you can achieve your dreams and goals. Whether you’re moving up the corporate ladder or planning your retirement, Momentum’s certified financial planners can help you get there.</p>
      
      <div className='content'>
        <h1><i>Instructions:</i></h1>
        <p>1. Select only one of the available options.</p>
        <p>2. This quiz is based on the financial succcess.</p>
        <p>3. Answer all questions.</p>
      </div>

      <button className='start' id='submit' onClick={() => {setGoToQuiz(true);}} type='button'>Start financial quiz</button>
      <br/>
      <br/>
    </div>
  );
}

export default Home;