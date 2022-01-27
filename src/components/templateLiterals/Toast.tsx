/**
 * Position Props can be one of the following
 * "Left-center" | "left-top" | "left-botton" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  //   position: `${HorizontalPosition}-${VerticalPosition}`; // it also contains type center-center
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'; // excluding type 'center-center' and including type 'center''
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
