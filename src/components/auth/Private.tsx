import React from 'react';
import Login from './Login';

import { ProfileProps } from './Profile';

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>; // for passing props to component, we are using <ProfileProps>
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Hasnain" />;
  } else {
    return <Login />;
  }
};

export default Private;
