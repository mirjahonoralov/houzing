import { Popover } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseReplace } from "../../../hooks/functions";
import { Input, Button } from "../../Generic";
import AdvancedSearch from "../AdvancedSearch";
import { Icon, Inputs } from "../style";
import { BtnsWrapper, Container, MobileWrapper } from "./style";

const MobileFilter = ({ state, setState, pathname, query, list }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [visible, setVisible] = useState(false);

  const hide = () => setVisible(false);
  const show = () => setVisible(true);

  const onClear = () => {
    setState({
      country: "",
      region: "",
      city: "",
      zip: "",
      address: "",
      room: "",
      min_price: "",
      max_price: "",
    });
    navigate(`/properties?page=${localStorage.getItem("pageNumber")}`);
  };

  const onChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
    if (search.includes("page"))
      navigate(`${pathname}${UseReplace("page", "")}`);
    navigate(`${pathname}${UseReplace(name, value)}`);
  };

  return (
    <Container>
      <MobileWrapper>
        <Input
          name="country"
          placeholder={"Enter a country"}
          onChange={onChange}
          pl={44}
          value={state.country}
        >
          <Icon.Home />
        </Input>
        <Input
          value={state.room}
          name="room"
          placeholder={"Rooms"}
          onChange={onChange}
          pl={44}
        >
          <Icon.Key />
        </Input>

        <Inputs>
          <Input
            name="min_price"
            placeholder={"Min Price"}
            onChange={onChange}
            pl={44}
            value={state.min_price}
          >
            <Icon.Price />
          </Input>
          <Input
            name="max_price"
            placeholder={"Max Price"}
            onChange={onChange}
            pl={44}
            value={state.max_price}
          >
            <Icon.Price />
          </Input>
        </Inputs>

        <BtnsWrapper>
          <Popover
            placement="bottomRight"
            content={
              <AdvancedSearch
                state={state}
                setState={setState}
                list={list}
                query={query}
                hide={hide}
              />
            }
            trigger="click"
            visible={visible}
          >
            <Button type={"secondary"} width={"131px"} onClick={show}>
              <Icon.Setting />
              Advanced
            </Button>
            {/* <Advanced /> */}
          </Popover>
          <Button type={"primary"} width={"131px"} onClick={onClear}>
            Clear
          </Button>
        </BtnsWrapper>
      </MobileWrapper>
    </Container>
  );
};

export default MobileFilter;
