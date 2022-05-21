export const UseReplace = (query, value) => {
  let url = new URL(window?.location?.href);
  console.log("url: ", url);
  url.searchParams.set(query, value);
  if (!value && value !== 0) url.searchParams.delete(query);
  console.log("url after: ", url);

  return url.search;
};

export default UseReplace;
