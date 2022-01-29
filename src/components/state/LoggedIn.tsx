import { useState } from 'react';

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // no need to assign type because it is always boolean

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'} </div>
    </div>
  );
};

export default LoggedIn;
