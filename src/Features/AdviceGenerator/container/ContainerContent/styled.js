import styled from "styled-components";

export const StyledAdvice = styled.div`
  text-align: center;
  margin-top: 24px;
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.color.lightCyan};
`;

export const StyledAdviceNumber = styled.div`
  text-align: center;
  letter-spacing: 4.08571px;
  font-weight: 800;
  font-size: 13px;
  color: ${({ theme }) => theme.color.neonGreen};
`;
