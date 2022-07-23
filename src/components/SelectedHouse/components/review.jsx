import React from "react";
import { Rate, Rates, ReviewInputs } from "../style";
import { Rate as AntdRate } from "antd";
import rateImg from "../../../assets/icons/properties/rate.svg";
import { useState } from "react";
import Input2 from "../../Generic/Input2";
import Button from "../../Generic/Button";

const Review = () => {
  const mock = [1, 2, 3, 4, 5];
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="subtitle">Write a Review</div>
      <Rates>
        <Rate>
          <div>
            <span className="description">Cleanliness</span>
            <AntdRate onChange={setValue} value={value} />
          </div>
          <div>
            <span className="description">Accuracy</span>
            <AntdRate />
          </div>
        </Rate>
        <Rate>
          <div>
            <span className="description">Communication</span>
            <AntdRate />
          </div>
          <div>
            <span className="description">Location</span>
            <AntdRate />
          </div>
        </Rate>
        <Rate>
          <div>
            <span className="description">Cleanliness</span>
            <AntdRate />
          </div>
          <div>
            <span className="description">Location</span>
            <AntdRate />
          </div>
        </Rate>
        <Rate>
          <div>
            <span className="description">Check-in</span>
            <AntdRate />
          </div>
          <div>
            <span className="description">Value</span>
            <AntdRate />
          </div>
        </Rate>
      </Rates>

      <ReviewInputs>
        <div className="top">
          <Input2 name={"name"} placeholder="Name" />
          <Input2 name={"email"} placeholder="Email" />
        </div>
        <div className="description">Enter Your Message</div>
        <Input2 name={"message"} />
        <Button type="primary" width="250px">
          Send your review
        </Button>
      </ReviewInputs>
    </>
  );
};

export default Review;
