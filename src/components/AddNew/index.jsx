import React from "react";
import { Button, Input2 } from "../Generic";
import Map from "./Map";
import { ButtonWrapper, Container, Section, Wrapper } from "./style";
import { useHttp } from "../../hooks/useHttp";
import { useMutation } from "react-query";
const AddNew = () => {
  const { request } = useHttp();
  const { mutate } = useMutation(() =>
    request({
      url: "/v1/houses/",
      method: "POST",
      token: true,
      headers: {},
      body: {
        address: "string",
        attachments: [
          {
            imgPath: "string",
          },
        ],
        categoryId: 0,
        city: "string",
        componentsDto: {
          additional: "string",
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        country: "string",
        description: "new home",
        favorite: true,
        homeAmenitiesDto: {
          additional: "string",
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        houseDetails: {
          area: 0,
          bath: 0,
          beds: 0,
          garage: 0,
          room: 0,
          yearBuilt: 0,
        },
        locations: {
          latitude: 0,
          longitude: 0,
        },
        name: "string",
        price: 0,
        region: "string",
        salePrice: 0,
        status: true,
        zipCode: "string",
      },
    })
  );

  const onSubmit = () => {
    mutate("", {
      onSuccess: (res) => {
        console.log(res);
      },
    });
  };
  return (
    <Container>
      <div className="title">Add new property</div>
      <Section>
        <div className="subtitle">Contact information</div>
        <Wrapper>
          <Input2 placeholder={"Property title*"} />
          <Input2 placeholder={"Type"} />
        </Wrapper>
        <div className="description">Property Description*</div>
        <Input2 />
      </Section>
      <Section>
        <div className="subtitle">Additional</div>
        <Wrapper>
          <Input2 placeholder={"Bad"} />
          <Input2 placeholder={"Bath"} />
          <Input2 placeholder={"Garage"} />
        </Wrapper>
        <Wrapper>
          <Input2 placeholder={"Year build"} />
          <Input2 placeholder={"Home area"} />
          <Input2 placeholder={"Rooms"} />
        </Wrapper>
      </Section>
      <Section>
        <div className="subtitle">Price</div>
        <Wrapper>
          <Input2 placeholder={"Price"} />
          <Input2 placeholder={"Sale Price"} />
        </Wrapper>
      </Section>

      <Section>
        <div className="subtitle">Location</div>
        <Wrapper>
          <Input2 placeholder={"Region"} />
          <Input2 placeholder={"Address"} />
        </Wrapper>
        <Map />
      </Section>
      <ButtonWrapper>
        <Button
          onClick={onSubmit}
          width={"150px"}
          type="primary"
          style={{ marginLeft: "auto" }}
        >
          Submit
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default AddNew;
