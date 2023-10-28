import { css, keyframes } from "@emotion/css";

const scaleOutAnim = (color: string) => keyframes`
  /* 50%,100% { */
    /* scale:1.2 */
  /* } */

  to{
    scale:1;
    opacity: 1;
  }
`;

export const animClass = (color: string) => css`
  /* transform-origin: 100% 100%; */
  /* scale: 1 0; */
  scale: 0;
  opacity: 0;
  background-color: black;
  background-color: ${color};
  animation: ${scaleOutAnim(color)} 500ms forwards;
`;

export const x = css`
  background-color: red;
`;
