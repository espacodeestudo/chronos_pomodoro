import React from "react";

import { Container, CountDown, Form, Logo, Menu } from "./components";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
      <Container>
        <Form />
      </Container>
    </React.Fragment>
  );
}

export default App;
