import { Popover } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseReplace } from "../../../hooks/functions";
import { Input, Button } from "../../Generic";
import { Icon, Inputs } from "../style";
import { BtnsWrapper, Container, MobileWrapper } from "./style";

const MobileFilter = ({ state, setState, pathname, query, list, hide }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const onClear = () => {
    setState({
      country: "",
      region: "",
      city: "",
      zip: "",
      address: "",
      rooms: "",
      minPrice: "",
      maxPrice: "",
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
        >
          <Icon.Home />
        </Input>
        <Input name="room" placeholder={"Rooms"} onChange={onChange} pl={44}>
          <Icon.Key />
        </Input>

        <Inputs>
          <Input
            name="min_price"
            placeholder={"Min Price"}
            onChange={onChange}
            pl={44}
          >
            <Icon.Price />
          </Input>
          <Input
            name="max_price"
            placeholder={"Max Price"}
            onChange={onChange}
            pl={44}
          >
            <Icon.Price />
          </Input>
        </Inputs>

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
          <Button type={"primary"} width={"131px"} onClick={onClear}>
            Clear
          </Button>
        </BtnsWrapper>
      </MobileWrapper>
    </Container>
  );
};

export default MobileFilter;
