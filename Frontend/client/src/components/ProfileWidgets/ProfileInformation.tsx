import React, { useEffect, useState } from 'react'
import LevelTracker from './LevelTracker'

const ProfileInformation = (props: any) => {

  interface User {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: number;
    email: string;
    phone: number;
    roles: string;
    profilePic: string;
    username: string;
    password: string;
  }

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/users")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
            console.log(data[0])
          setUser(data[0]); // henter rad på index 0
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
      <div className='information'>

        <img className='profile-picture' src= {props.image}/>

        <div className='info-text'>

          <label className='profile-name'>Navn: {user ? user.firstName + ' ' + user.lastName : ''}</label>
          <label className='profile-school'>Role: {user ? user.roles : ''}</label>

          <div className='level-container'>
          <div className='fremgang'>
            <label className='level-number'>{props.level}</label>  
          </div>
            <LevelTracker num= {30}/>
          </div>

        </div>

      </div>
        
  )
}

export default ProfileInformation
