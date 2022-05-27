import React from "react";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";

import { Advanced, Container, Icon, Inputs, Wrapper } from "./style";
import { Popover } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { UseReplace, UseSearch } from "../../hooks/functions";
import MobileFilter from "./MobileFilter";

const Filter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const query = UseSearch();

  const onChange = ({ target }) => {
    const { value, name } = target;
    navigate(`${pathname}${UseReplace(name, value)}`);
  };

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Inputs>
        <Input
          name={"country"}
          placeholder={"Country"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("country")}
        />
        <Input
          name={"region"}
          placeholder={"Region"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("region")}
        />
        <Input
          name={"city"}
          placeholder={"City"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("city")}
        />
        <Input
          name={"zip"}
          placeholder={"Zip"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("zip")}
        />
      </Inputs>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Inputs>
        <Input
          name={"address"}
          placeholder={"Address"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("address")}
        />
        <Input
          name={"house"}
          placeholder={"House name"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("house")}
        />
        <Input
          name={"rooms"}
          placeholder={"Rooms"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("rooms")}
        />
      </Inputs>
      <Advanced.Title>Price</Advanced.Title>
      <Inputs>
        <Input
          name={"min"}
          placeholder={"Min price"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("min")}
        />
        <Input
          name={"max"}
          placeholder={"Max price"}
          pl={20}
          onChange={onChange}
          defaultValue={query.get("max")}
        />
      </Inputs>
      <Inputs>
        <Button width={"130px"} type={"secondary"}>
          Cancel
        </Button>
        <Button width={"130px"} type={"primary"}>
          Clear
        </Button>
      </Inputs>
    </Advanced>
  );

  return (
    <Container>
      <MobileFilter />
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
