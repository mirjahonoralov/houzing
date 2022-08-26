import React from "react";
import { Author, Card, TestimonialWrapper } from "./style";
import person from "../../../assets/imgs/testimonial/person 1.png";

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <div>
        <Card>
          “ I believe in lifelong learning and Skola is a great place to learn
          from experts. I've learned a lot and recommend it to all my friends “
        </Card>
      </div>

      <Author>
        <span>
          <img src={person} alt="" />
        </span>
        <h3>Marvin McKinney</h3>
        <div className="description">Designer</div>
      </Author>
    </TestimonialWrapper>
  );
};

export default Testimonial;
