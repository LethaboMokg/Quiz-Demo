import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Loginform from "./Pages/loginform";
import Quiz from "./Pages/Quiz.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}
            
                

                

                

                

                

                

                

                


    

export default App;
