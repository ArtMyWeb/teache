import React, { useState } from "react";
import { Form, NeighborhoodWrapper, Title } from "./NeighborhoodStyled";
import { Container } from "../../base/Container";
import { Input } from "../../base/Input";
import { Button } from "../../base/Button";

const Neighborhood = () => {
  const [number, setNumber] = useState();

  return (
    <NeighborhoodWrapper>
      <Container>
        <Title>See what classes are available in your neighborhood</Title>
        <Form>
          <Input
            setValue={setNumber}
            value={number}
            placeholder="Mobile number"
          />
          <Button background="pink" width={230}>
            Send me a link
          </Button>
        </Form>
      </Container>
    </NeighborhoodWrapper>
  );
};

export default Neighborhood;
