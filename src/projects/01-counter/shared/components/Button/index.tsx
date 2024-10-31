import { IButtonProps } from "./interface";

function Button({ children, className, onClick }: IButtonProps) {
  return (
    <button
      className={`btn font-bold text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
