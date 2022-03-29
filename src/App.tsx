import GlobalStyle from "./globalStyles";
import { MainFrame } from "./components/MainFrame";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainFrame />
    </Fragment>
  );
}

export default App;
