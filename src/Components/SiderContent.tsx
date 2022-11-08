import { Layout } from "antd";
import React from "react";
import { SideBarButton } from "./SideBarButton";
import { Status } from "../types/types";

const { Sider } = Layout;
interface props {
  onStatusChange: (status: Status) => void;
}

const SIDER: React.CSSProperties = {
  backgroundColor: "White",
  borderStyle: "solid",
};

/**
 * Render a side layout component
 */

export const SiderContent: React.FC<props> = ({ onStatusChange }) => {
  return (
    <Sider style={SIDER}>
      <SideBarButton onStatusChange={onStatusChange} />
    </Sider>
  );
};
