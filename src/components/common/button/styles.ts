import { css } from "@emotion/css";

export const buttonWrapperStyles = (mouseDown = false) => css`
  height: min-content;
  padding: 0 3px 3px 0;
  position: relative;
  overflow: hidden;
  user-select: none;

  > * {
    ${mouseDown
      ? `
    translate: 3px 3px;
    `
      : ``}
  }

  .right {
    transform-origin: 0% 0%;
    position: absolute;
    width: 3px;
    height: calc(100% - 3px);
    background-color: blue;
    transform: skewY(45deg);
    right: 0;
    top: 0;
    transition: all 100ms;
    background-color: #b2d9ff;
  }
  .down {
    transform-origin: 0% 0%;
    position: absolute;
    height: 3px;
    background-color: yellow;
    width: calc(100% - 3px);
    left: 0px;
    bottom: 0%;
    transform: skewX(45deg);
    transition: all 100ms;
    background-color: #005bb2;
  }

  .face {
    position: relative;
    z-index: 2;
    text-align: center;
    border: solid 1px #b2d9ff;
    padding: 2px 10px;
    background-color: #0083ff;
    transition: all 100ms;
  }
`;
