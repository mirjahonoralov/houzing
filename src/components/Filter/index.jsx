import React from "react";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";
import { Advanced, Container, Icon, Inputs, Wrapper } from "./style";
import { Popover } from "antd";

export const advancedSearch = (
  <Advanced>
    <Advanced.Title>Address</Advanced.Title>
    <Inputs>
      <Input placeholder={"Country"} pl={20} />
      <Input placeholder={"Region"} pl={20} />
      <Input placeholder={"City"} pl={20} />
      <Input placeholder={"Zip"} pl={20} />
    </Inputs>
    <Advanced.Title>Apartment info</Advanced.Title>
    <Inputs>
      <Input placeholder={"Rooms"} pl={20} />
      <Input placeholder={"Size"} pl={20} />
      <Input placeholder={"Sort"} pl={20} />
    </Inputs>
    <Advanced.Title>Price</Advanced.Title>
    <Inputs>
      <Input placeholder={"Min price"} pl={20} />
      <Input placeholder={"Max price"} pl={20} />
    </Inputs>
    <Inputs>
      <Button width={"130px"} type={"secondary"}>
        Cancel
      </Button>
      <Button width={"130px"} type={"primary"}>
        Submit
      </Button>
    </Inputs>
  </Advanced>
);

const Filter = () => {
  return (
    <Container>
      <Wrapper>
        <Input
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
          pl={44}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          content={advancedSearch}
          trigger="click"
        >
          <Button type={"secondary"} width={"131px"}>
            <Icon.Setting />
            Advanced
          </Button>
        </Popover>
        <Button type={"primary"} width={"131px"}>
          <Icon.Search />
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Filter;
