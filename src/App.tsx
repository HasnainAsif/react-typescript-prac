import './App.css';
// import Button from './components/Button';
// import Container from './components/Container';
import Box from './components/context/Box';
import ThemeContextProvider from './components/context/ThemeContext';
// import Greet from './components/Greet';
// import Heading from './components/Heading';
// import Input from './components/Input';
// import Oscar from './components/Oscar';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import LoggedIn from './components/state/LoggedIn';
// import User from './components/state/User';
// import User2 from './components/state/User2';
// import Status from './components/Status';
import User from './components/context/User';
import UserContext from './components/context/UserContext';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    { first: 'Bruce', last: 'Wayne' },
    { first: 'Clark', last: 'Kent' },
    { first: 'Princess', last: 'Diana' },
  ];

  return (
    <div className="App">
      {/* string, number and booleans props  */}
      {/* <Greet name="Hasnain" messageCount={20} isLoggedIn={true} /> */}

      {/* object props  */}
      {/* importing types from another file */}
      {/* <Person name={personName} /> */}

      {/* Array of objects props  */}
      {/* <PersonList names={nameList} /> */}

      {/* similar to sql enum type props checking (but its not example of enum in ts) */}
      {/* Union of string literals */}
      {/* <Status status="loading" /> */}

      {/* Children Props */}
      {/* <Heading>Placeholder text</Heading> */}

      {/* Pass React component as Children props */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!!!</Heading>
      </Oscar> */}

      {/* Assign types to onClick Event handler props and within component */}
      {/* <Button
        handleClick={(event, id) => {
          alert('button clicked!!! ' + id);
        }}
      /> */}

      {/* PROPS DESTRUCTURING */}
      {/* Assign types to onChange Event handler props and within component */}
      {/* <Input value='asdf' handleChange={(event) => console.log(event)} /> */}

      {/* Style Props */}
      {/* <Container style={{ border: '1px solid black', padding: '1rem' }} /> */}

      {/* useState hook */}
      {/* <LoggedIn /> */}

      {/* useState hook whose initial and final value types are differnet */}
      {/* <User /> */}

      {/* useState hook whose initial and final value types are same */}
      {/* Type assertion */}
      {/* <User2 /> */}

      {/* ContextApi - passing context value to children */}
      {/* contextApi values are fixed(constant) */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* contextApi future values */}

      <UserContext>
        <User />
      </UserContext>
    </div>
  );
}

export default App;
