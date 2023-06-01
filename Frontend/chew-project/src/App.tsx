import { HomePage } from './pages/HomePage';
import { MyFridge } from './pages/MyFridge';
import { LoginPage } from './pages/LoginPage';
import { RecipePage } from './pages/RecipePage';
import { ProfilePage } from './pages/ProfilePage';
import './styles/App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterPage } from './pages/RegisterPage';
import IngredientSearch from './components/SearchComponents/IngredientSearch';
import IngredientSearchPage from './pages/IngredientSearchPage';


function App() {
  return (
    <div className="App">
      <Router> 
          <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="/RecipePage" element={ <RecipePage/> }></Route>
            <Route path="/MyFridge" element={ <MyFridge/> }></Route>
            <Route path="/LoginPage" element={ <LoginPage/> }></Route>
            <Route path="/RegisterPage" element={ <RegisterPage/> }></Route>
            <Route path="/ProfilePage" element={ <ProfilePage/> }></Route>
            <Route path="/IngredientSearchPage" element={ <IngredientSearchPage/> }></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
