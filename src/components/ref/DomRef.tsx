import { useEffect, useRef } from 'react';

const DomRef = () => {
  // Specify dom type for DOM Ref like 'HTMLInputElement'
  const inputRef = useRef<HTMLInputElement>(null!); // if we are sure reference is never
  // null when we access it, we can add non null assertion when invoking useRef.
  // no need to add '?' when we are accessing it

  useEffect(() => {
    // inputRef.current?.focus();
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
