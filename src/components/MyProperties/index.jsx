import React, { useState } from "react";
import { useQuery, useMutation, refetch } from "react-query";
import {
  CardWrapper,
  Container,
  Icons,
  ImgWrapper,
  Table,
  TableWrapper,
  Top,
  Wrapper,
} from "./style";
import { useHttp } from "../../hooks/useHttp";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";
import { message, Popconfirm } from "antd";

const MyProperties = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { request } = useHttp();
  const [responseMessage, setResponseMessage] = useState(null);
  const [refetch, setRefetch] = useState(false);

  useQuery([refetch], () => request({ url: "/v1/houses/me", token: true }), {
    onSuccess: (res) => {
      setData(res.data);
      setResponseMessage(res.message);
    },
  });

  const { mutate: deleteHome } = useMutation((id) =>
    request({ url: `/v1/houses/${id}`, method: "DELETE", token: true })
  );

  const confirm = (id) => {
    deleteHome(id, {
      onSuccess: (res) => {
        if (res?.success) {
          message.success("Deleted");
          setRefetch(!refetch);
        }
      },
    });
  };

  const cancel = (e) => message.error("Clicked No");

  const Card = ({ card }) => {
    return (
      <CardWrapper>
        <main>
          <ImgWrapper>
            <img src={card.attachments[0].imgPath} alt="" />
          </ImgWrapper>
          <div>
            <div className="subtitle">{card.name}</div>
            {/* <div className="description" style={{ marginBottom: "21px" }}>
              {card.region}, {card.address}
            </div> */}
            <span className="delete">{card.price}</span>
            <div className="subtitle">{card.salePrice}</div>
          </div>
        </main>

        <button>For sale</button>
      </CardWrapper>
    );
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          <div className="title">Your houses</div>
          <Button
            width={"131px"}
            type={"primary"}
            onClick={() => navigate("/properties/add-new")}
          >
            Add New
          </Button>
        </Top>
        <div style={{ marginTop: "32px" }}>
          {!data ? (
            <h1>{responseMessage}</h1>
          ) : (
            <TableWrapper>
              <Table>
                <thead>
                  <th>Listing Title</th>
                  <th>Year build</th>
                  <th>Status</th>
                  <th>Rooms</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {data?.map((house) => (
                    <tr key={house.id}>
                      <td style={{ width: "45%" }}>
                        <Card card={house} />
                      </td>
                      <td data-aria-label="Year build">
                        {house.houseDetails.yearBuilt}
                      </td>
                      <td data-aria-label="Status">
                        {house.status ? "On sale" : "Sold"}
                      </td>
                      <td data-aria-label="Rooms">{house.houseDetails.room}</td>
                      <td data-aria-label="Action">
                        <Icons.Edit
                          onClick={() =>
                            navigate(`/properties/add-new/${house.id}`)
                          }
                        />
                        <Popconfirm
                          title="Are you sure to delete home?"
                          onConfirm={() => confirm(house.id)}
                          onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Icons.Trash style={{ marginLeft: "22px" }} />
                        </Popconfirm>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>
          )}
        </div>
      </Wrapper>
    </Container>
  );
};

export default MyProperties;
