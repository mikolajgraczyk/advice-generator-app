import { StyledAdviceNumber, StyledAdvice } from "./styled";

const ContainerContent = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <StyledAdvice>Loading...</StyledAdvice>;
  }

  if (error) {
    return <StyledAdvice>ERROR</StyledAdvice>;
  }

  if (data) {
    return (
      <>
        <StyledAdviceNumber>ADVICE #{data.slip.id}</StyledAdviceNumber>
        <StyledAdvice>{data.slip.advice}</StyledAdvice>
      </>
    );
  }
};

export default ContainerContent;
