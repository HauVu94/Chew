import { HomePage } from './pages/HomePage';
import { MyFridge } from './pages/MyFridge';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router> 
          <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="/MyFridge" element={ <MyFridge/> }></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
