import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const InfoContainer = styled.div`
  width: 270px;
  padding: 1rem;
  border: 2px solid #b62203;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  position: absolute;
  top: 80px;
  left: 30px;
  font-family: "Oswald", sans-serif;
`;

const InfoRow = styled.div`
  display: flex;
  column-gap: 4px;
  margin-bottom: 5px;
`;

const Title = styled.p`
  font-weight: 600;
`;

const Value = styled.p`
  font-weight: 400;
`;

const CloseBox = styled.div`
  position: absolute;
  right: 5px;
  top: 0px;
  font-size: 1.6rem;
  cursor: pointer;
`;

const InfoBox = ({ data, setDataToShow }) => {
  return (
    <InfoContainer>
      <CloseBox>
        <Icon icon="carbon:close" onClick={() => setDataToShow(null)} />
      </CloseBox>
      <InfoRow>
        <Title>Location: </Title>
        <Value> {data && data.title} </Value>
      </InfoRow>
      <InfoRow>
        <Title>ID: </Title>
        <Value> {data && data.id} </Value>
      </InfoRow>
    </InfoContainer>
  );
};

export default InfoBox;
