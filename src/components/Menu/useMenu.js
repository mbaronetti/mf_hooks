import { useSelector, useDispatch } from "react-redux";
import { setCurrentSection } from "../../redux/actions";

const useMenu = () => {
  const dispatch = useDispatch()
  const { sections, textsize, color } = useSelector(
    state => state.configuration.sectionmenu
  );
  const handleMenuClick = e => {
    console.log(e.key);
    dispatch(setCurrentSection(e.key));
  };
  return { sections, textsize, color, mode: "horizontal", handleMenuClick };
};

export default useMenu;
