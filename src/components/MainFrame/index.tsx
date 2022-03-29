import { parse } from "querystring";
import { useState } from "react";
import { Btn } from "../Btn";
import { Box, Container, Screen, ButtonsGroup } from "./style";

export function MainFrame() {
  const [lcdTotal, setLcdTotal] = useState("0");
  const [memoryTemp, setMemoryTemp] = useState(0);
  const [memoryTotal, setMemoryTotal] = useState(0);
  const [isOperator, setIsOperator] = useState(false);
  const [lastOperator, setLastOperator] = useState("");

  function formatLcdTotal(value: string) {
    const parseValue = parseInt(value);
    const newValue = new Intl.NumberFormat("pt-BR", {
      style: "decimal",
    }).format(parseValue);

    console.log("valorMemoriaTemp: ", memoryTemp);
    console.log("valorMemoriaTotal: ", memoryTotal);
    return newValue;
  }

  const userClikc = (value: string) => {
    const parseValue = parseInt(value);

    if (isNaN(parseValue)) {
      console.log("Button pressed: ", value);
      switch (value) {
        case "C": {
          setLcdTotal("0");
          setMemoryTemp(0);
          setMemoryTotal(0);
          break;
        }
        case "+": {
          const result = memoryTotal + memoryTemp;
          setLastOperator(value);
          setLcdTotal("0");
          setMemoryTotal(result);
          setMemoryTemp(result);
          break;
        }
        case "-": {
          const result = memoryTotal - memoryTemp;
          setLastOperator(value);
          setLcdTotal("0");
          setMemoryTotal(result);
          setMemoryTemp(result);
          break;
        }
        case "=": {
          const operacao = parseInt(lastOperator);
          console.log("Last operator: ", operacao);

          setMemoryTotal(0);
          setMemoryTemp(memoryTotal);
          setLcdTotal(memoryTotal.toString());
          break;
        }
      }
    } else {
      const newValue = `${lcdTotal}${value}`;
      setMemoryTemp(parseInt(newValue));
      setLcdTotal(newValue);
    }
    return;
  };

  return (
    <Container>
      <Box>
        <Screen>{formatLcdTotal(lcdTotal)}</Screen>

        <ButtonsGroup>
          <Btn handleClick={userClikc} typeButton="function">
            %
          </Btn>
          <Btn handleClick={userClikc} typeButton="function">
            x²
          </Btn>
          <Btn handleClick={userClikc} typeButton="function">
            ²√
          </Btn>
          <Btn handleClick={userClikc} typeButton="function">
            ÷
          </Btn>

          <Btn handleClick={userClikc} typeButton="number">
            7
          </Btn>
          <Btn handleClick={userClikc} typeButton="number">
            8
          </Btn>
          <Btn handleClick={userClikc} typeButton="number">
            9
          </Btn>
          <Btn handleClick={userClikc} typeButton="function">
            ×
          </Btn>

          <Btn handleClick={userClikc} typeButton="number">
            4
          </Btn>
          <Btn handleClick={userClikc} typeButton="number">
            5
          </Btn>
          <Btn handleClick={userClikc} typeButton="number">
            6
          </Btn>
          <Btn handleClick={userClikc} typeButton="function">
            −
          </Btn>

          <Btn handleClick={userClikc} typeButton="number">
            1
          </Btn>
          <Btn handleClick={userClikc} typeButton="number">
            2
          </Btn>
          <Btn handleClick={userClikc} typeButton="number">
            3
          </Btn>
          <Btn handleClick={userClikc} typeButton="function">
            +
          </Btn>

          <Btn handleClick={userClikc} typeButton="function">
            +/-
          </Btn>
          <Btn handleClick={userClikc} typeButton="number">
            0
          </Btn>
          <Btn handleClick={userClikc} typeButton="function">
            ,
          </Btn>
          <Btn handleClick={userClikc} typeButton="equals">
            =
          </Btn>
          <Btn handleClick={userClikc} typeButton="function">
            C
          </Btn>
        </ButtonsGroup>
      </Box>
    </Container>
  );
}
