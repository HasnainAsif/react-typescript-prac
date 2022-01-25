import React from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    alert('button clicked!!! ' + id);
  };
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};

export default Button;
