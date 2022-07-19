import React from "react";
import { PropertyWrapper } from "../style";

const Property = ({ data }) => {
  return (
    <>
      <div className="subtitle">Property Details</div>
      <PropertyWrapper>
        <div>
          <span>Property ID: </span>
          <span>{data?.propertyId || "not assigned"}</span>
        </div>
        <div>
          <span>Bedrooms: </span>
          <span>{data?.bedRooms || "not assigned"}</span>
        </div>
        <div>
          <span>Property Type: </span>
          <span>{data?.propertyType || "not assigned"}</span>
        </div>
        <div>
          <span>Price: </span>
          <span>{data?.price || "not assigned"}</span>
        </div>
        <div>
          <span>Bathrooms: </span>
          <span>{data?.bathrooms || "not assigned"}</span>
        </div>
        <div>
          <span>Property Status: </span>
          <span>{data?.propertyStatus ? "in sale" : "sold"}</span>
        </div>
        <div>
          <span>Property Size: </span>
          <span>{data?.propertySize || "not assigned"}</span>
        </div>
        <div>
          <span>Garage: </span>
          <span>{data?.houseDetails?.garage || "not assigned"}</span>
        </div>

        <div>
          <span>Year Bulit: </span>
          <span>{data?.houseDetails?.yearBuild || "not assigned"}</span>
        </div>
        <div>
          <span>Garage size: </span>
          <span>{data?.houseDetails?.garageSize || "not assigned"}</span>
        </div>
      </PropertyWrapper>
    </>
  );
};

export default Property;
