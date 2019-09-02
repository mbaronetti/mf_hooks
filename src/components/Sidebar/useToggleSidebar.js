import { useSelector, useDispatch } from "react-redux";
import { showSidebar } from "../../redux/actions";

const useToggleSidebar = () => {
  const dispatch = useDispatch();
  const sidebarActive = useSelector(state => state.sidebarActive);
  const color = useSelector(state => state.configuration.burgermenu.color);
  const style = { color , border: 'none'};

  const toggleSidebar = () => {
    dispatch(showSidebar(!sidebarActive));
  };

  return { sidebarActive, toggleSidebar, style };
};

export default useToggleSidebar;
