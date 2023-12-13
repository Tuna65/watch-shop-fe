import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import "./Layout.scss";
import Path from "../../component/Path";
import Footer from "../footer/Footer";

interface Props {}

const Layout = (props: Props) => {
  const {} = props;
  React.useEffect(() => {}, []);

  return (
    <div className="layout_wrapper">
      <div className="">
        <Header />
      </div>
      <div className=""></div>
      <div className="">
        <Path />
      </div>
      <Outlet />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
