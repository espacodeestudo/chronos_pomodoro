import React from "react";

import { Container, CountDown, Form } from "../../components";


function Home() {

  
  return (
    <React.Fragment>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <Form />
      </Container>
    </React.Fragment>
  );

}

export { Home };
