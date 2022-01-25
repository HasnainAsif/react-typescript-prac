import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

const User2 = () => {
  //   const [user, setUser] = useState<AuthUser>({
  //     name: '',
  //     email: '',
  //   });
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'Hasnain',
      email: 'hasnain.asif@invozone.com',
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

export default User2;
