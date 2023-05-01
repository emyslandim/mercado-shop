import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const showInCard = keyframes`
  0% {
    transform: scale(0) rotate(180deg);
    
  }
  100% {
    transform: scale(1) rotate(0deg);
    
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  overflow: hidden;

  background-color: #0009;

  animation: ${fadeIn} 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 400px;
  min-height: 350px;
  max-height: calc(100vh - 20px);
  padding: 20px;
  color: black;

  z-index: 19;

  overflow-y: auto;

  animation: ${showInCard} 0.4s;

  background-color: white;
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 30px;

    cursor: pointer;
    transition: 0.2s;

    :hover {
      text-shadow: 0px 4px 10px var(--bgPrimary);
      transform: scale(1.2);
    }

    :active {
      transform: scale(0.95);
    }
  }

  > header {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin: 0px 20px;
  }
`;
