import React from "react";

import { Outlet } from "react-router-dom";

import { Container, Footer, Logo, Menu } from "../../components";

function MainTamplate() {
  return (
    <React.Fragment>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Outlet />
      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export {MainTamplate};
