import {
  StyledContainer,
  StyledDividerDesktop,
  StyledDividerMobile,
  Button,
} from "./styled";
import { ReactComponent as DiceIcon } from "./images/DiceIcon.svg";
import AdviceNumber from "./AdviceNumber";
import AdviceContent from "./AdviceContent";

const Container = () => {
  return (
    <StyledContainer>
      <AdviceNumber />
      <AdviceContent />
      <StyledDividerDesktop />
      <StyledDividerMobile />
      <Button>
        <DiceIcon />
      </Button>
    </StyledContainer>
  );
};

export default Container;
