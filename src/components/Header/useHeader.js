import { useSelector } from "react-redux";

const useHeader = () => {
  const background = useSelector(state => state.configuration.background);
  const style = {
    backgroundColor: background.color ? background.color : "#fff",
    backgroundImage: background.gradient ? background.gradient : null
  };
  return {style , background};
};

export default useHeader;
