import { PersonProps } from './Person.types';
const Person = (props: PersonProps) => {
  return (
    <h2>
      {props.name.first} {props.name.last}
    </h2>
  );
};

export default Person;
