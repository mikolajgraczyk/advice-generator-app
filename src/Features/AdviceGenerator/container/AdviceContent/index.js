import { StyledAdviceContent } from "./styled";
import { useSelector } from "react-redux";
import { selectAdviceContent } from "../../adviceSlice";

const AdviceContent = () => {
  const advice = useSelector(selectAdviceContent);

  return (
    <StyledAdviceContent>
      {advice}
    </StyledAdviceContent>
  );
};

export default AdviceContent;
