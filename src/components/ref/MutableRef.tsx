import { useEffect, useRef, useState } from 'react';

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const inputValref = useRef<number | null>(null);

  const stopTimer = () => {
    if (inputValref.current) window.clearInterval(inputValref.current);
  };

  useEffect(() => {
    inputValref.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      // componentWillUnmount
      stopTimer();
    };
  }, []);

  return (
    <>
      <div>Hook Timer - {timer} -</div>
      <div>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
    </>
  );
};

export default MutableRef;
