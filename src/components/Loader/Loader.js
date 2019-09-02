import React from "react";
import { Spin } from "antd";
import './css/Loader.css'

export const Loader = props => {
  return (
    <div className="loader">
      <Spin />
      <p>Fetching data</p>
    </div>
  );
};

export default Loader;
