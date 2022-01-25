import { useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    // no need for this check, because userContext is not null now
    // if (userContext) {
    userContext.setUser({
      name: 'User123',
      email: 'user@123.com',
    });
    // }
  };
  const handleLogout = () => {
    // no need for this check, because userContext is not null now
    // if (userContext) {
    userContext.setUser(null);
    // }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};
export default User;
