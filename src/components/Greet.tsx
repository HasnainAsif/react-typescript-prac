import { Fragment } from 'react';

type GreetProps = {
  name: string;
  messageCount?: number; // ? shows this prop is optional
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; // 0 is default value of messageCount Prop
  return (
    <Fragment>
      <div>
        {props.isLoggedIn ? (
          <>
            Assalam-O-Alaikum {props.name}. You have {messageCount} unread
            messages
          </>
        ) : (
          <>Assalam-O-Alaikum Guest</>
        )}
      </div>
    </Fragment>
  );
};

export default Greet;
