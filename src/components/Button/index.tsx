import { IButtonProps } from "./interface";

function Button({ color, children, className, onClick }: IButtonProps) {
  return (
    <button
      className={`btn bg-${color}-400 font-bold text-white hover:bg-${color}-500 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
