import { Popover } from "antd";
import React from "react";
import { Input, Button } from "../../Generic";
import { Icon } from "../style";
import { BtnsWrapper, Container, MobileWrapper } from "./style";

const MobileFilter = () => {
  return (
    <Container>
      <MobileWrapper>
        <Input placeholder={"Enter an address, city, or ZIP code"} pl={44}>
          <Icon.Home />
        </Input>
        <Input placeholder={"Status"} pl={44}>
          <Icon.Key />
        </Input>
        <Input placeholder={"Price"} pl={44}>
          <Icon.Price />
        </Input>
        <BtnsWrapper>
          <Popover
            placement="bottomRight"
            //   content={advancedSearch}
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
        </BtnsWrapper>
      </MobileWrapper>
    </Container>
  );
};

export default MobileFilter;
