import React, { useState } from "react";
import { Button, Input2 } from "../Generic";
import Map from "./Map";
import {
  ButtonWrapper,
  CheckboxesWrapper,
  Container,
  Imgs,
  ImgWrapper,
  MainWrapper,
  MediaWrapper,
  Section,
  UploadBtn,
  Wrapper,
} from "./style";
import { useHttp } from "../../hooks/useHttp";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Checkbox, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const AddNew = () => {
  const { request } = useHttp();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [houseComponents, setHouseComponents] = useState([
    // { name: "additional", isSelected: false },
    { name: "airCondition", isSelected: false },
    { name: "Drycourtyarder", isSelected: false },
    { name: "furniture", isSelected: true },
    { name: "gasStove", isSelected: false },
    { name: "internet", isSelected: true },
    { name: "tv", isSelected: false },
  ]);

  const [amenities, setAmenities] = useState([
    { name: "additional", isSelected: false },
    { name: "busStop", isSelected: false },
    { name: "garden", isSelected: false },
    { name: "market", isSelected: false },
    { name: "park", isSelected: false },
    { name: "parking", isSelected: false },
    { name: "school", isSelected: false },
    { name: "stadium", isSelected: false },
    { name: "subway", isSelected: false },
    { name: "superMarket", isSelected: false },
  ]);

  const body = {
    address: "newwwwww",
    attachments: [
      {
        imgPath: "string",
      },
    ],
    categoryId: 0,
    city: "string",
    componentsDto: {
      additional: "string",
      airCondition: true,
      courtyard: true,
      furniture: true,
      gasStove: true,
      internet: true,
      tv: true,
    },
    country: "string",
    description: "new home again",
    favorite: true,
    homeAmenitiesDto: {
      additional: "string",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: true,
      school: true,
      stadium: true,
      subway: true,
      superMarket: true,
    },
    houseDetails: {
      area: 0,
      bath: 0,
      beds: 0,
      garage: 0,
      room: 2,
      yearBuilt: 2000,
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: "string",
    price: 0,
    region: "string",
    salePrice: 0,
    status: true,
    zipCode: "string",
  };

  const [data, setData] = useState(body);

  const onChange = ({ target: { value, name } }) =>
    setData({ ...data, [name]: value });

  const onHouseDetailsChange = ({ target: { value, name } }) =>
    setData({ ...data, houseDetails: { ...data.houseDetails, [name]: value } });

  useQuery(
    "edit house",
    () => id && request({ url: `/v1/houses/${id}`, token: true }),
    {
      onSuccess: (res) => setData(res.data),
    }
  );

  const { mutate: create } = useMutation(() =>
    request({
      url: "/v1/houses",
      method: "POST",
      token: true,
      // headers: {},
      body: data,
    })
  );

  const { mutate: update } = useMutation(
    (id) =>
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: data,
      })
  );

  const onSubmit = () => {
    setLoading(true);
    if (id)
      update(id, {
        onSuccess: (res) => {
          if (res.success) {
            setLoading(false);
            message.info("Updated");
            navigate("/my-properties");
          }
        },
        onError: (err) => {
          setLoading(false);
        },
      });
    else
      create("", {
        onSuccess: (res) => {
          setLoading(false);
          navigate("/my-properties");
        },
        onError: (err) => {
          setLoading(false);
        },
      });
  };

  const onChangeHouseComponents = (name) => {
    // setHouseComponents((prev) => {
    //   return prev.map((item) => {
    //     if (item.name === name) {
    //       if (item.isSelected) return { ...item, isSelected: false };
    //       else return { ...item, isSelected: true };
    //     } else return item;
    //   });
    // });

    setData({
      ...data,
      componentsDto: {
        ...data.componentsDto,
        [name]: data.componentsDto?.[name] ? false : true,
        additional: "string",
      },
    });
  };

  const onChangeHouseAmenities = (name) => {
    setData({
      ...data,
      homeAmenitiesDto: {
        ...data.homeAmenitiesDto,
        [name]: data.homeAmenitiesDto?.[name] ? false : true,
        additional: "string",
      },
    });
  };
  console.log(data, "data");

  const selectImg = (e) => {
    if (selectedImgs.length !== 4) {
      const [file] = e.target.files;
      console.log(file, "file");
      setSelectedImgs([...selectedImgs, URL.createObjectURL(file)]);
    }
  };

  const [selectedImgs, setSelectedImgs] = useState([]);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        marginRight: "20px",
      }}
      spin
    />
  );

  return (
    <Container>
      <MainWrapper>
        <div className="title">Add new property</div>
        <Section>
          <div className="subtitle">Contact information</div>
          <Wrapper>
            <Input2
              placeholder={"Property title*"}
              onChange={onChange}
              name="name"
            />
            <Input2 placeholder={"Type"} />
          </Wrapper>
          <div className="description">Property Description*</div>
          <Input2 name="description" onChange={onchange} />
        </Section>

        <Section>
          <div className="subtitle">Additional</div>
          <Wrapper>
            <Input2
              name={"room"}
              onChange={onHouseDetailsChange}
              value={data?.houseDetails?.beds}
              placeholder={"Beds"}
            />
            <Input2
              name={"bath"}
              onChange={onHouseDetailsChange}
              value={data?.houseDetails?.bath}
              placeholder={"Bath"}
            />
            <Input2
              name={"garage"}
              onChange={onHouseDetailsChange}
              value={data?.houseDetails?.garage}
              placeholder={"Garage"}
            />
          </Wrapper>
          <Wrapper>
            <Input2
              name={"yearBuilt"}
              onChange={onHouseDetailsChange}
              placeholder={"Year build"}
            />
            <Input2
              name={"area"}
              onChange={onHouseDetailsChange}
              placeholder={"Home area"}
            />
            <Input2
              name={"room"}
              onChange={onHouseDetailsChange}
              placeholder={"Rooms"}
            />
          </Wrapper>
        </Section>

        <Section>
          <div className="subtitle">Price</div>
          <Wrapper>
            <Input2 name="price" onChange={onChange} placeholder={"Price"} />
            <Input2
              name="salePrice"
              onChange={onChange}
              placeholder={"Sale Price"}
            />
          </Wrapper>
        </Section>

        <Section>
          <div className="subtitle">Location</div>
          <Wrapper>
            <Input2 name="region" onChange={onChange} placeholder={"Region"} />
            <Input2
              name="address"
              onChange={onChange}
              placeholder={"Address"}
              value={data?.address}
            />
          </Wrapper>
          <Map />
        </Section>

        <Section>
          <div className="subtitle">Media</div>
          <MediaWrapper>
            <div className="description">Featured image</div>
            <Imgs>
              <ImgWrapper>
                {selectedImgs.length >= 0 && (
                  <img src={selectedImgs[0]} alt="" />
                )}
              </ImgWrapper>
              <ImgWrapper>
                {selectedImgs.length > 0 && (
                  <img src={selectedImgs[1]} alt="" />
                )}
              </ImgWrapper>
              <ImgWrapper>
                {selectedImgs.length > 1 && (
                  <img src={selectedImgs[2]} alt="" />
                )}
              </ImgWrapper>
              <ImgWrapper>
                {selectedImgs.length > 2 && (
                  <img src={selectedImgs[3]} alt="" />
                )}
              </ImgWrapper>
            </Imgs>
            <UploadBtn type="file">
              Upload <input type="file" onChange={selectImg} />
            </UploadBtn>
          </MediaWrapper>
          <MediaWrapper>
            <div className="description">Gallery</div>
            <UploadBtn type="file">
              Upload <input type="file" />
            </UploadBtn>
          </MediaWrapper>
          <MediaWrapper>
            <div className="description">Attachment</div>
            <div>pdf</div>
            <UploadBtn type="file">
              Upload <input type="file" />
            </UploadBtn>
          </MediaWrapper>
          <MediaWrapper>
            <Input2 placeholder={"Video link"} />
            <div style={{ marginTop: "44px" }} className="description">
              Virtual tour
            </div>
            <Input2 />
          </MediaWrapper>
        </Section>

        <Section>
          <div className="subtitle">Amenities</div>
          <CheckboxesWrapper>
            {Object.keys(data.componentsDto).map((item, id) => (
              <Checkbox
                key={id}
                checked={data.componentsDto[item]}
                onChange={() => onChangeHouseComponents(item)}
              >
                {item}
              </Checkbox>
            ))}
            <br />
            {Object.keys(data.homeAmenitiesDto).map((item, id) => (
              <Checkbox
                key={id}
                checked={data.homeAmenitiesDto[item]}
                onChange={() => onChangeHouseAmenities(item)}
              >
                {item}
              </Checkbox>
            ))}
          </CheckboxesWrapper>
        </Section>

        <Section>
          <div className="subtitle">Select Energy Class</div>
          <Wrapper>
            <Input2 placeholder={"Energy class"} />
            <Input2 placeholder={"Energy Index in kWh/m2a"} />
          </Wrapper>
        </Section>
        <ButtonWrapper>
          <Button
            onClick={onSubmit}
            width={"150px"}
            type="primary"
            style={{ marginLeft: "auto" }}
          >
            {loading && <Spin indicator={antIcon} />}
            Submit
          </Button>
        </ButtonWrapper>
      </MainWrapper>
    </Container>
  );
};

export default AddNew;
