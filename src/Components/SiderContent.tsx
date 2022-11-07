import { Layout } from "antd";
import React from "react";
import { SideBarButton } from "./SideBarButton";
import { Status } from "../types/types";


const { Sider } = Layout;
interface props {
  onStatusChange: (status: Status) => void;
}
export const SiderContent: React.FC<props> = ({ onStatusChange }) => {

  return (
    <Sider
      style={{
        backgroundColor: "White",
        borderStyle: "solid",
      }}
    >
      <SideBarButton onStatusChange={onStatusChange} />
    </Sider>
  );
};
