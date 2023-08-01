import styled from "styled-components";

const bgDark = "#181818";
const bgDarkHover = "#646464";

const bgLight = "#f5f5f5";
const bgLightHover = "#dedede";

const Dialog = styled.dialog<{ width: number }>`
  width: ${({ width }) => width}vw;
  border: none !important;
  border-radius: 10px;
  max-height: 80vh;
  padding: 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${bgLight};

  @media (prefers-color-scheme: dark) {
    background-color: ${bgDark};
    color: white;
  }

  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0px;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.35);
  }
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 91% 8%;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-items: center;
  padding: 10px;
  div:nth-child(1) {
    display: flex;
  }

  background-color: ${bgLight};
  border: 1px solid ${bgLightHover};
  border-style: none none solid none;
  svg {
    border-radius: 50%;
    padding: 5px;
    box-sizing: border-box;
    border: none;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    transition: background 0.25s ease;
    color: ${bgDark};
    &:hover {
      background-color: ${bgLightHover};
    }
  }

  @media (prefers-color-scheme: dark) {
    border: 1px solid ${bgDarkHover};
    background-color: ${bgDark};
    svg {
      color: ${bgLight};
      &:hover {
        background-color: ${bgDarkHover};
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 85% 12%;
  }
`;

const Footer = styled.div`
  background-color: ${bgLight};
  border: 1px solid ${bgLightHover};
  border-style: solid none none none;
  position: sticky;
  bottom: 0;
  padding: 10px;
  @media (prefers-color-scheme: dark) {
    background-color: ${bgDark};
    border: 1px solid ${bgDarkHover};
  }
`;

const Content = styled.div`
  padding: 10px;
`;

export { Dialog, Title, Footer, Content };
