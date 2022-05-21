import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const UseSearch = () => {
  const { search } = useLocation();
  console.log(search);
  return useMemo(() => new URLSearchParams(search), [search]);
};

export default UseSearch;
