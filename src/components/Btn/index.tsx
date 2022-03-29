import React from "react";
import { Container } from "./style";

interface BtnProps {
  children: string;
  typeButton?: string;
  handleClick: (children: string) => void;
}

export function Btn({ typeButton, children, handleClick }: BtnProps) {
  const setChildrenValue = () => {
    if (children) {
      handleClick(children);
    }
  };

  return (
    <Container onClick={setChildrenValue} typeButton={typeButton}>
      {children}
    </Container>
  );
}
