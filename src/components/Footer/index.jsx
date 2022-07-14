import React from "react";
import { Column, Container, Icons, Wrapper } from "./style";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Column>
          <h3>Contact Us</h3>
          <p>
            <Icons.Map /> 329 Queensberry Street, North Melbourne VIC 3051,
            Australia.
          </p>
          <p>
            <Icons.Phone /> 123 456 7890
          </p>
          <p>
            <Icons.Email /> support@houzing.com
          </p>
        </Column>
        <Column>
          <h3>Discover</h3>
          <p>Chicago</p>
          <p>Los Angeles</p>
          <p>Miami</p>
          <p>New York</p>
        </Column>
        <Column>
          <h3>Lists by Category</h3>
          <p>Apartments</p>
          <p>Condos</p>
          <p>Houses</p>
          <p>Offices</p>
          <p>Retail</p>
          <p>Villas</p>
        </Column>
        <Column>
          <h3>Lists by Category</h3>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Support Center</p>
          <p>Contact Us</p>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Footer;
