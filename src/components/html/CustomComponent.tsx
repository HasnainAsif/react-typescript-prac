import React from 'react';
import Greet from '../Greet';

// Instead of importing GreetProps, we can use this way too
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};

export default CustomComponent;
