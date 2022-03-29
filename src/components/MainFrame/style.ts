import styled from "styled-components";
import {
  MAINCOLORBG,
  MAINCOLORFONT,
  SECONDCOLORBG,
  SECONDCOLORFONT,
} from "../../variables";

const height = 92;
const width = height / 1.777777777777778;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
  align-items: center;
  height: 100%;
`;

export const Box = styled.div`
  align-self: center;
  align-content: stretch;

  font-size: 1rem;

  width: ${width}vh;
  height: ${height}vh;

  background: ${SECONDCOLORBG};
  color: ${MAINCOLORBG};
  padding: 0.5em;
  border: none;
  border-radius: 5px;

  align-items: center;
  /* 
  flex: 1;

  justify-content: center;

  div {
    background-color: red;
    width: 10px;
    height: 10px;
  } 
  */
`;

export const Screen = styled.div`
  font-size: 3.5rem;
  align-self: center;
  margin-top: 2rem;

  width: auto;

  background: ${SECONDCOLORFONT};
  color: ${MAINCOLORBG};
  padding: 0.1em;
  border-radius: 5px;

  text-align: right;
  font-family: "Big Shoulders Stencil Display", cursive;
`;

export const ButtonsGroup = styled.div`
  /* display: flex; */
  flex-wrap: wrap;

  display: grid;
  grid-template-columns: repeat(4, 25%);
`;
