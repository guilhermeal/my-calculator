import styled from "styled-components";
import {
  MAINCOLORBG,
  MAINCOLORFONT,
  SECONDCOLORBG,
  SECONDCOLORFONT,
  THIRDCOLORBG,
  FORTHCOLORBG,
} from "../../variables";

interface ContainerProps {
  typeButton?: string;
}

export const Container = styled.div<ContainerProps>`
  font-size: 2rem;
  margin: 0.3em 0.08em;

  padding: 0.1em 0.5em;
  text-align: center;
  border-radius: 5px;
  flex: 1 0 10%; /* explanation below */

  border: none;
  background: ${(props) =>
    props.typeButton === "equals"
      ? MAINCOLORFONT
      : props.typeButton === "function"
      ? FORTHCOLORBG
      : THIRDCOLORBG};

  &:hover {
    opacity: 0.5 #fff;
    transition: opacity 0.1s linear 0.05s;
    cursor: pointer;
  }
`;

export const button = styled.button`
  background: transparent;
`;
