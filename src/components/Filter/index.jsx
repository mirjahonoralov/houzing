import React, { useRef } from "react";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";

import { Advanced, Container, Icon, Inputs, Wrapper } from "./style";
import { Popover } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import UseReplace from "../../hooks/useReplace";
import UseSearch from "../../hooks/useSearch";

const Filter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const query = UseSearch();
  const countryRef = useRef("");
  const regionRef = useRef("");
  const cityRef = useRef("");
  const zipRef = useRef("");
  const addressRef = useRef("");
  const houseNameRef = useRef("");
  const roomRef = useRef("");
  const minRef = useRef("");
  const maxRef = useRef("");

  const onSearch = () => {};

  const onChange = ({ target }) => {
    const { value } = target;
    console.log("pathname: ", pathname);
    navigate(
      `${pathname}${UseReplace(target.placeholder.toLowerCase(), value)}`
    );
  };

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Inputs>
        <Input
          onChange={onChange}
          defaultValue={query.get("zip")}
          ref={countryRef}
          placeholder={"Country"}
          pl={20}
        />
        <Input ref={regionRef} placeholder={"Region"} pl={20} />
        <Input
          defaultValue={query.get("city")}
          ref={cityRef}
          placeholder={"City"}
          pl={20}
          onChange={onChange}
        />
        <Input ref={zipRef} placeholder={"Zip"} pl={20} />
      </Inputs>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Inputs>
        <Input ref={addressRef} placeholder={"Address"} pl={20} />
        <Input ref={houseNameRef} placeholder={"House name"} pl={20} />
        <Input ref={roomRef} placeholder={"Rooms"} pl={20} />
      </Inputs>
      <Advanced.Title>Price</Advanced.Title>
      <Inputs>
        <Input ref={minRef} placeholder={"Min price"} pl={20} />
        <Input ref={maxRef} placeholder={"Max price"} pl={20} />
      </Inputs>
      <Inputs>
        {/* <Button width={"130px"} type={"secondary"}>
          Cancel
        </Button> */}
        <Button width={"130px"} type={"primary"} onClick={onSearch}>
          Search
        </Button>
      </Inputs>
    </Advanced>
  );

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
        <Button type={"primary"} width={"131px"} onClick={onSearch}>
          <Icon.Search />
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Filter;
