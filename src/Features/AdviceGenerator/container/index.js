import {
  StyledContainer,
  StyledDividerDesktop,
  StyledDividerMobile,
  Button,
} from "./styled";
import { fetchAdvice } from "../adviceSlice";
import { useDispatch } from "react-redux";
import { ReactComponent as DiceIcon } from "./images/DiceIcon.svg";
import AdviceNumber from "./AdviceNumber";
import AdviceContent from "./AdviceContent";

const Container = () => {
  const dispatch = useDispatch();

  return (
    <StyledContainer>
      <AdviceNumber />
      <AdviceContent />
      <StyledDividerDesktop />
      <StyledDividerMobile />
      <Button onClick={() => dispatch(fetchAdvice())}>
        <DiceIcon />
      </Button>
    </StyledContainer>
  );
};

export default Container;
