
import './App.css';
import { HomePage } from './pages/HomePage';
import { MyFrigde } from './pages/MyFrigde';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
          <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="/MyFridge" element={ <MyFrigde/> }></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
