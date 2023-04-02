import {
  StyledContainer,
  StyledDividerDesktop,
  StyledDividerMobile,
  Button,
} from "./styled";
import { ReactComponent as DiceIcon } from "./images/DiceIcon.svg";
import ContainerContent from "./ContainerContent";
import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "./getAdvice";

const Container = () => {
  const { isLoading, error, data, refetch } = useQuery(["advice"], getAdvice);

  return (
    <StyledContainer>
      <ContainerContent data={data} error={error} isLoading={isLoading} />
      <StyledDividerDesktop />
      <StyledDividerMobile />
      <Button onClick={() => refetch()}>
        <DiceIcon />
      </Button>
    </StyledContainer>
  );
};

export default Container;
