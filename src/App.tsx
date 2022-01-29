import './App.css';
import { CustomButton } from './components/html/Button';
import CustomComponent from './components/html/CustomComponent';
import { CustomInput } from './components/html/Input';
import Text from './components/polymorphic/Text';
import Counter from './components/reducer/Counter';
import RandomNumber from './components/restriction/RandomNumber';
import Toast from './components/templateLiterals/Toast';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import CounterClass from './components/class/Counter';
import Button from './components/Button';
import Container from './components/Container';
import Box from './components/context/Box';
import ThemeContextProvider from './components/context/ThemeContext';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import User2 from './components/state/User2';
import Status from './components/Status';
import User3 from './components/context/User';
import UserContext from './components/context/UserContext';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';

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

      {/* Pass React component as Children Props */}
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

      {/* useReducer hook */}
      {/* this hook is used when next state depends on previous state */}
      {/* <Counter /> */}

      {/* ContextApi - passing context value to children */}
      {/* contextApi values are fixed(constant) */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* contextApi future values */}
      {/* <UserContext>
        <User3 />
      </UserContext> */}

      {/* useRef for Dom References*/}
      {/* <DomRef /> */}
      {/* useRef for Dom References*/}
      {/* <MutableRef /> */}

      {/* Class Components for props and state */}
      {/* <CounterClass message="The counter is " /> */}

      {/* Passing Component as Props */}
      {/* <Private isLoggedIn={false} component={Profile} /> */}

      {/* Generics Props */}
      {/* <List items={['batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          {
            id: 1,
            first: '1',
            last: '11',
          },
          {
            id: 2,
            first: '2',
            last: '21',
          },
          {
            id: 3,
            first: '3',
            last: '31',
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* Restriction of props */}
      {/* if one prop is passed other should not be useable */}
      {/* <RandomNumber value={10} isPositive isZero /> ERROR - isPositive and isZero is used simultaneously  */}
      {/* <RandomNumber value={10} isPositive /> */}

      {/* Adding prop types using template literals */}
      {/* Exclude or remove a specific type from types */}
      {/* <Toast position="right-top" /> */}

      {/* Wrapping HTML Elements */}
      {/* It used for manual templating of project e.g; our own button, input etc... */}
      {/* Use ...rest instead of importing all props */}
      {/* <CustomButton variant="primary" onClick={() => alert('Button clicked...')}>
        Primary Button
      </CustomButton>
      <CustomInput style={{ color: 'red' }} /> */}

      {/* Extracting a component prop types, if we don't have access to that component 
          i.e; we cannot export prop types from that component
          e.g; extracting prop types of a component of installed package*/}
      {/* <CustomComponent name={'Hasnain'} isLoggedIn={false} /> */}

      {/* Polymorphic Components */}
      {/* Used when we are creating a library */}
      {/* We want Text component behaves differently based on as props. It is called Polymorphic Component */}
      {/* <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text> */}
    </div>
  );
}

export default App;
