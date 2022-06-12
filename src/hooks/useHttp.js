const { REACT_APP_BASE_URL } = process.env;

export const useHttp = () => {
  const request = async ({
    url = "",
    method = "GET",
    headers = {},
    body = null,
    token = false,
  }) => {
    if (token)
      headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

    let res = await fetch(`${REACT_APP_BASE_URL}${url}`, {
      method,
      headers,
      body,
    }).then((res) => res.json());
    if (res.success) return res;
    else return new Error(res?.message || "something was wrong");
  };

  return { request };
};
