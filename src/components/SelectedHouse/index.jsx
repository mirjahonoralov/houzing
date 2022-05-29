import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Container } from "./style";
const { REACT_APP_BASE_URL: url } = process.env;

const SelectedHouse = () => {
  const { id } = useParams();
  const [house, setHouse] = useState({});

  useQuery(
    "get",
    () => {
      return fetch(`${url}/v1/houses/${id.replace(":", "")}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setHouse(res?.data);
        console.log(res);
      },
    }
  );
  return <Container>{house?.address}</Container>;
};

export default SelectedHouse;
