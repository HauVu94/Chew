import { HomePage } from './pages/HomePage';
import { MyFridge } from './pages/MyFridge';
import { LoginPage } from './pages/LoginPage';
import { RecipePage } from './pages/RecipePage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginTPP } from './pages/LoginTPP';
import { LoginTeacher } from './pages/LoginTeacher';
import { LoginPupil } from './pages/LoginPupil';
import './styles/App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterPage } from './pages/RegisterPage';
import IngredientSearch from './components/SearchComponents/IngredientSearch';
import IngredientSearchPage from './pages/IngredientSearchPage';
import { ShoppingListPage } from './pages/ShoppingListPage';


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
            <Route path="/LoginTPP" element={ <LoginTPP/> }></Route>
            <Route path="/LoginPupil" element={ <LoginPupil/> }></Route>
            <Route path="/LoginTeacher" element={ <LoginTeacher/> }></Route>
            <Route path="/ProfilePage" element={ <ProfilePage/> }></Route>
            <Route path="/ShoppingListPage" element={ <ShoppingListPage/> }></Route>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
