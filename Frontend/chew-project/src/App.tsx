import { HomePage } from './pages/HomePage';
import { MyFridge } from './pages/MyFridge';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/App.css';
import { RecipePage } from './pages/RecipePage';

function App() {
  return (
    <div className="App">
      <Router> 
          <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="/RecipePage" element={ <RecipePage/> }></Route>
            <Route path="/MyFrigde" element={ <MyFridge/> }></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
