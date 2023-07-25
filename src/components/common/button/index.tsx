import { useState } from "react";
import { buttonWrapperStyles } from "./styles";

const Button = ({
  text,
  styles = "",
  variant = "action",
  size = "md",
  onClick
}: {
  text: string;
  styles?: string;
  variant?: "action" | "success" | "danger";
  size?: "sm" | "md";
  onClick?: () => void;
}) => {
  const [mouseDown, setMouseDown] = useState(false);
  return (
    <div className={`${buttonWrapperStyles(mouseDown)} ml-auto`} onClick={onClick}>
      <div
        className="face "
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseLeave={() => setMouseDown(false)}
      >
        {text}
      </div>
      <div className="right " />
      <div className="down " />
    </div>
  );
};

export default Button;
