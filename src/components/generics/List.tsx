// Generic Types can also be think as Params props

type ListProps<T> = {
  // T stands for type and it's just convention to write this way...
  items: T[];
  onClick: (value: T) => void;
};

// Defining here What T is.
const List = <T extends string | number | { id: number; first?: string; last: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
