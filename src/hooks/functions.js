import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const UseReplace = (name, value) => {
  let url = new URL(window?.location?.href);
  url.searchParams.set(name, value);
  if (!value) url.searchParams.delete(name);
  return url.search;
};

export const UseSearch = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
