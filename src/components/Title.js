import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background-color: #b62203;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #f2f2f0;
  font-size: 1.4rem;
  z-index: 2;
`;

const HeaderTitle = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
`;

const Title = () => {
  return (
    <Header>
      <Icon icon="heroicons-solid:fire" />
      <HeaderTitle> Wildfire Tracker </HeaderTitle>
    </Header>
  );
};

export default Title;
