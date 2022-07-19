import React from "react";
import Button from "../Generic/Button";
import Input2 from "../Generic/Input2";
import { ContactWrapper, User } from "./style";
import { Checkbox } from "antd";
import user from "../../assets/imgs/no-user.jpg";

const Contact = ({ userData }) => {
  return (
    <ContactWrapper>
      <User>
        <div className="img">
          <img src={user} alt="" />
        </div>
        <div>
          <div className="subtitle">
            {userData?.firstname} {userData?.lastname}
          </div>
          <div className="description">(123)456-7890</div>
        </div>
      </User>
      <Input2 name={"name"} placeholder="Name" />
      <Input2 name={"phone"} placeholder="Phone" />
      <Input2 name={"email"} placeholder="Email" />
      <div>
        <div className="subtitle">Message</div>
        <Input2 name={"message"} placeholder="Message" />
      </div>
      <div>
        <Checkbox />{" "}
        <span className="description">
          By submitting this form I agree to Terms of Use
        </span>
      </div>
      <Button type={"primary"}>Send request</Button>
    </ContactWrapper>
  );
};

export default Contact;
