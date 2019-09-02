import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import Articles from "../components/Articles/Articles";
import { getData } from "../redux/actions";
import { useScrollTop } from "../helpers/helpers";

const Home = () => {
  const dispatch = useDispatch();
  const configuration = useSelector(state => state.configuration);
  const currentSection = useSelector(state => state.currentSection);

  useEffect(() => {
    window.addEventListener("scroll", useScrollTop);
    dispatch(getData("configuration"));
  }, []);
  if (!configuration) return <Loader />;
  return (
    <div id="home">
      <Header />
      {currentSection === "0" && <Articles section="articles"/>}
      {currentSection === "1" && <Articles section="politics"/>}
    </div>
  );
};

export default Home;
