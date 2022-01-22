import React from "react";
import styled from "styled-components";
import { MutatingDots } from "react-loader-spinner";

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingText = styled.p`
  font-size: 2rem;
  color: #b62203;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <MutatingDots color="#D73502" height={80} width={80} />
      <LoadingText> Loading Data </LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
