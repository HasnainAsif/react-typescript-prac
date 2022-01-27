type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>; // Exclude keywork doesn't work here...
// type of children is React.ReactNode but we only want it to be of string type.

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
