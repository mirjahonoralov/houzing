import React, { useEffect, useState } from "react";
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
import { Checkbox, message, Select, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { body } from "./default-data";

const AddNew = () => {
  const { request } = useHttp();
  const navigate = useNavigate();
  const { id } = useParams();
  const { Option } = Select;
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(body);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  console.log(data, "data");

  const onChange = ({ target: { value, name } }) =>
    setData({ ...data, [name]: value });

  const onHouseDetailsChange = ({ target: { value, name } }) =>
    setData({ ...data, houseDetails: { ...data.houseDetails, [name]: value } });

  // const edit = useQuery(
  //   "edit house",
  //   () => id && request({ url: `/v1/houses/${id}`, token: true }),
  //   {
  //     onSuccess: (res) => id && setData(res?.data),
  //   }
  // );

  const { mutate: getSelectedHouse } = useMutation(
    () => id && request({ url: `/v1/houses/${id}`, token: true })
  );

  useEffect(() => {
    getSelectedHouse("getData", {
      onSuccess: (res) => id && setData(res?.data),
    });
  }, [id]);

  useQuery(
    "categories",
    () => request({ url: `/v1/categories/list`, token: true }),
    {
      onSuccess: (res) => {
        setCategories(res?.data);
        setCategory(res?.data[0]?.id);
      },
    }
  );

  const { mutate: create } = useMutation(() =>
    request({
      url: "/v1/houses",
      method: "POST",
      token: true,
      body: {
        ...data,
        componentsDto: { ...data.componentsDto, additional: "" },
        homeAmenitiesDto: { ...data.homeAmenitiesDto, additional: "" },
      },
    })
  );

  const { mutate: update } = useMutation(
    (id) =>
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: {
          ...data,
          componentsDto: { ...data.componentsDto, additional: "" },
          homeAmenitiesDto: { ...data.homeAmenitiesDto, additional: "" },
        },
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
    setData({
      ...data,
      componentsDto: {
        ...data.componentsDto,
        [name]: data.componentsDto?.[name] ? false : true,
      },
    });
  };

  const onChangeHouseAmenities = (name) => {
    setData({
      ...data,
      homeAmenitiesDto: {
        ...data.homeAmenitiesDto,
        [name]: data.homeAmenitiesDto?.[name] ? false : true,
      },
    });
  };

  const [selectedImgs, setSelectedImgs] = useState([]);
  const selectImg = (e) => {
    if (data.attachments.length !== 4) {
      const [file] = e.target.files;
      // setSelectedImgs([...selectedImgs, URL.createObjectURL(file)]);
      setData({
        ...data,
        attachments: [
          ...data.attachments,
          { imgPath: URL.createObjectURL(file) },
        ],
      });
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        marginRight: "20px",
      }}
      spin
    />
  );

  const onCategoryChange = (categoryId) => {
    setCategory(categoryId);
    setData({ ...data, categoryId: categoryId });
  };

  return (
    <Container>
      <MainWrapper>
        <div className="title">Add new property</div>
        <Section>
          <div className="subtitle">About House</div>
          <Wrapper>
            <Input2
              value={data.name}
              placeholder={"Property title*"}
              onChange={onChange}
              name="name"
            />
            <Select
              value={category}
              style={{
                width: "100%",
              }}
              onChange={onCategoryChange}
            >
              {categories.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Wrapper>
          <div className="description">Property Description*</div>
          <Input2
            value={data.description}
            name="description"
            onChange={onChange}
          />
        </Section>

        <Section>
          <div className="subtitle">Additional</div>
          <Wrapper>
            <Input2
              name={"beds"}
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
              value={data?.houseDetails?.yearBuilt}
              placeholder={"Year build"}
            />
            <Input2
              name={"area"}
              onChange={onHouseDetailsChange}
              value={data?.houseDetails?.area}
              placeholder={"Home area"}
            />
            <Input2
              name={"room"}
              onChange={onHouseDetailsChange}
              value={data?.houseDetails?.room}
              placeholder={"Rooms"}
            />
          </Wrapper>
        </Section>

        <Section>
          <div className="subtitle">Price</div>
          <Wrapper>
            <Input2
              value={data.price}
              name="price"
              onChange={onChange}
              placeholder={"Price"}
            />
            <Input2
              value={data.salePrice}
              name="salePrice"
              onChange={onChange}
              placeholder={"Sale Price"}
            />
          </Wrapper>
        </Section>

        <Section>
          <div className="subtitle">Location</div>
          <Wrapper>
            <Input2
              value={data.region}
              name="region"
              onChange={onChange}
              placeholder={"Region"}
            />
            <Input2
              name="address"
              onChange={onChange}
              placeholder={"Address"}
              value={data?.address}
            />
          </Wrapper>
          <Map setData={setData} data={data} />
        </Section>

        <Section>
          <div className="subtitle">Media</div>
          <MediaWrapper>
            <div className="description">Featured image</div>
            <Imgs>
              <ImgWrapper>
                {/* {selectedImgs.length >= 0 && (
                  <img src={selectedImgs[0]} alt="" />
                )} */}

                {data?.attachments.length >= 0 && (
                  <img src={data.attachments[0]?.imgPath} alt="" />
                )}
              </ImgWrapper>
              <ImgWrapper>
                {data?.attachments.length > 0 && (
                  <img src={data.attachments[1]?.imgPath} alt="" />
                )}
              </ImgWrapper>
              <ImgWrapper>
                {data?.attachments.length > 1 && (
                  <img src={data.attachments[2]?.imgPath} alt="" />
                )}
              </ImgWrapper>
              <ImgWrapper>
                {data?.attachments.length > 2 && (
                  <img src={data.attachments[3]?.imgPath} alt="" />
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

        {!id && (
          <Section>
            <div className="subtitle">Components</div>
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
            </CheckboxesWrapper>

            <div className="subtitle">Amenities</div>
            <CheckboxesWrapper>
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
        )}
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
