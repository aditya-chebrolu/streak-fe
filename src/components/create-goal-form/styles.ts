import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";

const anim = keyframes`
  to {
    translate:0;
    scale:1;
  }
`;

export const dialogStyles = css`
  .MuiDialog-paper {
    background: black;
    border-radius: 0;
    animation: ${anim} 500ms forwards;
    translate: 0 20px;
  }
`;
