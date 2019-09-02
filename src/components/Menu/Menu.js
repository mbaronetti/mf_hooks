import React from "react";
import { Menu as AntMenu } from "antd";
import useMenu from "./useMenu";
import './css/Menu.css'

export const Menu = props => {
  const { sections, textsize, color, mode , handleMenuClick} = useMenu();

  if (!sections) return null;
  return (
    <AntMenu id="headerMenu" defaultSelectedKeys={["0"]} mode={mode} onClick={handleMenuClick}>
      {sections.map((item, index) => (
        <AntMenu.Item key={index}>
          <span style={{ color, fontSize: textsize }}>
            {item.text ? item.text : "Menu " + index}
          </span>
        </AntMenu.Item>
      ))}
    </AntMenu>
  );
};

export default Menu;
