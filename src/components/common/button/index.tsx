import { ReactNode, useState } from "react";
//change var. name from text to content
const Button = ({
  text,
  variant = "action",
  size = "md",
  onClick
}: {
  text: string | ReactNode;
  variant?: "action" | "success" | "danger";
  size?: "sm" | "md";
  onClick?: () => void;
}) => {
  const [mouseDown, setMouseDown] = useState(false);

  // const clickClass = mouseDown ? "translate-x-[3px] translate-y-[3px]" : "";
  const clickClass = mouseDown ? "scale-[0.95]" : "";
  const x = () => {};
  const sizeClass = {
    sm: "py-1 px-2 text-xs",
    md: "py-[2px] px-[10px]"
  }[size];

  const colorClass = {
    action: "bg-action",
    danger: "bg-danger",
    success: "bg-success-100"
  }[variant];

  // return (
  //   // pr-3px pb-3px removed
  //   <div className={`relative select-none ml-auto overflow-hidden cursor-pointer`} onClick={onClick}>
  //     <div
  //       className={`relative z-2 text-center border border-[#b2d9ff] ${sizeClass} ${colorClass} duration-100 ${clickClass}`}
  //       onMouseDown={() => setMouseDown(true)}
  //       onMouseUp={() => setMouseDown(false)}
  //       onMouseLeave={() => setMouseDown(false)}
  //     >
  //       {text}
  //     </div>
  //     {/* <div
  //       className={`origin-top-left absolute w-[3px] h-[calc(100%-3px)] right-0 top-0 skew-y-[45deg] duration-100 bg-[#468FEA] ${clickClass}`}
  //     />
  //     <div
  //       className={`origin-top-left absolute h-[3px] w-[calc(100%-3px)] left-0 bottom-0 skew-x-[45deg] duration-100 bg-[#1560BD] ${clickClass}`}
  //     /> */}
  //   </div>
  // );
  return (
    <div
      className={`relative z-2 select-none text-center border border-[#b2d9ff] ${sizeClass} ${colorClass} duration-100 ${clickClass} cursor-pointer`}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseLeave={() => setMouseDown(false)}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
