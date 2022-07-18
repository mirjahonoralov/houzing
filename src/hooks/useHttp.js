const { REACT_APP_BASE_URL } = process.env;

export const useHttp = () => {
  const request = async ({
    url = "",
    method = "GET",
    headers = { "Content-Type": "application/json" },
    body = null,
    token = false,
  }) => {
    if (token) {
      headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      // headers["Content-Type"] = "application/json";
    }

    let bd =
      method === "POST" || method === "PUT" ? JSON.stringify(body) : body;

    let res = await fetch(`${REACT_APP_BASE_URL}${url}`, {
      method,
      body: bd,
      headers,
    })
      .then((res) => res.json())
      .then((data) => data);
    if (res?.success) {
      console.log(res);
      return res;
    }
    if (res.status === 401) {
      fetch(`${REACT_APP_BASE_URL}/public/refresh/token`, {
        headers: {
          body: JSON.stringify({
            refreshToken: localStorage.getItem("refreshToken"),
            username: localStorage.getItem("username"),
          }),
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res, "refreshToken"));
    } else return new Error(res?.message || "something was wrong");
  };

  return { request };
};
