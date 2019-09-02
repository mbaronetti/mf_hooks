import { useSelector } from "react-redux";
import defaultLogo from "../../media/mflogo.svg";

const useLogo = () => {
  const logo = useSelector(state => state.configuration.logo);
  const logoSrc = logo.image ? logo.image : defaultLogo;
  const logoStyle = { width: logo.size ? logo.size : "auto" };

  return { logoSrc, logoStyle };
};

export default useLogo;
