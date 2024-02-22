import { FC } from "react";
import "./Button.scss";
interface IButtonProps {
  text: string;
  size: "s" | "m" | "l";
  theme: "light" | "dark";
  onClick: () => void;
}
const Button: FC<IButtonProps> = ({ text = 'click', size = 'm', theme = 'light', onClick }) => {
  return (
    <button className={`button button-${size} button-theme-${theme}`} onClick={() => onClick}>
        {text}
    </button>
  );
};

export default Button;
