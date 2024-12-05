import { IButtonProps } from "./interface";

function Button({ children, className, onClick }: IButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded border px-3 py-2 font-bold text-white outline-none hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
