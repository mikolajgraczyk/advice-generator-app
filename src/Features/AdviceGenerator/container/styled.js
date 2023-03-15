import styled from "styled-components";
import { ReactComponent as DividerDesktop } from "./images/DividerDesktop.svg";
import { ReactComponent as DividerMobile } from "./images/DividerMobile.svg";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledContainer = styled.main`
  background: ${({ theme }) => theme.color.darkGrayishBlue};
  max-width: 540px;
  padding: 48px 48px 72px 48px;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 15px;
  position: relative;

  @media (max-width: ${bpMobile}px) {
    padding: 40px 24px 64px 24px;
  }
`;

export const StyledDividerDesktop = styled(DividerDesktop)`
  margin-top: 40px;

  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;

export const StyledDividerMobile = styled(DividerMobile)`
  display: none;
  margin: 24px auto;

  @media (max-width: ${bpMobile}px) {
    display: block;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.neonGreen};
  border: none;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);

  &:hover{
    cursor: pointer;
  }

  &:active {
    box-shadow: 0px 0px 40px #53ffaa;
  }
`;
