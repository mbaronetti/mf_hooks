import React from "react";
import { Button } from "antd";
import useToggleSidebar from "./useToggleSidebar";

export const ToggleSidebarButton = props => {
  const { sidebarActive, toggleSidebar, style } = useToggleSidebar();

  return (
    <Button
      shape="circle"
      size="small"
      icon={sidebarActive ? "menu-fold" : "menu-unfold"}
      onClick={toggleSidebar}
      style={style}
    />
  );
};

export default ToggleSidebarButton;
