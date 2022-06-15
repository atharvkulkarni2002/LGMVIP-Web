import './App.css';
import React,{ useState } from 'react';


function App() {
  const [userData, setuserData] = useState([]);
  const [checker, setchecker] = useState(false);

  const getUsers = async () => {
    setchecker(true)
    const res = await fetch('https://reqres.in/api/users?page=1');
    const json = await res.json();
    setuserData(json.data);
    setTimeout(() => {
      setchecker(false);
    }, 2000 );
    
  };

  return (
    <div className="UserData">
      <nav className="navbar">
        <p className="Brand">User Data</p>
        <button onClick={getUsers} className="btn">Get User Data</button>
      </nav>
      {checker?
      <div className='loader'></div>:
      <div className="DataHolder">
        {userData.map((user) => {
          return (
            <div className="Info">
              <img src={user.avatar}  className="Img" />
              <h4  className="Name">{user.first_name} {user.last_name}</h4>
              <p  className="Email">{user.email}</p>
            </div>
          );
        })}
      </div>
    }
    </div>
  )
}

export default App;
