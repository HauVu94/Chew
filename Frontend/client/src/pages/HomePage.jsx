import Navbar from '../components/NavigationComponents/Navbar';
import Sidetabs from '../components/Sidetabs';
import MainMenu from '../components/MainMenu';
import SchoolPrivate from '../components/SchoolPrivate';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
            console.log(data[0].username)
          setUser(data[0].username);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar avatarSrc={require("../../public/images/profile.png")} />
      <Sidetabs />
      <MainMenu />
      <SchoolPrivate />
      {user ? <h1>{user}</h1> : <h1>Not logged in</h1>}

      <div className='footer'>
        <Link to="/ProfilePage">Profile Page</Link> |
        | <Link to="/LoginPage">Logg inn</Link> |
        | <Link to="/IngredientSearchPage">Ingredient Search</Link>
      </div>
    </>
  );
}
