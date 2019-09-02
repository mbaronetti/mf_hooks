import React from "react";
import { Row, Col , Affix } from "antd";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import "./css/Header.css";
import ToggleSidebarButton from "../Sidebar/ToggleSidebarButton";
import useHeader from "./useHeader";

const Header = props => {
  const { style } = useHeader();

  return (
    <Affix>
      <header style={style} id="header">
        <Row>
          <Col span={8}>
            <ToggleSidebarButton />
          </Col>
          <Col span={8}>
            <Logo />
          </Col>
        </Row>
        <Menu />
      </header>
    </Affix>
  );
};

export default Header;
