type StatusProps = {
  status: 'loading' | 'success' | 'error'; // Union of string literals
};

const Status = (props: StatusProps) => {
  let message =
    props.status === 'loading'
      ? 'Loading...'
      : props.status === 'success'
      ? 'Data fetched successfully!!!'
      : props.status === 'error' && 'Error fetching data!!!';

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
