import React from "react";
import { useQuery, useMutation } from "react-query";
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
  const { request } = useHttp();
  const { data, refetch } = useQuery(
    "my properties",
    () => request({ url: "/v1/houses/me", token: true }),
    {
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );

  const { mutate: deleteHome } = useMutation((id) =>
    request({ url: `/v1/houses/${id}`, method: "DELETE", token: true })
  );

  const confirm = (id) => {
    deleteHome(id, {
      onSuccess: (res) => {
        if (res?.success) {
          message.success("Deleted");
          refetch();
        }
      },
    });
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const Card = ({ card }) => {
    return (
      <CardWrapper>
        <ImgWrapper>
          <img src={card.attachments[0].imgPath} alt="" />
        </ImgWrapper>
        <main>
          <div className="subtitle">{card.description}</div>
          <div className="description" style={{ marginBottom: "21px" }}>
            {card.region} {card.country}
          </div>
          <span className="delete">{card.price}</span>
          <div className="subtitle">{card.salePrice}</div>
        </main>
        <button>For sale</button>
      </CardWrapper>
    );
  };

  return (
    <Container>
      <Top>
        <div className="title">Wrapper</div>
        <Button
          width={"131px"}
          type={"primary"}
          onClick={() => navigate("/properties/add-new")}
        >
          Add New
        </Button>
      </Top>
      <Wrapper>
        <TableWrapper>
          <Table>
            <thead>
              <th>Listing Title</th>
              <th>Date Published</th>
              <th>Status</th>
              <th>View</th>
              <th>Action</th>
            </thead>
            <tbody>
              {data?.data?.map((house) => (
                <tr key={house.id}>
                  {/* <td>{house.description}</td> */}
                  <td style={{ width: "45%" }}>
                    <Card card={house} />
                  </td>
                  <td>{house.zipCode}</td>
                  <td>{house.status ? "Pending" : "No"}</td>
                  <td>3214</td>
                  <td>
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
      </Wrapper>
    </Container>
  );
};

export default MyProperties;
