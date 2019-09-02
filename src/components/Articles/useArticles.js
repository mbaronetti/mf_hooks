import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/actions";

const useArticles = section => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state[section])
  useEffect(() => {
    dispatch(getData(section));
  }, []);

  return {articles};
};

export default useArticles;
