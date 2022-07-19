import React from "react";
import { ScheduleWrapper } from "../style";
import { Select } from "antd";
import { DatePicker } from "antd";
import Input2 from "../../Generic/Input2";
import Button from "../../Generic/Button";

const Schedule = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const time = ["9:00 AM", "12:00 AM", "7:00 PM", "9:00 PM", "21:00 PM"];

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className="subtitle">Schedule A Tour</div>
      <ScheduleWrapper>
        <div className="selectors">
          <DatePicker onChange={onChange} />
          <Select
            defaultValue={time[0]}
            style={{
              width: "100%",
            }}
            onChange={handleChange}
          >
            {time.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>

        <div className="subtitle">Your Information</div>
        <div className="inputs">
          <Input2 name={"name"} placeholder="Name" />
          <Input2 name={"phone"} placeholder="Phone" />
          <Input2 name={"email"} placeholder="Email" />
        </div>

        <div className="description">Enter Your Message</div>
        <Input2 name={"message"} placeholder="" />
        <Button type={"primary"} width="250px">
          Submit a tour request
        </Button>
      </ScheduleWrapper>
    </>
  );
};

export default Schedule;
