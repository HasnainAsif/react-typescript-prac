type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>; // Exclude keyword doesn't work here...
// type of children is React.ReactNode because of 'React.ComponentProps<'button'>',
// but we only want it to be of string type that's why we are omiting it

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
