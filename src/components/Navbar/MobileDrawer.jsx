import { Drawer, Space } from "antd";
import React from "react";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import { Link, MobileMenu } from "./style";

const MobileDrawer = ({ onClose, visible }) => {
  return (
    <Drawer
      title="Menu"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      key="left"
      extra={
        <Space>
          <Button onClick={onClose} type="secondary" width="100px">
            Cancel
          </Button>
        </Space>
      }
    >
      <MobileMenu>
        {navbar.map(
          ({ title, id, path, hidden }) =>
            !hidden && (
              <Link key={id} to={path} onClick={onClose}>
                {title}
              </Link>
            )
        )}
      </MobileMenu>
    </Drawer>
  );
};

export default MobileDrawer;
